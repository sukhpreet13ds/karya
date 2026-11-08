import React from 'react';
import mobileImg from '../assets/mobile.png';

const CtaSection = ({ onOpenQueryModal }) => {
  const handleCtaClick = (service = 'Discovery Call') => {
    if (onOpenQueryModal) {
      onOpenQueryModal(service);
    }
  };

  return (
    <section className="cta-showcase-section" id="contact-cta">
      <div className="cta-showcase-container">
        <div className="cta-content-wrapper">
          {/* Left Side: Tag, Heading, Desc, Button */}
          <div className="cta-text-side animate__animated animate__fadeInUp">
            <div className="cta-release-badge">
              <span className="cta-dot"></span>
              <span className="cta-badge-label">Free Consultation</span>
              <span
                className="cta-badge-action"
                onClick={() => handleCtaClick('Discovery Call')}
                role="button"
                tabIndex={0}
              >
                Book a Discovery Call &rarr;
              </span>
            </div>

            <h2 className="cta-main-heading">
              We help brands and individuals bring their vision to life!
            </h2>

            <p className="cta-sub-description">
              Our team creates high-converting digital campaigns, scalable technology, and performance
              strategies that tell your story, acquire customers, and leave a lasting impression on your audience.
            </p>

            <div className="cta-actions-group">
              <button
                type="button"
                className="btn-cta-get-started"
                onClick={() => handleCtaClick('Get Started')}
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Right Side: Half Mobile Asset */}
          <div className="cta-mobile-side animate__animated animate__fadeInUp">
            <div className="cta-mobile-frame">
              <img src={mobileImg} alt="Karya Mobile Showcase" className="cta-half-mobile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

