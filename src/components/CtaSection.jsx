import React from 'react';
import defaultMobileImg from '../assets/mobile.png';

const CtaSection = ({
  onOpenQueryModal,
  badgeLabel = 'Free Lead Audit · No Lock-In',
  badgeActionText = 'Book a Discovery Call →',
  badgeActionLink = 'https://wa.me/919896093951',
  heading = 'Find Out What’s Stopping Your Ads From Selling',
  description = 'Send us your ad account or website. Within 48 hours, we’ll show you where your spend is leaking and 3 fixes you can use right away, even if you never hire us.',
  buttonText = 'Get My Free Lead Audit',
  buttonLink = 'https://wa.me/919896093951?text=Get%20my%20free%20lead%20audit',
  mobileImage = defaultMobileImg,
}) => {
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
              <span className="cta-badge-label">{badgeLabel}</span>
              
              <a href={badgeActionLink} style={{color:"inherit", textDecorationLine:"none"}} target="_blank" rel="noopener noreferrer">
                <span
                  className="cta-badge-action"
                  role="button"
                  tabIndex={0}
                >
                  {badgeActionText}
                </span>
              </a>
            </div>

            <h2 className="cta-main-heading">
              {heading}
            </h2>

            <p className="cta-sub-description">
              {description}
            </p>

            <div className="cta-actions-group">
              <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                <button
                  type="button"
                  className="btn-cta-get-started"
                >
                  {buttonText}
                </button>
              </a>
            </div>
          </div>

          {/* Right Side: Half Mobile Asset */}
          <div className="cta-mobile-side animate__animated animate__fadeInUp">
            <div className="cta-mobile-frame">
              <img src={mobileImage} alt="Karya Mobile Showcase" className="cta-half-mobile-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

