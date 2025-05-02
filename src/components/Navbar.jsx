import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/atm-logo.jpg"


function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true);  // scrolling up
      }
      setLastScrollY(window.scrollY);
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