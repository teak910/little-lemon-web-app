import React, { useState } from 'react';
import Logo from '../Images/logo1.jpg';

const Nav = () => {

   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () =>{
    setMenuOpen(!menuOpen);
   }
    return (
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="/" className='logo'>
           <img src={Logo} className="photo-logo " alt=""/>
        </a>
        <div className='menu-icon' onClick={toggleMenu}>
          <div className='bar'></div>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
        {/* navigation links */}
        <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
            <li><a href="#header">Home</a></li>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Services</a>
            </li>
            <li>
              <a href='/'>Menu</a>
            </li>
            <li>
              <a href='/'>Reservations</a>
            </li>
            <li>
              <a href='/'>Order online</a>
            </li>
            <li>
              <a href='/'>Login</a>
            </li>
          </ul>
      </nav>
    );
  };
  export default Nav;