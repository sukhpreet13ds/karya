import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, ChevronDown, X } from 'lucide-react';
import logo from '../assets/logo.png';

export const servicesData = [
  {
    id: 'paid-marketing',
    title: 'PAID MARKETING',
    desc: 'Performance ads across Meta, Google & LinkedIn targeted for maximum ROI.',
  },
  {
    id: 'organic-marketing',
    title: 'ORGANIC MARKETING',
    desc: 'SEO, data-driven content, and organic reach that builds lasting brand authority.',
  },
  {
    id: 'ecommerce-management',
    title: 'E-COMMERCE & MARKETPLACE MANAGEMENT',
    desc: 'Comprehensive catalog, ad campaigns, and sales growth on Amazon, Flipkart & Shopify.',
  },
  {
    id: 'website-development',
    title: 'WEBSITE DEVELOPMENT & MANAGEMENT',
    desc: 'High-speed, conversion-focused websites engineered for seamless scaling.',
  },
];

const Navbar = ({ onOpenQueryModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMegaOpen, setDesktopMegaOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

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

  const handleServiceClick = (e, serviceTitle) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setDesktopMegaOpen(false);
    if (onOpenQueryModal) {
      onOpenQueryModal(serviceTitle);
    }
  };

  const handleNavClick = (e) => {
    e.preventDefault();
  };

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
        <a href="#" className="navbar-brand" onClick={handleNavClick}>
          <img src={logo} alt="Karya Logo" className="navbar-logo-img" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-desktop-nav">
          <ul className="nav-links-list">
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={handleNavClick}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={handleNavClick}>
                About
              </a>
            </li>

            {/* Services with Mega Menu */}
            <li
              className={`nav-item nav-item-has-mega ${desktopMegaOpen ? 'mega-active' : ''}`}
              onMouseEnter={() => setDesktopMegaOpen(true)}
              onMouseLeave={() => setDesktopMegaOpen(false)}
            >
              <button
                type="button"
                className="nav-link nav-link-btn"
                onClick={() => setDesktopMegaOpen((prev) => !prev)}
                aria-expanded={desktopMegaOpen}
              >
                <span>Services</span>
                <ChevronDown
                  className={`chevron-icon ${desktopMegaOpen ? 'rotated' : ''}`}
                  size={15}
                  strokeWidth={2.4}
                />
              </button>

              {/* Desktop Mega Menu Dropdown */}
              <div className={`desktop-mega-menu ${desktopMegaOpen ? 'is-visible' : ''}`}>
                <div className="mega-menu-inner">
               

                  <div className="mega-services-grid">
                    {servicesData.map((svc, idx) => (
                      <a
                        key={svc.id}
                        href="#"
                        className="mega-service-card"
                        onClick={(e) => handleServiceClick(e, svc.title)}
                      >
                        <div className="mega-card-top">
                          <span className="mega-card-number">0{idx + 1}</span>
                          <ArrowUpRight className="mega-arrow-tilt" size={17} strokeWidth={2.4} />
                        </div>
                        <h4 className="mega-card-title">{svc.title}</h4>
                        <p className="mega-card-desc">{svc.desc}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={handleNavClick}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="navbar-actions-desktop">
          <button
            type="button"
            className="btn-book-query"
            onClick={handleBookQueryClick}
          >
            <span>Book a Query</span>
            <ArrowUpRight className="btn-arrow-tilt" size={16} strokeWidth={2.4} />
          </button>
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
                <a href="#home" className="mobile-nav-link" onClick={handleNavClick}>
                  <span>Home</span>
                  <ArrowUpRight className="mobile-tilt-icon" size={20} strokeWidth={2.4} />
                </a>
              </li>

              <li className="mobile-nav-item">
                <a href="#about" className="mobile-nav-link" onClick={handleNavClick}>
                  <span>About</span>
                  <ArrowUpRight className="mobile-tilt-icon" size={20} strokeWidth={2.4} />
                </a>
              </li>

              {/* Services Item with Dropdown Arrow Icon */}
              <li className="mobile-nav-item mobile-services-accordion">
                <button
                  type="button"
                  className="mobile-nav-link mobile-services-toggle"
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`mobile-dropdown-arrow ${mobileServicesOpen ? 'rotated' : ''}`}
                    size={20}
                    strokeWidth={2.4}
                  />
                </button>

                {/* Sub Items */}
                {mobileServicesOpen && (
                  <div className="mobile-subservices-container">
                    {servicesData.map((svc, i) => (
                      <a
                        key={svc.id}
                        href="#"
                        className="mobile-subservice-card"
                        onClick={(e) => handleServiceClick(e, svc.title)}
                      >
                        <div className="mobile-sub-header">
                          <span className="mobile-sub-num">0{i + 1}</span>
                          <span className="mobile-sub-title">{svc.title}</span>
                          <ArrowUpRight className="mobile-sub-tilt" size={17} strokeWidth={2.4} />
                        </div>
                        <p className="mobile-sub-desc">{svc.desc}</p>
                      </a>
                    ))}
                  </div>
                )}
              </li>

              <li className="mobile-nav-item">
                <a href="#contact" className="mobile-nav-link" onClick={handleNavClick}>
                  <span>Contact</span>
                  <ArrowUpRight className="mobile-tilt-icon" size={20} strokeWidth={2.4} />
                </a>
              </li>
            </ul>

            {/* Mobile Book a Query Button */}
            <div className="mobile-menu-footer">
              <button
                type="button"
                className="btn-book-query mobile-book-query-btn"
                onClick={handleBookQueryClick}
              >
                <span>Book a Query</span>
                <ArrowUpRight className="btn-arrow-tilt" size={17} strokeWidth={2.4} />
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};

export default Navbar;
