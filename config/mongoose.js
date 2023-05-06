const    mongoose      =   require('mongoose');
mongoose.connect(`mongodb://localhost/Project_Creator`);
const   db             =   mongoose.connection;

db.on('error',console.error.bind(console,"Error Connecting Database"));
db.once('open',function(){
    console.log("DB is Connected!");
});
module.exports=db;