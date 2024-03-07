import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

import '../styles/Login.css'
const Login = () => {
  const navigate=useNavigate();

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');


  const postData= async (e)=>{
  e.preventDefault();

  

  const res= await fetch("/Asignin",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      email,password
    })

  })

  const data= await res.json();
  console.log(data);
  if(res.status === 400 || !data)
  {
    window.alert("Login Unsuccess");
    console.log("Login Unsuccess");
    
  }
  else
  {
    window.alert("Login Success");
    console.log("Reg Success");

    navigate("/stats")
  }
}













  return (
    <div className='login-container'>
    <div className='login'>
    <form method='POST' className='register-form' >
        <div  className='login-div'>
          <label htmlFor="">Email</label>
          <input type="email" name="email" id=""  value={email}  onChange={(e)=>{setEmail(e.target.value)}} required />
        </div>
        <div className='login-div'>
          <label htmlFor="">Password</label>
          <input type="password" name="password" id=""  value={password} onChange={(e)=>{setPassword(e.target.value)}}  />
        </div>
        <button type='submit' name='signup' onClick={postData} >Login</button>

    </form>
     </div>
     <div className='register-slogan'>
        <h1>"Catalyzing Change, Empowering Lives: Uniting for a Better World"</h1>  
     </div> 
  </div>
  )
}

export default Login
