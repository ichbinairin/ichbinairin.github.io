import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

const NavBar = () => {
  return (
    <div>
      <nav id="mainNavbar" className="navbar navbar-dark navbar-expand-md py-0 fixed-top">
        <Link to="/" className="nav-link">CANDY</Link>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation">
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

