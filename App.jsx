import React from 'react'


import './App.css'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Pizza from './images/pizza.jpg'
import Burger from './images/Burger.jpg'
import croissant from './images/croissant.jpg'
import donerkebab from './images/doner kebab.jpg'
import donut from './images/donut.jpeg'
import french from './images/french fries.webp'
import friedchicken from './images/fried chicken.jpg'
import hotdog from './images/hot dog.jpg'
import pancakes from './images/pancakes.jpg'
import sandwich from './images/sandwich.jpg'
import waffles from './images/waffles.jpg'
import popcorn from './images/popcorn.jpg'




const App = () => {
  return (
    <div className='app'>

      <Navbar />
      <Header />

      <div className='container'>
        <div className='box'>
          <div className='product-image'>
            <img src={Pizza} />
            <h3>Pizza</h3>
            <p>Pizza, Italian, Pasta, Fast Food, Desserts
              The Rink Mall, Chauk Bazaar, Darjeeling</p>
            <span>40₹</span>
            <div>
              <button className='btn'>Add To Card </button><br></br>
              <button className='btn'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='product-image'>
            <img src={Burger} />
            <h3>Burger</h3>
            <p>Premium burger with crunchy chicken,
              Mexican Habanero sauce, cheese, tomato & onion</p>
            <span>50₹</span>
            <div>
              <button className='btn'>Add To Card </button><br></br>
              <button className='btn'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='product-image'>
            <img src={croissant} />
            <h3>Croissant</h3>
            <p>A croissant is a French pastry made from puff pastry
              in a crescent shape.It is a buttery and flaky.</p>
            <span>45₹</span>
            <div>
              <button className='btn'>Add To Card </button><br></br>
              <button className='btn'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='product-image'>
            <img src={donerkebab} />
            <h3>Doner Kebab</h3>
            <p>Doner kebab is a dish of Turkish origin made of meat 
               cooked on a vertical rotisserie.</p>
            <span>60₹</span>
            <div>
              <button className='btn'>Add To Card </button><br></br>
              <button className='btn'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='product-image'>
            <img src={donut} />
            <h3>Donut</h3>
            <p>A donut is a type of pastry made from leavened fried dough.
             It is popular in many countries</p>
            <span>55₹</span>
            <div>
              <button className='btn'>Add To Card </button><br></br>
              <button className='btn'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='product-image'>
            <img src={french} />
            <h3>French Fries</h3>
            <p>French Fries are arguably the perfect snack when you are 
              craving something crisp, salty, savory.</p>
            <span>70₹</span>
            <div>
              <button className='btn'>Add To Card </button><br></br>
              <button className='btn'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='product-image'>
            <img src={friedchicken} />
            <h3>Fried Chicken</h3>
            <p>Fried chicken is a dish consisting of chicken pieces 
              that have been coated with seasoned flour </p>
            <span>60₹</span>
            <div>
              <button className='btn'>Add To Card </button><br></br>
              <button className='btn'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='product-image'>
            <img src={hotdog} />
            <h3>Hot Dog</h3>
            <p>A hot dog is a dish consisting of a grilled, steamed, or boiled 
            sausage served in the slit of a partially sliced. </p>
            <span>40₹</span>
            <div>
              <button className='btn'>Add To Card </button><br></br>
              <button className='btn'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='product-image'>
            <img src={pancakes} />
            <h3>Pancakes</h3>
            <p>A pancake is a flat cake,prepared from a starch-based 
              batter that may contain eggs, milk and butter.</p>
            <span>100₹</span>
            <div>
              <button className='btn'>Add To Card </button><br></br>
              <button className='btn'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='product-image'>
            <img src={sandwich} />
            <h3>Sandwich</h3>
            <p>Sandwich, Pasta, Continental
            Ruby Hospital Area, Kolkata</p>
            <span>150₹</span>
            <div>
              <button className='btn'>Add To Card </button><br></br>
              <button className='btn'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='product-image'>
            <img src={waffles} />
            <h3>Waffles</h3>
            <p>A waffle is a dish made from leavened batter or dough 
               that is cooked between two plates </p>
            <span>40₹</span>
            <div>
              <button className='btn'>Add To Card </button><br></br>
              <button className='btn'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className='product-image'>
            <img src={popcorn} />
            <h3>Popcorn</h3>
            <p>Popcorn is a variety of corn kernel which 
            expands and puffs up when heated.</p>
            <span>80₹</span>
            <div>
              <button className='btn'>Add To Card </button><br></br>
              <button className='btn'>Buy Now</button>
            </div>
          </div>
        </div>

      </div>
      <div className='download-app'>
           <h3>Download App</h3>
        
        <div className='appstore'> <img src='app_store.webp'></img></div>
        <div className='playstore'><img src='play_store.png'></img></div>
        
      </div>
      <Footer />



    </div>
  )
}

export default App

