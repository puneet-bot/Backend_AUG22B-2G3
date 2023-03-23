//requiring necessary modules and packages
const express       =   require('express');
const app           =   express();
const router        =   express.Router();

// Get request to check if things are working fine
router.get('/',function(req,res){
    res.send('hi');
})
console.log('router on');

//exporting router as variable to the caller
module.exports=router;