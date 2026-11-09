import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Image as ImageIcon,
  CheckCircle2,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import whatsappIcon from '../assets/whatsapp.png';
import herobg from '../assets/herobg.png';

const Contact = ({ onOpenQueryModal: _onOpenQueryModal }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [contactHeroImg, _setContactHeroImg] = useState(herobg);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.number || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <main className="contact-page-main">
      {/* Top Hero Section (Less height, empty image placeholder, and 'Contact Us' text over it) */}
      <section className="contact-hero-section">
        <div className="contact-hero-image-frame">
          {contactHeroImg ? (
            <img src={contactHeroImg} alt="Contact Karya Marketing" className="contact-hero-bg-img" />
          ) : (
            <div className="contact-hero-empty-placeholder">
              <div className="contact-placeholder-cam">
                <ImageIcon size={32} strokeWidth={1.7} />
              </div>
              <span className="contact-placeholder-hint">Hero Image Placeholder</span>
            </div>
          )}

          {/* Dark Overlay with Centered Typography */}
          <div className="contact-hero-overlay">
            <div className="contact-hero-content animate__animated animate__fadeInUp">
              <div className="contact-tag-badge">
                <span className="contact-tag-bullet"></span>
                <span className="contact-tag-text">LET'S CONNECT</span>
              </div>
              <h1 className="contact-hero-title">Contact Us</h1>
              <p className="contact-hero-sub">
                Have a project in mind or looking to scale your brand? Our senior strategists are ready to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Left Side Company Info & WhatsApp, Right Side Form */}
      <section className="contact-grid-section">
        <div className="contact-container">
          <div className="contact-split-grid">
            {/* Left Side: Company Name, Address, Numbers, Talk on WhatsApp */}
            <div className="contact-info-column">
              <div className="contact-brand-block">
                <span className="contact-sub-badge">GROWTH STUDIO</span>
                <h2 className="contact-company-name">Karya Marketing</h2>
                <p className="contact-company-desc">
                  Your full-service performance growth partner. We engineer high-converting digital campaigns,
                  blazing-fast web architectures, and sustainable e-commerce scale.
                </p>
              </div>

              <div className="contact-details-list">
                {/* Address Item */}
                <div className="contact-info-item">
                  <div className="contact-info-icon-box">
                    <MapPin size={22} className="info-icon" />
                  </div>
                  <div className="contact-info-text-group">
                    <h4 className="info-label">Address</h4>
                    <p className="info-val">
                      Global Client Support Studio<br />
                      Headquartered in New Delhi, India
                    </p>
                  </div>
                </div>

                {/* Numbers Item */}
                <div className="contact-info-item">
                  <div className="contact-info-icon-box">
                    <Phone size={22} className="info-icon" />
                  </div>
                  <div className="contact-info-text-group">
                    <h4 className="info-label">Phone Number</h4>
                    <p className="info-val">
                      <a href="tel:+919896093951" className="contact-link">+91 9896093951</a>
                    </p>
                  </div>
                </div>

                {/* Email Item */}
                <div className="contact-info-item">
                  <div className="contact-info-icon-box">
                    <Mail size={22} className="info-icon" />
                  </div>
                  <div className="contact-info-text-group">
                    <h4 className="info-label">Email Address</h4>
                    <p className="info-val">
                      <a href="mailto:hello@karyamarketing.com" className="contact-link">hello@karyamarketing.com</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Talk on WhatsApp Button */}
              <div className="contact-whatsapp-block">
                <a
                  href="https://wa.me/919896093951?text=Hi%20Karya%20Marketing%2C%20I%20would%20like%20to%20discuss%20a%20project%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-talk-whatsapp"
                >
                  <img src={whatsappIcon} alt="WhatsApp" className="actual-whatsapp-icon" />
                  <span>Talk on WhatsApp</span>
                  <ArrowUpRight size={18} strokeWidth={2.4} />
                </a>

                <div className="whatsapp-note">
                  <Clock size={14} className="text-teal" />
                  <span>Direct response typically within 15–30 minutes</span>
                </div>
              </div>
            </div>

            {/* Right Side: Form (Name, Email, Number, Message) */}
            <div className="contact-form-column">
              <div className="contact-form-card">
                <div className="form-card-header">
                  <h3 className="form-card-title">Send Us a Message</h3>
                  <p className="form-card-sub">
                    Fill out the form below and we will prepare a complimentary growth audit for your brand.
                  </p>
                </div>

                {submitted ? (
                  <div className="contact-success-state">
                    <div className="success-icon-ring">
                      <CheckCircle2 size={44} className="text-bright-green" />
                    </div>
                    <h4 className="success-heading">Message Sent Successfully!</h4>
                    <p className="success-message">
                      Thank you for reaching out to Karya Marketing. One of our senior growth strategists will review your details and contact you shortly.
                    </p>
                    <button
                      type="button"
                      className="btn-contact-reset"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', number: '', message: '' });
                      }}
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="contact-field-group">
                      <label htmlFor="contact-name" className="contact-label">
                        Your Name <span className="req-star">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        className="contact-input"
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="contact-field-group">
                      <label htmlFor="contact-email" className="contact-label">
                        Email Address <span className="req-star">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        className="contact-input"
                        placeholder="e.g. john@yourbrand.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="contact-field-group">
                      <label htmlFor="contact-number" className="contact-label">
                        Phone / WhatsApp Number <span className="req-star">*</span>
                      </label>
                      <input
                        id="contact-number"
                        name="number"
                        type="tel"
                        required
                        className="contact-input"
                        placeholder="e.g. +91 9896093951"
                        value={formData.number}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="contact-field-group">
                      <label htmlFor="contact-message" className="contact-label">
                        Your Message / Project Goals <span className="req-star">*</span>
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        className="contact-textarea"
                        placeholder="Tell us about your brand, current challenges, and growth objectives..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <button type="submit" className="btn-contact-submit">
                      <span>Submit Inquiry</span>
                      <Send size={18} strokeWidth={2.2} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Below of them: Map Section */}
          <div className="contact-map-wrapper">

            <div className="contact-map-frame">
              <iframe
                title="Karya Marketing Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="contact-google-map"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
