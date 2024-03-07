import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import {BiCameraMovie} from 'react-icons/bi'
import logo from '../Bhumi.png'
const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 800) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
  return (
    <nav className={`header ${colorChange?'change2':""}`}>
        <div className='app-logo '>
            <Link to="/home" >
              <img src={logo} alt="" className='nav-logo-img'/>   
            </Link>
        </div>
        <div className='nav-links'>
                 <ul>
                    <li><Link to="/home" className={`links ${colorChange?'change':""}`}>Home</Link></li>
                    <li><Link to="/donate" className={`links ${colorChange?'change':""}`}>Donate</Link></li>
                    <li><Link to="/stats" className={`links ${colorChange?'change':""}`}>Stats</Link></li>
                    <li><Link to="/volunteer" className={`links ${colorChange?'change':""}`}>Volunteer</Link></li>
                    <li><Link to="/contact" className={`links ${colorChange?'change':""}`}>Contact Us</Link></li>
                 </ul>
        </div>
    </nav>
  )
}

export default Navbar