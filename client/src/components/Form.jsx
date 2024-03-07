import React,{useState} from 'react'
import '../styles/Form.css'
import logo from '../images/team1.jpg'
import logo2 from '../images/team2.jpg'
import EarthCanvas from '../components/canvas/Earth'
const Form = () => {
  const[user , setUser]=useState({
    name:"",
    email:"",
    phone:"",
    dob:""

  })

  let name,value;
const handleInput= ((event)=>{
    name=event.target.name;
    value=event.target.value;

    setUser({...user,[name]:value});
    
  })
  const PostData = async (e) =>{
    e.preventDefault();

    const {name,email,phone,dob}=user;

    const res = await fetch("/Vregister",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,phone,dob
      })
    })

    const data= await res.json();

    if(data.status===422 || !data)
    {
      window.alert("Invalid reg")
      console.log("Invalid reg")
    }
    else
    {
      window.alert("Data added")
      console.log("Data not added")
      
    }
  }
  return (
    <div className='volunteer-form-page'>
      <div className='form-head'> 
       <div className='form-head-img'>
           <img src={logo}  width={600} className='donate-img' />
       </div>
      </div>
      <div className='form-sub'>
        <div className='form-sub-text'>
            <h1>To a <em>New</em> journey</h1>
            <p>Volunteering with us allows you to bring about change at the grassroots level. We welcome volunteers from all walks of life. Whatever your interest: be it education, environment, animal welfare or something else, there’s an opportunity to match.
            Being a volunteer allows you to elevate your work to an adventure, a journey to a better tomorrow. So, where do you want to go?</p>
        </div>
        <img src={logo2} alt="logo2" className='form-sub-img' />
      </div>
      <div className='form-sub-text2'>
            <h1>Volunteering for NGO</h1>
            <p>Volunteer with NGO dedicated to transforming the education of underprivileged children to make a difference in the community. Go beyond monetary assistance and into their lives, bringing change with your own hands and experiencing the fulfillment of your commitment to society.</p>
            <p>
            At Bhumi, we urge everyone to volunteer and make the change they wish to see in the world. You may achieve change at the grassroots level by volunteering for NGO like us. We urge people from all walks of life to volunteer in NGO based on their interests, whether it is education, the environment, or animal welfare since we have opportunities in these areas available for them.
            </p>
        </div>
      <div className='volunteer-form-bg'>
       <div className='volunteer-form'>
       <form action="" >
        <div className='volunteer-input'>
          <label htmlFor="">Name</label>
          <input type="text" name="name" id="" value={user.name} onChange={handleInput}/>
        </div>
        <div className='volunteer-input'>
          <label htmlFor="">Email</label>
          <input type="email" name="email" value={user.email} onChange={handleInput} id="" />
        </div>
        <div className='volunteer-input'>
          <label htmlFor="">Phone</label>
          <input type="number" name="phone" value={user.phone} onChange={handleInput} id="" />
        </div>
        <div className='volunteer-input'>
          <label htmlFor="">DOB</label>
          <input type="text" name="dob" valur={user.dob} onChange={handleInput} id="" />
        </div>
        
      
        <button className='volunteer-form-submit' onClick={PostData}>Submit</button>
      </form>
      </div> 
      <div className='earthcanvas'>
        <EarthCanvas/>
      </div>
        </div> 
    </div>
  )
}

export default Form
