import React from 'react';
import '../css/Footer.css';

function Footer() {
  return <footer className="footer">Copyright ©{new Date().getFullYear()} Parry Programming <br /> All rights reserved.</footer>;
}

export default Footer;