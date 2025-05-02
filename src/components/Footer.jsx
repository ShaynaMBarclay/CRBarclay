import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© CRBarclay Solutions 2025</p>
        <Link to="/" className="home-button">Home</Link>
      </div>
    </footer>
  );
}

export default Footer;
