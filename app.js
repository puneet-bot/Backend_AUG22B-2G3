//Requiring Modules and other static constants
const port                  =       8000;
const express               =       require('express');
const app                   =       express();
const expressLayouts        =       require('express-ejs-layouts');
const db                    =       require('./config/mongoose');
const bodyParser            =       require('body-parser');
const session               =       require('express-session');
const mongoStore            =       require('connect-mongo');
const passport              =       require('passport');
const passportLocal         =       require('./config/passport-local');
const googlePassport        =       require('./config/passport-google-oauth2');
const cookieParser          =       require('cookie-parser');
const sassMiddleware        =       require('node-sass-middleware');
const path                  =       require('path');

app.use(sassMiddleware({
    /* Options */
    src: path.join(__dirname, 'assets', 'scss')
  , dest: path.join(__dirname, 'assets', 'css')
  , debug: true
  , outputStyle: 'extended'
  , prefix:  '/css'
}));

app.use(cookieParser());
app.use(express.urlencoded({extended:false}));
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
app.set('layout', 'layout');

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(session({
    name: 'Project_Creator',
    // TODO change the secret before deployment in production mode
    secret: '1234Test',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: mongoStore.create({
        mongoUrl: db._connectionString,
        autoRemove: 'disabled'
      })
}));
app.use(express.static('assets'));
app.use('/uploads',express.static(__dirname+'/uploads'));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

//using routes to handle all url traffic
app.use('/',require('./routes'));

//Server starts - htttps://localhost:8000
//Server starts - htttps://localhost:8000/

app.listen(port,function(err){
    console.log(`Listening on Port ${port}`);
})