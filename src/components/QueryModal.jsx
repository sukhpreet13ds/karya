import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import whatsappIcon from '../assets/whatsapp.png';

const SERVICES_OPTIONS = [
  'Paid Marketing',
  'Organic Marketing',
  'E-Commerce & Marketplace Management',
  'Website Development & Management',
];

const QueryModal = ({ isOpen, onClose, initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    service: SERVICES_OPTIONS[0],
    message: '',
  });

  useEffect(() => {
    if (initialService) {
      const match = SERVICES_OPTIONS.find(
        (s) => s.toLowerCase() === initialService.toLowerCase()
      );
      setFormData((prev) => ({
        ...prev,
        service: match || initialService,
      }));
    }
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.number.trim()) {
      alert('Please enter your name and phone number.');
      return;
    }

    const whatsappText =
      `*New Inquiry via Website* 🚀\n\n` +
      `*Name:* ${formData.name.trim()}\n` +
      `*Email:* ${formData.email.trim() || 'N/A'}\n` +
      `*Phone Number:* ${formData.number.trim()}\n` +
      `*Service Required:* ${formData.service}\n` +
      `*Message:* ${formData.message.trim() || 'N/A'}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=919896093951&text=${encodeURIComponent(
      whatsappText
    )}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} strokeWidth={2.5} />
        </button>

        <div className="modal-header">
          <h2 className="modal-title">Book A Query</h2>
          <p className="modal-subtitle">
            Fill in the details below and connect with our strategy team directly on WhatsApp.
          </p>
        </div>

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="modal-name">Full Name<span style={{color: "red"}}>*</span></label>
            <input
              id="modal-name"
              type="text"
              name="name"
              required
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="modal-email">Email Address<span style={{color: "red"}}>*</span></label>
            <input
              id="modal-email"
              type="email"
              name="email"
              placeholder="e.g. john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="modal-number">Phone / WhatsApp Number<span style={{color: "red"}}>*</span></label>
            <input
              id="modal-number"
              type="tel"
              name="number"
              required
              placeholder="e.g. +91 9896093951"
              value={formData.number}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="modal-service">Service Interested In</label>
            <select
              id="modal-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              {SERVICES_OPTIONS.map((svc) => (
                <option key={svc} value={svc}>
                  {svc}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="modal-message">Brief Message / Requirements</label>
            <textarea
              id="modal-message"
              name="message"
              rows="3"
              placeholder="Tell us about your brand goals..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="modal-submit-btn">
            <img src={whatsappIcon} alt="WhatsApp" className="actual-whatsapp-icon" />
            <span>Send on WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default QueryModal;
