import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import headerImg from '../Images/serveFood.jpg';

const Header = () => {
  return (
    <header className="header">
      <section>
        <div className='banner'>
          <h2>Little Lemon</h2>
          <h2>Chicago</h2>
          <p>We are family owned Mediterranean resaturant, focused on traditional recipes with a modern twist.</p>
          <Link to='/booking' aria-label="on Click"><button>Reserve a Table</button></Link>
        </div>
        <div className='header-img'>
          <img src={headerImg} alt=""/>
        </div>
      </section>
    </header>
  )
}

export default Header;
