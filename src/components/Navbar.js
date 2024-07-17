import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">AluraFlix</div>
      <ul className="navbar-nav">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Videos</a></li>
        <li><a href="#">Categorías</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
