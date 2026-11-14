import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, Link } from 'react-router-dom';
import { ArrowUpRight, X } from 'lucide-react';
import logo from '../assets/logo.png';

export const servicesData = [
  {
    id: 'paid-marketing',
    title: 'PAID MARKETING',
    desc: 'Facebook, Google, LinkedIn & YouTube ads built for enquiries, WhatsApp chats and sales.',
  },
  {
    id: 'organic-marketing',
    title: 'ORGANIC MARKETING',
    desc: 'Rank higher on Google for buyer searches with SEO, content calendars and YouTube SEO.',
  },
  {
    id: 'ecommerce-management',
    title: 'E-COMMERCE & MARKETPLACES',
    desc: 'Sell more on Amazon, Flipkart, Myntra & Nykaa with catalog setup, listing optimisation and ads.',
  },
  {
    id: 'website-development',
    title: 'WEBSITE DEVELOPMENT',
    desc: 'Shopify, WordPress, .NET & custom sites built for speed, mobile design and tracking setup.',
  },
];

const Navbar = ({ onOpenQueryModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleBookQueryClick = () => {
    setMobileMenuOpen(false);
    if (onOpenQueryModal) {
      onOpenQueryModal();
    }
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Karya Logo" className="navbar-logo-img" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="navbar-desktop-nav">
          <ul className="nav-links-list">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="navbar-actions-desktop">
          <a
            href="https://wa.me/919896093951?text=Hi%20Karya%20Marketing%2C%20I%20would%20like%20to%20book%20a%20query."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-book-query"
            style={{ textDecoration: 'none' }}
          >
            <span>Book a Query</span>
            <ArrowUpRight className="btn-arrow-tilt" size={16} strokeWidth={2.4} />
          </a>
        </div>

        {/* Mobile Animated Burger Button */}
        <button
          type="button"
          className={`navbar-burger-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className="burger-line line-1"></span>
          <span className="burger-line line-2"></span>
          <span className="burger-line line-3"></span>
        </button>
      </div>

      {/* Mobile Animated Menu Panel rendered via Portal so it covers entire viewport */}
      {mobileMenuOpen && typeof document !== 'undefined' && createPortal(
        <div
          className="mobile-menu-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="mobile-menu-panel"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top close bar (NO LOGO inside menu panel as requested) */}
            <div className="mobile-menu-header">
              <div></div>
              <button
                type="button"
                className="mobile-menu-close"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} strokeWidth={2.4} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Home</span>
                  <ArrowUpRight className="mobile-tilt-icon" size={20} strokeWidth={2.4} />
                </NavLink>
              </li>

              <li className="mobile-nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>About</span>
                  <ArrowUpRight className="mobile-tilt-icon" size={20} strokeWidth={2.4} />
                </NavLink>
              </li>

              <li className="mobile-nav-item">
                <NavLink
                  to="/services"
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Services</span>
                  <ArrowUpRight className="mobile-tilt-icon" size={20} strokeWidth={2.4} />
                </NavLink>
              </li>

              <li className="mobile-nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Contact</span>
                  <ArrowUpRight className="mobile-tilt-icon" size={20} strokeWidth={2.4} />
                </NavLink>
              </li>
            </ul>

            {/* Mobile Book a Query Button */}
            <div className="mobile-menu-footer">
              <a
                href="https://wa.me/919896093951?text=Hi%20Karya%20Marketing%2C%20I%20would%20like%20to%20book%20a%20query."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-book-query mobile-book-query-btn"
                onClick={() => setMobileMenuOpen(false)}
                style={{ textDecoration: 'none' }}
              >
                <span>Book a Query</span>
                <ArrowUpRight className="btn-arrow-tilt" size={17} strokeWidth={2.4} />
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};

export default Navbar;
