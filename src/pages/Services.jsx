import React, { useState, useEffect } from 'react';
import {
  Image as ImageIcon,
  ChevronDown,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  BarChart3
} from 'lucide-react';
import CtaSection from '../components/CtaSection';
import whatsappIcon from '../assets/whatsapp.png';
import herobg from '../assets/herobg.png';

// Images from Home services section
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s4 from '../assets/s4.jpg';
import s5 from '../assets/s5.jpg';
import s6 from '../assets/s6.jpg';
import s7 from '../assets/s7.jpg';
import s8 from '../assets/s8.jpg';
import s9 from '../assets/s9.jpg';
import s10 from '../assets/S10.png';
import s11 from '../assets/S11.jpg';
import s12 from '../assets/S12.jpg';

// Content structured directly from ser.txt
const SERVICES_DATA = [
  {
    id: 'paid-marketing',
    number: '01',
    category: 'PERFORMANCE MEDIA',
    title: 'Paid Marketing',
    headline: 'High-Converting Performance Campaigns on Meta, Google & LinkedIn',
    desc: 'Campaigns built for inquiries, WhatsApp chats, and direct e-commerce sales. Audience research, ad creatives, pixel setup, retargeting, and continuous daily optimization.',
    slides: [
      { url: s1, caption: 'Campaign Architecture & ROAS Dashboard' },
      { url: s2, caption: 'Meta & Google Ads Performance Matrix' },
      { url: s3, caption: 'Audience Funnel & Retargeting Strategy' },
    ],
    subServices: [
      {
        title: 'Facebook & Instagram Ads',
        desc: 'Campaigns built for enquiries, WhatsApp chats and sales. Audience research, ad creatives, pixel setup, retargeting and ongoing optimisation.',
      },
      {
        title: 'Google Ads',
        desc: 'Show up when people search for what you sell. Search, Shopping, Display and Performance Max campaigns with full conversion tracking.',
      },
      {
        title: 'LinkedIn Ads',
        desc: 'Reach decision-makers by job title, industry and company. Lead gen forms, sponsored content and follower campaigns, tracked to cost per lead.',
      },
      {
        title: 'YouTube Ads',
        desc: 'Video ads that reach the right viewers at the right moment. Targeting, hook guidance and tracking from view to lead.',
      },
    ],
  },
  {
    id: 'organic-marketing',
    number: '02',
    category: 'ORGANIC GROWTH & SEO',
    title: 'Organic Marketing',
    headline: 'Dominate Google Search Rankings & Build Inbound Brand Authority',
    desc: 'Rank higher on Google for the searches your buyers make, build lasting inbound visibility, and establish market-leading brand authority.',
    slides: [
      { url: s4, caption: 'Keyword Rankings & Inbound Search Growth' },
      { url: s5, caption: 'High-Impact Content Strategy Roadmap' },
      { url: s6, caption: 'Domain Authority & Organic Traffic Analytics' },
    ],
    subServices: [
      {
        title: 'SEO (Search Engine Optimization)',
        desc: 'Rank higher on Google for the searches your buyers make. Keyword research, on-page fixes, content and technical SEO.',
      },
      {
        title: 'Facebook & Instagram Management',
        desc: 'A consistent, on-brand presence. Content calendar, post and reel ideas, captions, hashtags and page management.',
      },
      {
        title: 'LinkedIn Management',
        desc: 'A profile and company page that builds trust. Content planning, post writing and regular, consistent posting.',
      },
      {
        title: 'YouTube SEO',
        desc: 'Get your videos found. Keyword-based titles, descriptions, tags, thumbnail guidance and channel optimisation.',
      },
    ],
  },
  {
    id: 'ecommerce-management',
    number: '03',
    category: 'MARKETPLACE SCALE',
    title: 'E-Commerce & Marketplace Management',
    headline: 'Scale Amazon, Flipkart, Myntra & Nykaa Store Sales',
    desc: 'Sell more on India and the globe\'s biggest marketplaces with end-to-end cataloging, listing optimization, inventory management, and sponsored PPC ads.',
    slides: [
      { url: s7, caption: 'Amazon & Flipkart Sales Acceleration' },
      { url: s8, caption: 'Shopify Store Conversion Rate Funnel' },
      { url: s9, caption: 'A+ Content & High-Converting Product Listings' },
    ],
    subServices: [
      {
        title: 'Amazon & Flipkart Management',
        desc: 'Sell more on India\'s biggest marketplaces. We handle account setup, catalogue listing, pricing checks, inventory health, and reviews strategy.',
      },
      {
        title: 'Myntra & Nykaa Scaling',
        desc: 'Fashion, lifestyle and beauty marketplace acceleration with full brand approval, cataloguing, and seasonal campaign management.',
      },
      {
        title: 'Listing Optimisation & A+ Content',
        desc: 'High-converting titles, rich lifestyle images, bullet points, backend search keyword indexing, and A+ brand story modules.',
      },
      {
        title: 'Marketplace Ads & Sponsored PPC',
        desc: 'High-ROAS Sponsored Product, Brand, and Display ad management to win top category search ranks and boost sales.',
      },
    ],
  },
  {
    id: 'website-development',
    number: '04',
    category: 'WEB ARCHITECTURE',
    title: 'Website Development & Management',
    headline: 'Fast, Mobile-Friendly & Conversion-Engineered Platforms',
    desc: 'High-speed, conversion-focused websites engineered for seamless scaling. Every website includes mobile-friendly design, basic SEO setup, speed optimization and analytics tracking setup.',
    slides: [
      { url: s10, caption: 'Responsive High-Converting Web Platforms' },
      { url: s11, caption: 'UI/UX Wireframes & Component Design System' },
      { url: s12, caption: 'Core Web Vitals & Speed Optimization' },
    ],
    subServices: [
      {
        title: 'Shopify Development',
        desc: 'Online stores that are fast, mobile-friendly and built to sell. Theme setup, product pages, payments and apps.',
      },
      {
        title: 'WordPress Development',
        desc: 'Business websites and blogs that are easy to update. Custom design, SEO-ready pages and contact forms.',
      },
      {
        title: '.NET Development',
        desc: 'Custom web applications and business websites for more complex needs.',
      },
      {
        title: 'Portfolio Websites',
        desc: 'Clean, minimal websites for professionals, creators and service businesses that want to look credible online.',
      },
    ],
  },
];

