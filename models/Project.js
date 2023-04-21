const mongoose=require('mongoose');

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

const Project=mongoose.model('Project',projectSchema);
module.exports=Project;