import React from 'react';
import Logo from '../Images/small_logo.png';

const Footer = () => {
    return (
      <footer>
        <section>
          <div className='restaurant-info'>
            <img src={Logo} alt=""/>
          </div>
          <div>
            <h3>Application Links</h3>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/'>About</a></li>
              <li><a href='/'>Menu</a></li>
              <li><a href='/'>Reservations</a></li>
              <li><a href='/'>Order Online</a></li>
              <li><a href='/'>Login</a></li>
            </ul>
          </div>
          <div>
            <h3>Contact</h3>
            <ul>
              <li>Address: <br/> 123 chicago, USA</li>
              <li>Phone: <br/> ++ 123456789</li>
              <li>Email: <br/> littlelemonwebapp@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3>Social Media Links</h3>
            <ul>
              <li><a href='/'>Facebook</a></li>
              <li><a href='/'>Instagram</a></li>
            </ul>
          </div>
        </section>
      </footer>
    );
  };
  export default Footer;