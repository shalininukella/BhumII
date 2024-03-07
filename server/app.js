const express =require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app=express();
const cookieParser =require('cookie-parser');
dotenv.config({path:'./config.env'});

require("./db/conn");
const PORT =process.env.PORT;

app.use(cookieParser());


const Admin= require("./model/adminSchema")
const Donater= require("./model/donaterSchema")


app.use(express.json());





app.use(require("./router/auth"));





app.listen(PORT,()=>
{
    console.log(`Server is running on the root of   ${PORT}`)
})