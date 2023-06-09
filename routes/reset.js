const express=require('express');
 const router=express.Router();
 const userModel= require('../models/User');
 const Confirmation = require('../models/confirmation');
 const crypto=require('crypto');
 const recoveryMailSender = require('../mailers/recovery_mailer');
 const queue = require('../config/kue');
 const queueExecutor = require('../workers/recovery-email');

router.get('/forgot',function(req,res){
    res.render("forgot_password",{
        title:"Project| Reset Password"
    });
})

router.post('/check',async function(req,res){
    let user=await userModel.find({email:req.body.email});
    if(user){
        let cp=await Confirmation.create({
            email: req.body.email,
            accessToken: crypto.randomBytes(20).toString('hex'),
            isValid: true
        });
        let job = queue.create('reset', cp).save(function (err) {
            if (err) {
                console.log('Error in finding in err', err);
                return;
            }
            res.redirect('back');
        });
    }
    
})


router.get('/recover',async function(req,res){
    let token=await Confirmation.findOne({accessToken:req.query.access_token});
        console.log(req.query);
        res.render('reset',{title:"reset",token:req.query.access_token});
})

router.post('/update',async function(req,res){
    if(req.body.password!=req.body.confirmPassword){
        res.redirect('/reset');
    }
    let token= await Confirmation.findOne({accessToken:req.body.token});
        token.isValid=false;
        token.save();
        let user=await userModel.findOne({email:token.email})
            user.password=req.body.password;
            user.save();
            res.redirect('/new/signin');
        })

module.exports=router;