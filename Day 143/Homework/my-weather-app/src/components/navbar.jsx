import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h2 className="logo">Weather App</h2>
        {/* Burger Menu */}
        <div className="burger" onClick={toggleMenu}>
          <div className={`line ${isMenuOpen ? "rotate-top" : ""}`}></div>
          <div className={`line ${isMenuOpen ? "hide-middle" : ""}`}></div>
          <div className={`line ${isMenuOpen ? "rotate-bottom" : ""}`}></div>
        </div>
        {/* Navigation Links */}
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
