//home controller
const ProjectModel = require('../models/Project');
console.log('controller is up and running!')
module.exports.home=async function(req,res){
    try{
        let Project= await ProjectModel.find({});
    res.render('home',{
        title:"Project| Home",
        Project
    })
}
catch(err){
    console.log('error in home controller',err)
}
}