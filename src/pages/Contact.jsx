import { useState } from 'react'
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.send("service_60moz9q", "template_90zvhpe", formData, "H61SpxzNmxG-dTJsl")
      .then(() => {
        setIsSent(true);
        setIsLoading(false);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        setIsLoading(false);
      });
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <div className="contact-hero">
        <div className="contact-hero-bar">
          <span className="accent-red" /><span className="accent-white" /><span className="accent-blue" />
        </div>
        <h1 className="contact-hero-title">Get In Touch</h1>
        <p className="contact-hero-sub">We're available 24/7 — reach out anytime.</p>
        <div className="fastest-reply-banner">
          <FontAwesomeIcon icon={faMobileScreenButton} />
          <span>Fastest response? <strong>Send us a text</strong> at +1 (240) 535-4137</span>
        </div>
      </div>

      <div className="contact-body">
        {/* Info Panel */}
        <div className="contact-info">
          <div className="info-card">
            <span className="info-star">★</span>
            <h2 className="info-heading">Contact Information</h2>
            <div className="info-item">
              <div className="info-icon-wrap info-icon-wrap--gold">
                <FontAwesomeIcon icon={faMobileScreenButton} />
              </div>
              <div>
                <div className="info-label">
                  Text Message
                  <span className="fastest-badge">⚡ Fastest Reply</span>
                </div>
                <a href="sms:+12405354137" className="info-value">+1 (240) 535-4137</a>
                <div className="info-hint">Text us for the quickest response</div>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon-wrap">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <div className="info-label">Phone</div>
                <a href="tel:+12405354137" className="info-value">+1 (240) 535-4137</a>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon-wrap">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <div className="info-label">Email</div>
                <a href="mailto:crbarclayjr@aol.com" className="info-value">crbarclayjr@aol.com</a>
              </div>
            </div>
            <div className="info-availability">
              <div className="availability-dot" />
              Available 24 hours a day, 7 days a week
            </div>
          </div>
        </div>

        {/* Form Panel */}
        <div className="contact-form-container">
          <h3 className="form-heading">Send Us a Message</h3>

          {isSent && (
            <div className="success-message">
              <span>✓</span> Message sent successfully! We'll be in touch soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your ATM needs..."
                required
                className="form-textarea"
                rows={5}
              />
            </div>

            <button type="submit" className="form-submit" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send Message ★'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;