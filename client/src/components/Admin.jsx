import { useState } from 'react'
import React from 'react'
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';
const Admin = () => {
  const navigate=useNavigate();

  const [userData, setUserData]=useState({name:"",email:"",phone:"",employeeId:"",password:"",cpassword:"",key_a:""})

  const handleInputs =(e) =>{
    e.preventDefault();
    const name=e.target.name;
    const value = e.target.value

    setUserData({...userData ,[name]:value})
  }




  const adminSubmit = async (e)=>{
    e.preventDefault();
    const{name,email,phone,employeeId,password,cpassword,key_a}=userData;
    const res= await fetch('/Aregister',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,employeeId,password,cpassword,key_a
      })
    });

    const data= await res.json();
    console.log(data);
    if(data.status===422 || !data)
    {
      window.alert("Invalid reg")
      console.log("Invalid reg")
    }
    else
    {
      window.alert("Reg success")
      console.log("Reg success")
      navigate("/Login");
    
    }
  }


  return (
    <div className='login-container'>
      <div className='login'>
      <form method='POST' className='login-form' >
          <div className='login-div'>
            <label htmlFor="">Name</label>
            <input type="text" name="name" value={userData.name} onChange={handleInputs}  id=""  required/>
          </div>
          <div  className='login-div'>
            <label htmlFor="">Email</label>
            <input type="email" name="email" value={userData.email} onChange={handleInputs}  id="" required />
          </div>
          <div className='login-div' >
            <label htmlFor="">Phone</label>
            <input type="number" name="phone" value={userData.phone} onChange={handleInputs}  id=""  required/>
          </div>
          <div className='login-div'>
            <label htmlFor="">Employee Id</label>
            <input type="text" name="employeeId" value={userData.employeeId} onChange={handleInputs}  id="" />
          </div>
          <div className='login-div'>
            <label htmlFor="">Password</label>
            <input type="password" name="password" value={userData.password} onChange={handleInputs}  id=""  />
          </div>
          <div className='login-div'>
            <label htmlFor="">Confirm Password</label>
            <input type="password" name="cpassword" value={userData.cpassword} onChange={handleInputs}  id="" />
          </div>
          <div className='login-div'>
            <label htmlFor="">Key_Admin</label>
            <input type="password" name="key_a" value={userData.key_a} onChange={handleInputs} id="" />
          </div>
          <button onClick={adminSubmit}>Submit</button>
          <button onClick={() => navigate("/")}>Donator</button>
      </form>
       </div>
       <div className='login-slogan'>
          <h1>"Elevating Lives, Empowering Communities: Together We Can Make a Difference!"</h1>  
       </div> 
    </div>
  )
}

export default Admin
