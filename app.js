//Requiring Modules and other static constants
const port                  =       8000;
const express               =       require('express');
const app                   =       express();

//using routes to handle all url traffic
app.use('/',require('./routes'))


//Server starts
app.listen(port,function(err){
    console.log(`Listening on Port ${port}`);
})