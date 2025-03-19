import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2BoHcUiAASk8aygWzHBF-hrpyuSPxfEIqtw&s">
        </img>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#services">Serviços</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
};
export default Navbar;
