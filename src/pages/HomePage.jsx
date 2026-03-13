import Carousel from '../components/Carousel';
import bioImage from '../assets/bioimage.jpg';

const services = [
  {
    icon: '💳',
    title: 'ATM Sales',
    desc: 'New and certified pre-owned machines for businesses of all sizes.',
  },
  {
    icon: '🔧',
    title: 'Installation & Service',
    desc: '24/7 on-site maintenance and rapid response support nationwide.',
  },
  {
    icon: '⚙️',
    title: 'Transaction Processing',
    desc: 'Reliable, secure processing with real-time monitoring and reporting.',
  },
  {
    icon: '₿',
    title: 'Bitcoin ATM Support',
    desc: 'Cutting-edge crypto transaction capability for modern businesses.',
  },
];

function Homepage() {
  return (
    <div className="home-page">
      <Carousel />

      {/* Services Strip */}
      <section className="services-strip">
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <span className="service-icon">{s.icon}</span>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bio / About Section */}
      <section className="bio">
        <div className="bio-image-wrap">
          <img src={bioImage} alt="CRBarclay ATM Solutions" className="bio-img" />
          <div className="bio-image-badge">
            <span className="badge-star">★</span>
            <span>Trusted Since Day One</span>
          </div>
        </div>

        <div className="bio-text">
          <div className="bio-eyebrow">Your Trusted Partner</div>
          <h1 className="bio-heading">
            Comprehensive ATM Solutions for Every Business
          </h1>
          <h2 className="bio-subheading">Now with Bitcoin Support</h2>
          <p className="bio-body">
            At CRBarclay Solutions, we specialize in providing comprehensive ATM
            solutions for businesses of all sizes — now with the added option of
            Bitcoin transactions. From sales and installation to maintenance and
            transaction processing, we deliver reliable, 24/7 support to ensure
            your machines stay up and running.
          </p>
          <p className="bio-body">
            Whether you're looking to boost foot traffic, streamline cash access
            for customers, or start your own ATM route with cryptocurrency
            options, we're here to help every step of the way.
          </p>
          <blockquote className="bio-promise">
            "24/7 — Sales, Services & Processing of ATMs"
          </blockquote>
          <a href="/contact" className="bio-cta">Get Started Today</a>
        </div>
      </section>
    </div>
  );
}

export default Homepage;