//import react library
import React from 'react';

// importing styles for Navigation component
import '../css/Navigation.css';

// navigation component
function Navigation() {
  return (
    // navigation bar
    <nav className="navigation">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}

// exporting the Navigation component to be used in other parts of the application
export default Navigation;