// Dedicated right-to-left seamless auto-sliding carousel component for each service
const ServiceAutoSlider = ({ slides, serviceTitle }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!slides || slides.length === 0) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className="service-auto-slider-container">
      <div className="service-auto-slider-viewport">
        <div
          className="service-auto-slider-track"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="service-auto-slide-item">
              <img
                src={slide.url}
                alt={`${serviceTitle} preview ${idx + 1}`}
                className="service-auto-slide-img"
              />
              <div className="service-slide-caption-bar">
                <span className="service-slide-counter">0{idx + 1} / 0{slides.length}</span>
                <span className="service-slide-caption-text">{slide.caption}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Slide position indicators */}
        <div className="service-slider-indicators">
          {slides.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              className={`service-slider-dot ${dotIdx === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Single Service Row with Alternating Layout & Sub-service Accordion
const ServiceRow = ({ service, index, onOpenQueryModal }) => {
  // By default, first sub-service is open, and only one is open at a time
  const [openSubIndex, setOpenSubIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenSubIndex((prev) => (prev === idx ? -1 : idx));
  };

  // Alternating:
  // index 0: Content Left, Slider Right
  // index 1: Slider Left, Content Right
  // index 2: Content Left, Slider Right
  // index 3: Slider Left, Content Right
  const isSliderLeft = index % 2 === 1;

  // Active sub-service title for pre-filled WhatsApp message
  const activeSubTitle =
    openSubIndex >= 0 && service.subServices[openSubIndex]
      ? service.subServices[openSubIndex].title
      : service.subServices[0].title;

  const whatsappMessage = encodeURIComponent(
    `Hi Karya Marketing, I would like to book a consultation for ${service.title} - ${activeSubTitle}. Please share more details.`
  );

  return (
    <div
      className={`service-showcase-row ${
        isSliderLeft ? 'layout-slider-left' : 'layout-slider-right'
      }`}
      id={service.id}
    >
      {/* Visual Image Slider */}
      <div className="service-row-media-col">
        <ServiceAutoSlider slides={service.slides} serviceTitle={service.title} />
      </div>

      {/* Content Column with Accordion & Buttons */}
      <div className="service-row-content-col">
        <div className="service-row-header-block">
          <div className="service-number-badge">
            <span className="service-num-dot"></span>
            <span>{service.number} &bull; {service.category}</span>
          </div>
          <h2 className="service-main-title">{service.title}</h2>
          <p className="service-main-headline">{service.headline}</p>
          <p className="service-main-desc">{service.desc}</p>
        </div>

        {/* Sub-Services Accordion (One open at a time, default first open) */}
        <div className="service-sub-accordion-wrapper">
          <h4 className="accordion-section-label">Included Deliverables &amp; Sub-Services:</h4>
          <div className="service-accordion-list">
            {service.subServices.map((sub, sIdx) => {
              const isOpen = openSubIndex === sIdx;
              return (
                <div
                  key={sIdx}
                  className={`service-accordion-item ${isOpen ? 'is-expanded' : ''}`}
                >
                  <button
                    type="button"
                    className="service-accordion-trigger"
                    onClick={() => toggleAccordion(sIdx)}
                    aria-expanded={isOpen}
                  >
                    <div className="accordion-trigger-left">
                      <span className="accordion-item-index">0{sIdx + 1}</span>
                      <span className="accordion-item-title">{sub.title}</span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`accordion-chevron-icon ${isOpen ? 'rotated' : ''}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="service-accordion-content animate__animated animate__fadeIn">
                      <p className="service-accordion-desc">{sub.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons: WhatsApp (with specific pre-message) and Book Now (modal) */}
        <div className="service-action-buttons-group">
          <a
            href={`https://wa.me/919896093951?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-service-whatsapp"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="actual-whatsapp-icon" />
            <span>WhatsApp Us</span>
          </a>

          <button
            type="button"
            className="btn-service-book-now"
            onClick={() => onOpenQueryModal && onOpenQueryModal(service.title)}
          >
            <span>Book Now</span>
            <ArrowUpRight size={17} strokeWidth={2.4} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Services = ({ onOpenQueryModal }) => {
  const [servicesHeroImg, _setServicesHeroImg] = useState(herobg);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="services-page-main">
      {/* Top Hero Section (Same style as About page: less height, empty image frame, 'Services' over it) */}
      <section className="about-hero-section services-custom-hero">
        <div className="about-hero-image-frame">
          {servicesHeroImg ? (
            <img src={servicesHeroImg} alt="Services Karya Marketing" className="about-hero-bg-img" />
          ) : (
            <div className="about-hero-empty-placeholder">
              <div className="about-placeholder-cam">
                <ImageIcon size={32} strokeWidth={1.7} />
              </div>
              <span className="about-placeholder-hint">Hero Image Placeholder</span>
            </div>
          )}

          {/* Dark Overlay with Centered Typography */}
          <div className="about-hero-overlay">
            <div className="about-hero-content animate__animated animate__fadeInUp">
              <div className="about-tag-badge">
                <span className="about-tag-bullet"></span>
                <span className="about-tag-text">OUR EXPERTISE</span>
              </div>
              <h1 className="about-hero-title">Our Services</h1>
              <p className="about-hero-sub">
                Everything you need to grow online, under one roof. Paid ads, organic growth, marketplaces and websites. Pick one service or combine them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Inclusions Strip from ser.txt */}
      <section className="services-inclusions-strip">
        <div className="inclusions-strip-container">
          <div className="inclusion-pill">
            <Sparkles size={16} className="inclusion-icon text-bright-green" />
            <span><strong>Free Lead Audit:</strong> Review ads, site &amp; funnel before starting</span>
          </div>
          <div className="inclusion-pill">
            <BarChart3 size={16} className="inclusion-icon text-bright-green" />
            <span><strong>Lead-Based Reporting:</strong> Leads, calls &amp; revenue, not vanity likes</span>
          </div>
          <div className="inclusion-pill">
            <ShieldCheck size={16} className="inclusion-icon text-bright-green" />
            <span><strong>No Lock-In:</strong> Month-to-month work. Stay because it scales</span>
          </div>
        </div>
      </section>

      {/* Main Alternating Services Section */}
      <section className="services-alternating-section">
        <div className="services-alternating-container">
          {SERVICES_DATA.map((service, index) => (
            <ServiceRow
              key={service.id}
              service={service}
              index={index}
              onOpenQueryModal={onOpenQueryModal}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection onOpenQueryModal={onOpenQueryModal} />
    </main>
  );
};

export default Services;
