import React,{useState} from 'react'
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom';
const Donator = () => {
  const navigate=useNavigate();
  const [userData, setUserData]=useState({name:"",email:"",phone:"",password:"",cpassword:""})

  const handleInputs =(e) =>{
    e.preventDefault();
    const name=e.target.name;
    const value = e.target.value

    setUserData({...userData ,[name]:value})
  }




  const adminSubmit = async (e)=>{
    e.preventDefault();
    const{name,email,phone,password,cpassword}=userData;
    const res= await fetch('/Dregister',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,password,cpassword
      })
    });

    const data= await res.json();

    if(data.status===422 || !data)
    {
      window.alert("Invalid reg")
      console.log("Invalid reg")
    }
    else
    {
      window.alert("Reg success")
      console.log("Reg success")
      navigate("/DLogin");
    
    }
  }





  return (
    <div className='login-container'>
      <div className='login'>
      <form method='POST' className='register-form' >
          <div className='login-div'>
            <label htmlFor="">Name</label>
            <input type="text" name="name" id="" value={userData.name} onChange={handleInputs} required/>
          </div>
          <div  className='login-div'>
            <label htmlFor="">Email</label>
            <input type="email" name="email" value={userData.email} id="" required onChange={handleInputs} />
          </div>
          <div className='login-div' >
            <label htmlFor="">Phone</label>
            <input type="number" name="phone" id="" value={userData.phone} required onChange={handleInputs}/>
          </div>
      
          <div className='login-div'>
            <label htmlFor="">Password</label>
            <input type="password" name="password" value={userData.password} id="" onChange={handleInputs}  />
          </div>
          <div className='login-div'>
            <label htmlFor="">Confirm Password</label>
            <input type="password" name="cpassword" value={userData.cpassword}id="" onChange={handleInputs} />
          </div>

          <button type='submit' name='signup' onClick={adminSubmit}>Submit</button>
          <button type='submit' name='signup' onClick={() => navigate("/Admin")}>Admin</button>
      </form>
       </div>
       <div className='register-slogan'>
          <h1>"Catalyzing Change, Empowering Lives: Uniting for a Better World"</h1>  
       </div> 
    </div>
  )
}

export default Donator