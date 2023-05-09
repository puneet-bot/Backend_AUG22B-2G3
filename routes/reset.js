const express=require('express');
 const router=express.Router();
 const userModel= require('../models/User');
 const Confirmation = require('../models/confirmation');
 const crypto=require('crypto');
 const queue = require('../config/kue');

router.get('/forgot',function(req,res){
    res.render("forgot_password",{
        title:"Project| Reset Password"
    });
})

router.post('/check',async function(req,res){
    console.log(req.body);
    let user=await userModel.find({email:req.body.email});
    if(user){
        let cp=await Confirmation.create({
            email: req.body.email,
            accessToken: crypto.randomBytes(20).toString('hex'),
            isValid: true
        });
        // console.log(cp);
        let job = queue.create('reset', cp).save(function (err) {
            if (err) {
                console.log('Error in finding in err', err);
                return;
            }
            console.log('job enqueued', job.id);
            console.log('job detail',job);
            res.redirect('back');
        });
    }
    
})


module.exports=router;