import React from 'react'
import './Header.css'
const Header = () => {

  return (
    <div className='header'>
      <div className="search-container">
        <form action="">
          <input type="text" placeholder="Search Food..." name="search"/>
            <button type="submit"><img src='search.webp'/></button>

            
        </form>
      </div>
      <div className='header-contents'>
        <h2>Order Your Food</h2>
        <p>You can order Food at any Time </p>
        <button>View Menu</button>

      </div>
      <div className='mov'><img src='freehomedel.jpg'></img></div>
    </div>
  )
}

export default Header