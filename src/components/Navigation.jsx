import React from 'react';
import '../css/Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Navigation;