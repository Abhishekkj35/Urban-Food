import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.urban}/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, ipsam tempore. Rerum sint asperiores voluptates aperiam ea? Ipsum vitae illo omnis aperiam vero expedita quae corporis odit exercitationem. Praesentium, fuga!</p>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>080-34583458</li>
                    <li>contact@UrbanFood.com</li>
                </ul>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt=""/>
                    <img src={assets.twitter_icon} alt=""/>
                    <img src={assets.linkedin_icon} alt=""/>
                </div>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 © UrbanFood.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer