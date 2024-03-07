import React from 'react'
import '../styles/Home.css'
import IndiaCanvas from './canvas/India'
import {About} from '../components'
import {Button} from 'antd'
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
const Home = () => {
  const navigate=useNavigate();
  
  const rVolunteer =() =>{
    navigate("/Admin")
  }
  const rDonate =() =>{
    navigate("/Donator")
  }
  return (
    <>
     <Navbar/>
    <div className='hero-container'>
     <div className='hero-text-box'>
      <div className='hero-text'>
        <h1 className='hero-head-text'>India's Largest <br />Volunteer Organization</h1>
      </div>
      <div className='hero-button'>
            <Button className='hero-btn1' onClick={rVolunteer} >Volunteer With Us</Button>
            <Button className='hero-btn2' onClick={rDonate}>Donate For Cause</Button>
      </div>
      </div>
      {/* <div className='hero-map'>
        <IndiaCanvas/>
      </div> */}

    </div>
    <About/>
    <Footer/>
    </>
  )
}

export default Home
