const express           =   require('express');
const router            =   express.Router();
const projectModel      =   require('../models/Project');

router.post('/delete',async function(req,res){
    console.log('Deleting',req.body);
    let deletedProject=await projectModel.findByIdAndDelete(req.body.project);
    console.log(deletedProject);
    res.redirect('/');
})

//exporting router as variable to the caller
module.exports=router;