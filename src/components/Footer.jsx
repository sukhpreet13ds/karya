import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.png';

const CURRENT_YEAR = new Date().getFullYear();

const Footer = ({ onOpenQueryModal }) => {
  const handleQueryClick = (service = 'Footer Inquiry') => {
    if (onOpenQueryModal) {
      onOpenQueryModal(service);
    }
  };

  return (
    <footer className="footer-main-section" id="footer">
      <div className="footer-container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-brand-link">
              <img src={logo} alt="Karya Logo" className="footer-logo-img" />
            </Link>
            <p className="footer-brand-desc">
              Karya Marketing is your full-service digital growth partner. We combine creative storytelling,
              performance media buying, and enterprise web architecture to build brands that lead.
            </p>
            <div className="footer-badge-trust">
              <span className="trust-indicator"></span>
              <span>Trusted by brands in 6 countries</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><a href="/#reviews" className="footer-link">Video Reviews</a></li>
              <li><a href="/#testimonials" className="footer-link">Testimonials</a></li>
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              <li><Link to="/services" className="footer-link">Paid Performance Ads</Link></li>
              <li><Link to="/services" className="footer-link">Search Engine Optimization (SEO)</Link></li>
              <li><Link to="/services" className="footer-link">E-Commerce & Marketplace</Link></li>
              <li><Link to="/services" className="footer-link">Website & Web App Development</Link></li>
            </ul>
          </div>

          {/* Contact & Inquiry Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Get in Touch</h4>
            <ul className="footer-contact-list">
              <li className="contact-item">
                <Mail size={16} className="contact-icon" />
                <a href="mailto:hello@karyamarketing.com" className="footer-link">hello@karyamarketing.com</a>
              </li>
              <li className="contact-item">
                <Phone size={16} className="contact-icon" />
                <a href="tel:+919896093951" className="footer-link">+91 9896093951</a>
              </li>
              <li className="contact-item">
                <MapPin size={16} className="contact-icon" />
                <span>Available Globally / Headquartered in India</span>
              </li>
            </ul>

            <button
              type="button"
              className="btn-footer-query"
              onClick={() => handleQueryClick('Footer Inquiry')}
            >
              <span>Get my free lead audit</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; {CURRENT_YEAR} Karya Marketing. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <Link to="/privacy" className="footer-sublink">Privacy Policy</Link>
            <span className="footer-dot-sep">&bull;</span>
            <Link to="/terms" className="footer-sublink">Terms of Service</Link>
            <span className="footer-dot-sep">&bull;</span>
            <Link to="/contact" className="footer-sublink">Support &amp; Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

