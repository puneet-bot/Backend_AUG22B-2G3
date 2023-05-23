const express       =   require('express');
const router        =   express.Router();
const project       =   require('../../../models/Project')

router.get('/',async function(req,res){
    let projects=await project.find({})
        .sort('-createdAt')
    return res.json(200,{
        message:"list of Projects",
        projects
    })
})



module.exports=router;