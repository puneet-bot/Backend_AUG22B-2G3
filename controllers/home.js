//home controller
console.log('controller is up and running!')
module.exports.home=function(req,res){
    res.render('home',{
        title:"Project| Home",
        puneet:["1234","r78","bdhfj"]
    })
}