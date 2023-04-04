//requiring necessary modules and packages
const express           =   require('express');
const app               =   express();
const router            =   express.Router();
const homeController    =   require('../controllers/home');

const ashisController   =   require('../controllers/ashis_controller')

// Get request to check if things are working fine
router.get('/',homeController.home)
console.log('router on');

router.get('/ashis', ashisController.ashis);

//exporting router as variable to the caller
module.exports=router;