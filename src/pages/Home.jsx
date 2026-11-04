import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '../components/Navbar';

const ROTATING_WORDS = ['Forward.', 'Beyond.', 'Higher.'];

const Home = ({ onOpenQueryModal }) => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % ROTATING_WORDS.length);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  const handleServiceCardClick = (serviceTitle) => {
    if (onOpenQueryModal) {
      onOpenQueryModal(serviceTitle);
    }
  };

  const handleCtaClick = (service = '') => {
    if (onOpenQueryModal) {
      onOpenQueryModal(service);
    }
  };

  return (
    <main className="home-main">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          {/* Left Side: Tag, Title, Desc, Two CTAs */}
          <div className="hero-content-left">
            <div className="hero-tag-badge">
              <span className="pulse-indicator"></span>
              <span className="hero-tag-text">DIGITAL GROWTH PARTNER</span>
            </div>

            <h1 className="hero-heading">
              Marketing That <span className="highlight-navy">Moves</span> Your Business{' '}
              <span key={wordIndex} className="dynamic-bubble-word">
                {ROTATING_WORDS[wordIndex]}
              </span>
            </h1>

            <p className="hero-description">
              We combine creativity, strategy, and technology to help brands reach
              the right audience, build trust, and achieve sustainable growth.
            </p>

            <div className="hero-cta-group">
              <button
                type="button"
                className="btn-hero-primary"
                onClick={() => handleCtaClick()}
              >
                <span>Book a Query</span>
                <ArrowUpRight className="btn-arrow-tilt" size={18} strokeWidth={2.4} />
              </button>

              <button
                type="button"
                className="btn-hero-secondary"
                onClick={() => handleCtaClick('Paid Marketing')}
              >
                <span>Explore Services</span>
                <ArrowUpRight className="btn-arrow-tilt" size={18} strokeWidth={2.4} />
              </button>
            </div>
          </div>

          {/* Right Side: Four Boxes Grid with Services Names */}
          <div className="hero-services-right">
            <div className="hero-services-grid">
              {servicesData.map((service, index) => (
                <div
                  key={service.id}
                  className="hero-service-card"
                  onClick={() => handleServiceCardClick(service.title)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleServiceCardClick(service.title);
                    }
                  }}
                >
                  <div className="card-top-row">
                    <span className="service-number">0{index + 1}</span>
                    <div className="service-tilt-badge">
                      <ArrowUpRight className="service-tilt-arrow" size={18} strokeWidth={2.4} />
                    </div>
                  </div>

                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.desc}</p>

                  <div className="card-bottom-action">
                    <span className="card-action-text">Enquire Now</span>
                    <span className="card-action-line"></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
