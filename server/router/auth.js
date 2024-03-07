const express = require("express");
const router = express.Router();
const jwtoken = require("jsonwebtoken");
const dAuthenticate = require("../middleware/dAuthenticate");
const aAuthenticate = require("../middleware/dAuthenticate");

require("../db/conn");
const Admin = require("../model/adminSchema");
const Donater = require("../model/donaterSchema");
const Volunteer = require("../model/volunteerSchema");

router.get("/", (req, res) => {
  res.send("Hello from the server routeer");
});

//admin register
router.post("/Aregister", (req, res) => {
  console.log("hello");
  const { name, email, phone, employeeId, password, cpassword, key_a } =
    req.body;

  if (!(name && email && phone && employeeId && password && cpassword)) {
    return res.status(422).json({ error: "PLz fill all of the data" });
  }
  if (key_a === "yash") {
    Admin.findOne({ email: email })
      .then((userExist) => {
        if (userExist) {
          return res.status(422).json({ error: "Email already exist" });
        } else if (password !== cpassword) {
          return res.status(422).json({ error: "Password not matching" });
        }

        const admin = new Admin({
          name,
          email,
          phone,
          employeeId,
          password,
          cpassword,
        }); //here is the else part we cant write that in the cacch
        //sincce catch is when the server didnt resping
        admin
          .save()
          .then(() => {
            res.status(200).json({ message: "Admin registered" });
          })
          .catch((err) => {
            res.status(500).json({ error: "Failed Database error" });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    return res.status(422).json({ error: "YOu are not the admin" });
  }
});

//donater register
router.post("/Dregister", (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;

  if (!(name && email && phone && password && cpassword)) {
    return res.status(422).json({ error: "PLz fill all of the data" });
  }
  console.log(email);
  Donater.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Email already exist" });
      } else if (password !== cpassword) {
        return res.status(422).json({ error: "Password not matching" });
      }

      const donater = new Donater({ name, email, phone, password, cpassword }); //here is the else part we cant write that in the cacch
      //sincce catch is when the server didnt resping
      donater
        .save()
        .then(() => {
          res.status(200).json({ message: "Donater registered" });
        })
        .catch((err) => {
          res.status(500).json({ error: "Failed Database error" });
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

//volunteer register
router.post("/Vregister", (req, res) => {
  const { name, email, phone, dob } = req.body;
  console.log(name);
  if (!name || !email || !phone || !dob) {
    return res.status(422).json({ error: "PLz fill all of the data" });
  }
 
  Volunteer.findOne({email:email})
  .then((userExist)=>{
      if(userExist){

          
      return res.status(422).json({error:"Email already exist"});

  

      const volunteer = new Volunteer({name,email,phone,dob});//here is the else part we cant write that in the cacch
                                                                      //sincce catch is when the server didnt resping
      volunteer.save()
      .then(()=>
      {res.status(200).json({message:"Volunteer registered"});})
      .catch((err)=>{
          res.status(500).json({error:"Failed Database error"})
      })



  })
  .catch(err=>{console.log(err)});

  
})


//admin sigin
router.post("/Asignin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).json({ error: "Please fill in all the data" });
    }
  });




  router.get("/logout",aAuthenticate,(req,res)=>{
    console.log("Hello my logout page");
    res.clearCookie('jwtoken',{path:'/'});///only this is the main code for logggin out
    res.status(200).send('USer logout');////vvvvimp
})

  router.get("/logout",dAuthenticate,(req,res)=>{
    console.log("Hello my logout page");
    res.clearCookie('jwtoken',{path:'/'});///only this is the main code for logggin out
    res.status(200).send('USer logout');////vvvvimp
})














    const userExist = await Admin.findOne({ email: email });

    if (userExist && userExist.password === password) {
      const token = await userExist.generateAuthToken();

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      res.status(200).json({ message: "Login" });
    } else if (userExist && !(userExist.password === password)) {
      return res.status(400).json({ error: "Invalid Credentials" });
    } else {
      return res.status(400).json({ error: "No account found" });
    }
  




//signin for the Donater
router.post("/Dsignin", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);

    if (!(email && password)) {
      return res.status(400).json({ error: "Please fill in all the data" });
    }

    const userExist = await Donater.findOne({ email: email });

    if (userExist && userExist.password === password) {
      const token = await userExist.generateAuthToken();

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      res.status(200).json({ message: "Login" });
    } else if (userExist && !(userExist.password === password)) {
      return res.status(400).json({ error: "Invalid Credentials" });
    } else {
      return res.status(400).json({ error: "No account found" });
    }
  } catch (error) {
    // Handle any errors that occur during the execution
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//contact form for the donaters
router.post("/Dcontact", async (req, res) => {
  //add the dAuthenticate here
  try {
    const { name, email, message } = req.body;

    if (!(name && email && message)) {
      // console.log("error in the contact form")
      return res.json({ error: "Please fill the correct contact forn" });
    }

    const userContact = await Donater.findOne({ _id: req.userID });

    if (userContact) {
      const userMessage = await userContact.addMessage(name, email, message);

      await userContact.save();

      res.status(201).json({ message: "message added succefully" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/donationCert", dAuthenticate, (req, res) => {
  res.send(req.rootUser);
});

// router.post(/)
module.exports = router;
