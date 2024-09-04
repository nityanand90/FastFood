import React from 'react'
import './Footer.css'

const Footer = () => {
  return (


    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <h2>Visit Us if You Like Our Food</h2>
          <div className='footer-social-icons'>
            <img src='clogo.jpg' alt='' />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>Company</h2>
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </div>
        <div className='footer-content-right'>
          <h2>Get In Touch</h2>
          <li>+919800511743</li>
          <li>fastfoodcontact@gmail.com</li>

        </div>
      </div>
      <hr />
      <p className='footer-copyright'>copyright 2024 FastFood.com -All Right Reserved.</p>

    </div>

  )
}

export default Footer;
