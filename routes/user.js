const express=require('express');
 const router=express.Router();
 
const userController    =   require('../controllers/user');
router.get('/signin',userController.signIn);
router.get('/signup',userController.signUp);
router.post('/create',function(req,res){
    console.log(req.body);
    return res.redirect('/');
})
router.post('/create-session',function(req,res){
    console.log(req.body);
    return res.redirect('/');
})


module.exports=router;