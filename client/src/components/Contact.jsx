import React,{useState} from 'react'
import '../styles/Contact.css'





const Contact = () => {

  const [contact,setContact] =useState({name:"",email:"",message:""})

  const handleInputs =(e) =>{
    e.preventDefault();
    const name=e.target.name;
    const value = e.target.value
  
    setContact({...contact ,[name]:value})
  }
  
  
  
  
  const contactForm = async (e)=>{
    e.preventDefault();
    const{name,email,message}=contact;
    const res= await fetch('/Dcontact',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,message
      })
    });
  
    const data= await res.json();
  
    if(!data)
    {
      // console.log("messafge not send");
      alert("Error ")
    }
    else
    {
      alert("mesaage sent");
      setContact({...contact, message : ""})
    }
  }
  














  return (
    <div class="container"> 
     <div className='form'>
       <div className='contact-text'>
        <h1 className='contact-head'>Contact Us</h1>
        <p className='contact-sub'>Unleash your words! Contact us beyond the bounds of conventional forms</p>
       </div>
       <div>
        <form id="contactus" action="">
        <div class="form-group">
        <input type="text" name="name" onChange={handleInputs} id="nameInput" placeholder="Enter your Name"/>
        </div>
        <div class="form-group">
        <input type="text" name="email" onChange={handleInputs} id="emailInput" placeholder="Enter your email"/>
        </div>
        <div class="form-group">
        <input type="textarea" name="message" onChange={handleInputs} id="messageInput" placeholder="Enter your message"/>
        </div>
        <button class="btn" onclick={contactForm}>Send</button>
        </form>
        </div>   
       </div>

    </div>

  )
}

export default Contact
