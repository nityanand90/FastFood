import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
         <img src='' alt=""/>
         <p>Visit Us if You Like Food</p>
         <div className='footer-social-icons'>
            <img src='' alt=''/>
            <img src=''alt=''/>
            <img src='' alt=''/>

         </div>
        </div>
        <div className='footer-content-center'>
              <h2>company</h2>
              <ul>
                <li>home</li>
                <li>about us</li>
                <li>delivery</li>
                <li>privacy policy</li>

              </ul>
        </div>
        <div className='footer-content-right'>
                <h2>Get In Touch</h2>
                <ul>
                <li>+919800511743</li>
                <li>foodycontact@gmail.com</li>
                </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>copyright 2024 foody.com -All Right Reserved.</p>

    </div>
  )
}

export default Footer;
