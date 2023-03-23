//requiring necessary modules and packages
const express           =   require('express');
const app               =   express();
const router            =   express.Router();
const subhradipController    =   require('../controllers/subhradip');

// Get request to check if things are working fine
router.get('/',subhradipController.subhradip)
console.log('router on');

//exporting router as variable to the caller
module.exports=router;