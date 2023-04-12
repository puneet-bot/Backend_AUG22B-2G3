module.exports.signIn=function(req,res){
    res.render("signin.ejs",{
        title:"Project| Sign In"
    });
}

module.exports.signUp=function(req,res){
    res.render("SignUp",{
        title:"Project| Sign Up"
    });
}