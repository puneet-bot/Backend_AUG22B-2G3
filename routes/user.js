const express=require('express');
 const router=express.Router();
 
const userController    =   require('../controllers/user');
router.get('/signin',userController.signIn);
router.get('/signup',userController.signUp);


module.exports=router;