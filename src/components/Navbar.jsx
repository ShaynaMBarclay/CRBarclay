import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/atm-logo.jpg"


function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

 
  useEffect(() => {
    function handleScroll() {
      const currentScroll = window.scrollY;

      // Only hide navbar if scrolling down AND scrolled more than 50px
      if (currentScroll > 50 && currentScroll > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScroll);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? '' : 'navbar--hidden'}`}>
        <div className="navbar-container">
            {/* brand*/}
            <Link to="/" className="navbar-logo">
            <img  src={logo} alt="ATM Logo" />
            <span className="company-name">ATM Solutions</span>
            </Link>

            {/* Nav Links */}
            <nav className="navbar-links">
          <Link to="/contact" className="nav-button">Contact Us</Link>
        </nav>
         </div>
         </nav>
  );
};

export default Navbar