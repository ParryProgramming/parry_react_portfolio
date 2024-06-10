// importing React library
import React from 'react';
// importing Footer styles
import '../css/Footer.css';

// footer component
function Footer() {
  return (
    // footer element with a class of "footer"
    // displays copyright text with the current year and company name
    // "br" tag is used for line break
    <footer className="footer">Copyright ©{new Date().getFullYear()} Parry Programming <br /> All rights reserved.</footer>
  );
}

// exporting the Footer component to be used in other parts of the application
export default Footer;