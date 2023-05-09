//requiring necessary modules and packages
const express           =   require('express');
const app               =   express();
const router            =   express.Router();
const homeController    =   require('../controllers/home');

// Get request to check if things are working fine
router.get('/',homeController.home)
console.log('router on');
router.use('/new',require('./user'));
router.use('/func',require('./func.js'));
router.use('/reset',require('./reset'));

//exporting router as variable to the caller
module.exports=router;