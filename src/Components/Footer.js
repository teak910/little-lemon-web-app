import React from 'react';
import Logo from '../Images/logo1.jpg';

const Footer = () => {
    return (
      <footer>
        <section>
          <div className='restaurant-info'>
            <img src={Logo} alt=""/>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</p>
          </div>
          <div>
            <h3>Important Links</h3>
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
              <li>Address: <br/> 123 TownCity,USA</li>
              <li>Phone: <br/> ++ 123456789</li>
              <li>Email: <br/> littlelemon@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3>Social Media Links</h3>
            <ul>
              <li><a href='/'>Facebook</a></li>
              <li><a href='/'>Instagram</a></li>
              <li><a href='/'>X</a></li>
            </ul>
          </div>
        </section>
      </footer>
    );
  };
  export default Footer;