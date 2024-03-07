const jwt = require("jsonwebtoken");
const Donater = require("../model/donaterSchema")

const dAuthenticate = async (req,res,next)=>{
    try{
        const token =req.cookies.jwtoken;
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);//and if the verification succeeds, it returns the decoded token payload.

        const rootUser = await Donater.findOne({_id:verifyToken._id,"tokens.token":token});

        if(!rootUser){
            throw new Error ("User not found")
        }
       
        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;//this will come handy when we will have to senf the data tio the serever via the contact forn
       
        next();
    }
    catch(err){
        res.status(401).send("Unauthorized:No token provided");
        console.log(err);
    }

}






module.exports=dAuthenticate