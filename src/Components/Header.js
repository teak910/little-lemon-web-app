import React from 'react';
import HeaderImg from '../Images/serveFood.jpg'
const Header = () => {
  return (
    <header className="header">
       <section>
        <div className='banner'>
          <h2>Little Lemon</h2>
          <h2>Chicago</h2>
          <p>We are family owned Mediterranean resaturant, focused on traditional recipes with a modern twist.</p>
          <button>Reserve a Table</button>
        </div>
        <div className='header-img'>
          <img src={HeaderImg} alt=""/>
        </div>
      </section>
    </header>
  )
}

export default Header;