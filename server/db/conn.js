const mongoose=require("mongoose");

const DB= process.env.DATABASE;
mongoose.connect(DB).then(()=>{
    console.log("connected to the database");
}).catch((err)=>console.log(err));