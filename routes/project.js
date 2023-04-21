const express=require('express');
 const router=express.Router();

 router.get("/",function(req,res){
    res.render("project.ejs",{
        title:"Project Form"
    })
 })

 router.post("/",function(req,res){
    console.log("req: ",req.body);
 })

 module.exports=router;