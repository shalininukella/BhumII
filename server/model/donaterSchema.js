const mongoose=require('mongoose');
// const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const donaterSchema=new mongoose.Schema({
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
    work:{
        type:String,
        
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    },
    tokens:[//array since once user can login multiple times
        {
            token:{//se this is token 
                type:String,
                required:true
            }
        }
    ],
    date:{
        type:Date,
        default:Date.now
    },
    messages:[
        {
            name:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required:true
            },

            message:{
                type:String,
                required:true
            },
        }
    ]
})


donaterSchema.methods.generateAuthToken = async function(){
    try{
        let token =jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch(err){

    }
}



donaterSchema.methods.addMessage=async function(nameV,emailV,messageV){
    try{
        this.messages=this.messages.concat({name:nameV,email:emailV,message:messageV});
        await this.save();
        return this.messages;
    }
    catch(err){
        console.log(err);
    }



}
const Donater =mongoose.model('DONATER',donaterSchema);//inside the curly it should be full caps and also see that the const will hjave the first as the upp case
module.exports=Donater;
