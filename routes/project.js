const express=require('express');
 const router=express.Router();
 const ProjectModel=require('../models/Project');

 router.get("/",function(req,res){
    res.render("project.ejs",{
        title:"Project Form"
    })
 })

 router.post("/",function(req,res){
    console.log("req: ",req.body);
   let sampleProject= ProjectModel.create({
      name:req.body.project_name,
      link:req.body.project_link,
      description:req.body.project_description,
      image:req.body.project_link1,
      category:req.body.project_category,
      repo:req.body.project_repo
    })
    console.log(sampleProject);
    return res.redirect('/')
 })

 module.exports=router;