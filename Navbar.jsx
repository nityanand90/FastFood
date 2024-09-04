import React, {useState} from 'react'

import './Navbar.css'

const Navbar = () => {
  
  return (

    <div className='navbar'>
      
      <ul className='navbar-menu'>
        <li>Home</li>
        <li >Menu</li>
        <li >Mobile-App</li>
        <li >Contact-Us</li>

      </ul>
      <div className='navbar-right'>
       <div className='user'><img src='user.jpg' alt=''/></div>
       <div className='navbar-search-icon'>
        <img src='./bascketcart.png' alt=''/>
        <div className='dot'></div>
       </div>
        <button><span>Sign In</span></button>
        </div>
     </div>

    
  )
}

export default Navbar