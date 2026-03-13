import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-accent-bar">
        <span className="accent-red" />
        <span className="accent-white" />
        <span className="accent-blue" />
      </div>

      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-star">★</span>
          <div>
            <div className="footer-name">CRBarclay Solutions</div>
            <div className="footer-tagline">24/7 — Sales, Services & Processing of ATMs</div>
          </div>
        </div>

        <div className="footer-links">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} CRBarclay Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;