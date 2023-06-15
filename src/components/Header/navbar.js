import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';


const NavBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const $nav = document.getElementById('mainNavbar');
      $nav.classList.toggle('scrolled', window.pageYOffset > $nav.offsetHeight);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

const [menuToggle, setMenuToggle] = useState(false);


  return (
    <div>
      <nav id="mainNavbar" className="navbar navbar-dark navbar-expand-md py-0 fixed-top">
        <nav id="brandName" href="/">CANDY</nav>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation" 
        onClick={ () => {
          setMenuToggle(!menuToggle)
        }}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navLinks">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">HOME</Link>
            </li>
            <li class="nav-item">
              <Link to="/about" className="nav-link">ABOUT</Link>
            </li>
            <li class="nav-item">
              <Link to="/products" className="nav-link">PRODUCTS</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

