//Requiring Modules and other static constants
const port                  =       8000;
const express               =       require('express');
const app                   =       express();
const expressLayouts        =       require('express-ejs-layouts');
const db                    =       require('./config/mongoose')

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('layout', 'layout');

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');



//using routes to handle all url traffic
app.use('/',require('./routes'));

//Server starts - htttps://localhost:8000
//Server starts - htttps://localhost:8000/

app.listen(port,function(err){
    console.log(`Listening on Port ${port}`);
})