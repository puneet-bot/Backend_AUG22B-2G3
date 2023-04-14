const express=require('express');
 const router=express.Router();
 const User=require('../models/User');
 const passport=require('passport');
 
const userController    =   require('../controllers/user');
router.get('/signin',userController.signIn);
router.get('/signup',userController.signUp);
router.post('/create',async function(req,res){
    console.log(req.body);
    // get the sign up data
    try {
        if (req.body.password != req.body.confirm_password){
            console.log('Password not matching!')
            return res.redirect('back');
        }
        let user=await User.findOne({email: req.body.email});
        if (!user){
            let createUser= await User.create(req.body);
            console.log(createUser);
        }
        return res.redirect('/new/signin');
    }
    catch(err){
        console.log('error in finding user in signing up'); 
        return res.redirect('/new/signup')
    }
})
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/new/signin'},
),function(req,res){
    console.log(req.body);
    return res.redirect('/');
})

router.post('/signout',function(req,res){
    req.logout(function(err) {
        if (err) {
            return next(err);
        }
        req.session.destroy(function(err) {
            if (err) {
                return next(err);
            }
            res.clearCookie('Project_Creator'); // use the name of the session cookie here
            res.redirect('/');
        });
    });
})
module.exports=router;