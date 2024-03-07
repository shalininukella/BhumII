const mongoose=require('mongoose');
// const bcrypt = require('bcrypt');


const volunteerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    dob:{
        type:String,
        required:true
    },

})



const Volunteer =mongoose.model('VOLUNTEER',volunteerSchema);//inside the curly it should be full caps and also see that the const will hjave the first as the upp case
module.exports=Volunteer;
