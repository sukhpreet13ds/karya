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
              <span className="cta-badge-label">Free Lead Audit · No Lock-In</span>
              
              <a href="https://wa.me/919896093951" style={{color:"inherit", textDecorationLine:"none"}} target="_blank" rel="noopener noreferrer"><span
                className="cta-badge-action"
                role="button"
                tabIndex={0}
              >
                Book a Discovery Call &rarr;
              </span>
              </a>
            </div>

            <h2 className="cta-main-heading">
              Find Out What’s Stopping Your Ads From Selling
            </h2>

            <p className="cta-sub-description">
              Send us your ad account or website. Within 48 hours, we’ll show you where your spend is leaking and 3 fixes you can use right away, even if you never hire us.

            </p>

            <div className="cta-actions-group">
             <a href="https://wa.me/919896093951?text=Get%20my%20free%20lead%20audit" target="_blank" rel="noopener noreferrer" > <button
                type="button"
                className="btn-cta-get-started"
              >
                Get My Free Lead Audit
              </button></a>
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

