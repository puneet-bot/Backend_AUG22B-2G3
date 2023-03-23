const port                  =       8000;
const express               =       require('express');
const app                   =       express();


app.get('/test',function(request,res){
    res.send("Hello");
})



app.listen(port,function(err){
    console.log(`Listening on Port ${port}`);
})