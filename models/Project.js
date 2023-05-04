const mongoose=require('mongoose');
const multer        =require('multer');
const path          =require('path');
const PROJECT_PATH  =path.join('/uploads/projects');

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    link:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    image: {
        type: String
    },
    category:{
        type:String,
        required: true
    },
    repo:{
        type:String,
        required: true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    comment:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    },
}, {
    timestamps: true
});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'..',PROJECT_PATH))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  projectSchema.statics.uploadedProjectPath=multer({ storage: storage }).single('project');
  projectSchema.statics.projectPath=PROJECT_PATH;

const Project=mongoose.model('Project',projectSchema);
module.exports=Project;