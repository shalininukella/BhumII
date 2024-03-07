import React from 'react';
import '../styles/footer.css'
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logo from '../Bhumi.png'

export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    return (
            <footer className="footer">
                <div className="content">
                    <div className="top">
                        <div className='logo-details'>
                                <img src={logo} alt="" width={80} height={50} />
                
                        </div>
                        <div className='media-icons'>
                            <Link href="#"><i > <FaFacebookF/> </i></Link>
                            <Link href="#"><i > <FaTwitter/> </i> </Link>
                            <Link href="https://www.instagram.com/hiresh_23" target="_blank"><i > <FaInstagram/>  </i></Link>
                            <Link href="#"><i > <FaLinkedinIn /> </i></Link>
                            <Link href="#"><i > <FaYoutube />  </i></Link>
                        </div>
                    </div>
                    <div className='link-boxes'>
                        <ul className='box'>
                            <li className='link_name'>Company</li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/contact">Contact us</a></li>
                            <li><a href="/about">About us</a></li>
                            <li><a href="/movie">Get started</a></li>
                        </ul>
                        <ul className='box'>
                            <li className='link_name'>Services</li>
                            <li><a href="#">App design</a></li>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Logo design</a></li>
                            <li><a href="#">Banner design</a></li>
                        </ul>
                        <ul className='box'>
                            <li className='link_name'>Account</li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">My account</a></li>
                            <li><a href="#">Prefrences</a></li>
                            <li><a href="#">Purchase</a></li>
                        </ul>
                        <ul className='box input-box'>
                            <li className='link_name'>Subscribe</li>
                            <li><input type="text" placeholder="Enter your email" /></li>
                            <li><input type="button" value="Subscribe" /></li>
                        </ul>
                    </div>
                </div>
                <div className='bottom-details'>
                    <div className='bottom_text'>
                        <span className='copyright_text'> Copyright © 2023
                        <Link href="/>">HFLIX</Link> All rights reserved </span>
                        <span className='policy_terms'>
                        <Link href="/">Privacy policy</Link>
                        <Link href="/">Terms & condition</Link>
                        </span>
                    </div>
                </div>
            </footer>

    );
}

export default Footer;