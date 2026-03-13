import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/atm-logo.jpg"

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 20);
      if (currentScroll > 50 && currentScroll > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScroll);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${showNavbar ? '' : 'navbar--hidden'} ${scrolled ? 'navbar--scrolled' : ''}`}>
      {/* Patriotic accent bar */}
      <div className="navbar-accent-bar">
        <span className="accent-red" />
        <span className="accent-white" />
        <span className="accent-blue" />
      </div>

      <div className="navbar-container">
        {/* Brand */}
        <Link to="/" className="navbar-logo">
          <div className="logo-badge">
            <img src={logo} alt="CRBarclay ATM Solutions" className="logo-img" />
          </div>
          <div className="brand-text">
            <span className="brand-primary">CRBarclay</span>
            <span className="brand-secondary">ATM Solutions</span>
          </div>
        </Link>

        {/* Nav */}
        <div className="navbar-right">
          <div className="nav-tagline">24/7 Sales · Service · Processing</div>
          <Link to="/contact" className="nav-cta">
            <span className="nav-cta-icon">★</span>
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;