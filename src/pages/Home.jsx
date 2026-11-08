import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  Image as ImageIcon,
  Play,
  CheckCircle2,
  X
} from 'lucide-react';
import 'animate.css';
import { servicesData } from '../components/Navbar';
import mobileImg from '../assets/mobile.png';
import logo from '../assets/logo.png';
import s1 from '../assets/s1.jpg'
import s2 from '../assets/s2.jpg'
import s3 from '../assets/s3.jpg'
import s4 from '../assets/s4.jpg'
import s5 from '../assets/s5.jpg'
import s6 from '../assets/s6.jpg'
import s7 from '../assets/s7.jpg'
import s8 from '../assets/s8.jpg'
import s9 from '../assets/s9.jpg'
import s10 from '../assets/S10.png'
import s11 from '../assets/S11.jpg'
import s12 from '../assets/S12.jpg'
import aboutHome from '../assets/about.png'
import  {Link} from 'react-router-dom';

const ROTATING_WORDS = ['Forward.', 'Beyond.', 'Higher.'];

// Actionable service deliverables & capabilities for the marquee track
const SERVICES_MARQUEE_ITEMS = [
  { text: 'Meta & Instagram Performance Ads', tag: 'Paid Ads' },
  { text: 'Search Engine Optimization (SEO)', tag: 'Organic' },
  { text: 'Amazon & Flipkart Store Scaling', tag: 'E-Commerce' },
  { text: 'Custom Full-Stack Web Development', tag: 'Development' },
  { text: 'High-Converting Landing Pages', tag: 'CRO' },
  { text: 'Google Search & Performance Max PPC', tag: 'Paid Ads' },
  { text: 'Content Strategy & Copywriting', tag: 'Content' },
  { text: 'Shopify Store Management & CRO', tag: 'E-Commerce' },
  { text: 'UI/UX Interface & Interactive Design', tag: 'Design' },
  { text: 'A+ Marketplace Cataloging & Listings', tag: 'E-Commerce' },
  { text: 'Brand Authority & Organic Inbound', tag: 'Organic' },
  { text: 'Speed Optimization & Web Security', tag: 'Tech' },
  { text: 'Multi-Touch ROAS & Attribution Analytics', tag: 'Analytics' },
];

// 4 Core services with 3-3 image slides each (empty for now, ready for user upload)
const SERVICES_SHOWCASE_DATA = [
  {
    id: 'paid-marketing',
    title: 'Paid Marketing',
    desc: 'Facebook, Instagram, Google, LinkedIn & YouTube campaigns built for enquiries, WhatsApp chats and sales.',
    slides: [
      { url: s1, caption: 'Campaign Architecture & ROAS Dashboard' },
      { url: s2, caption: 'Meta & Google Ads Performance Matrix' },
      { url: s3, caption: 'Audience Funnel & Retargeting Strategy' },
    ],
  },
  {
    id: 'organic-marketing',
    title: 'Organic Marketing',
    desc: 'Rank higher on Google for the searches your buyers make with SEO, content calendars, and YouTube SEO.',
    slides: [
      { url: s4, caption: 'Keyword Rankings & Inbound Search Growth' },
      { url: s5, caption: 'High-Impact Content Strategy Roadmap' },
      { url: s6, caption: 'Domain Authority & Organic Traffic Analytics' },
    ],
  },
  {
    id: 'ecommerce-management',
    title: 'E-Commerce & Marketplaces',
    desc: 'Sell more on Amazon, Flipkart, Myntra & Nykaa with catalog setup, listing optimisation, reviews and marketplace ads.',
    slides: [
      { url: s7, caption: 'Amazon & Flipkart Sales Acceleration' },
      { url: s8, caption: 'Shopify Store Conversion Rate Funnel' },
      { url: s9, caption: 'A+ Content & High-Converting Product Listings' },
    ],
  },
  {
    id: 'website-development',
    title: 'Website Development',
    desc: 'Shopify, WordPress, .NET & custom websites built for speed, mobile-friendly design, SEO and tracking setup.',
    slides: [
      { url: s10, caption: 'Responsive High-Converting Web Platforms' },
      { url: s11, caption: 'UI/UX Wireframes & Component Design System' },
      { url: s12, caption: 'Core Web Vitals & Speed Optimization' },
    ],
  },
];

// Standalone Video Reviews (Displayed in dedicated Review section with taller aspect ratio)
const VIDEO_REVIEWS_DATA = [
  {
    id: 'video-1',
    title: 'Elite Fitness Club',
    subtitle: 'Scaling 4.2x ROAS in 60 Days',
    videoUrl: 'https://drive.google.com/file/d/1z8wyOGl7On0cXqXaN7Kgqt9EkCr1CQKl/view?usp=drive_link',
  },
  {
    id: 'video-2',
    title: 'Momentum Studio',
    subtitle: 'Automated Performance Funnels',
    videoUrl: 'https://drive.google.com/file/d/1AgyAnn032VFDfEkgBmNvEugSuPku-CYC/view?usp=drive_link',
  },
  {
    id: 'video-3',
    title: 'Prime Active Gym',
    subtitle: 'Multi-Channel Acquisition & Scale',
    videoUrl: 'https://drive.google.com/file/d/15efqQljLF63utRf8Y1xzDF4lFN08iOpU/view?usp=drive_link',
  },
  {
    id: 'video-4',
    title: 'Apex E-Commerce',
    subtitle: 'Marketplace & Shopify Scale',
    videoUrl: 'https://drive.google.com/file/d/19VClRhFfp4g5K-LYWsHcFWJeW-pZQQzN/view?usp=sharing',
  },
];

// Pure text testimonials data for the continuous marquee
const TESTIMONIALS_DATA = [
  {
    id: 'text-1',
    quote:
      '"From the day we onboarded Karya Marketing, our acquisition funnels became far more organized and profitable. Their bilingual performance campaigns and daily ad optimizations delivered a 4.2x ROAS within 60 days, and their responsive support team has always been a reliable technology partner."',
    name: 'Ahmed Al Khalifa',
    role: 'Owner, Elite Fitness Club, Manama',
    tint: 'tint-mint',
  },
  {
    id: 'text-2',
    quote:
      '"Karya Marketing has simplified the way we scale our fitness studio. Automated membership funnels, high-converting creative ads, and weekly transparent attribution have significantly reduced our CPA while helping us stay closely connected with our members."',
    name: 'Fatima Al Dosari',
    role: 'Founder, Momentum Fitness Studio, Muharraq',
    tint: 'tint-pink',
  },
  {
    id: 'text-3',
    quote:
      '"What impressed me most is how comprehensive their growth strategy is. From managing multi-channel marketplaces to engineering blazing-fast landing pages, everything added real measurable revenue to our business. Highly recommended for ambitious founders."',
    name: 'Yousef Al Mansoor',
    role: 'Owner, Prime Active Gym, Riffa',
    tint: 'tint-mint',
  },
  {
    id: 'text-4',
    quote:
      '"Their performance team engineered high-converting funnel pages and ad creatives that immediately cut our acquisition cost by 35%. Complete transparency, weekly reviews, and real compounding growth. Outstanding experience."',
    name: 'Rashid Al-Kuwari',
    role: 'Founder, Apex Retail & Commerce',
    tint: 'tint-cream',
  },
];

// Helper to convert Google Drive share links into embeddable preview URLs
const formatVideoEmbedUrl = (url) => {
  if (!url) return '';
  if (url.includes('drive.google.com')) {
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
  }
  return url;
};

// Custom hook to trigger animate__fadeInUp when an element comes into view
const useInView = (options = {}, initial = false) => {
  const threshold = options?.threshold ?? 0.12;
  const [inView, setInView] = useState(() => initial || (typeof window !== 'undefined' && !window.IntersectionObserver));
  const ref = useRef(null);

  useEffect(() => {
    if (inView) return;
    const element = ref.current;
    if (!element || typeof window === 'undefined' || !window.IntersectionObserver) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [threshold, inView]);

  return [ref, inView];
};

// Counter component for animated stats (0 -> target value)
const StatCounter = ({ end, suffix = '', duration = 1600, startWhen = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startWhen) return;

    let startTime = null;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Smooth easeOutCubic curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startWhen]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

// Tall Video Review Card Component for the horizontal Review section
const VideoReviewCard = ({ video, onPlay }) => {
  const [thumbError, setThumbError] = useState(false);
  const match = video.videoUrl ? video.videoUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) : null;
  const fileId = match ? match[1] : '';
  const thumbUrl = fileId ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w800` : '';

  const handleTriggerPlay = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    onPlay(video.videoUrl);
  };

  return (
    <div
      className="video-review-card"
      onClick={handleTriggerPlay}
      role="button"
      tabIndex={0}
      aria-label={`Play review: ${video.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleTriggerPlay();
        }
      }}
    >
      <div className="video-review-card-screen">
        {!thumbError && thumbUrl ? (
          <img
            src={thumbUrl}
            alt={video.title}
            className="video-review-thumb"
            onError={() => setThumbError(true)}
            loading="lazy"
          />
        ) : (
          <div className="video-review-logo-fallback">
            <img src={logo} alt="Karya Logo" className="video-review-fallback-logo" />
          </div>
        )}

        <div className="video-review-play-center">
          <Play size={24} fill="currentColor" />
        </div>

       
      </div>
    </div>
  );
};

const Home = ({ onOpenQueryModal }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [activeServiceIdx, setActiveServiceIdx] = useState(0);
  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const [editorialImage, _setEditorialImage] = useState(aboutHome); // Empty for now, user can insert URL later
  const [activeVideoUrl, setActiveVideoUrl] = useState(null);
  const [currentTime, setCurrentTime] = useState('');

  // Scroll reveal refs for each section
  const [heroRef, heroInView] = useInView({ threshold: 0.05 }, true);
  const [marqueeRef, marqueeInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.15 });
  const [whyRef, whyInView] = useInView({ threshold: 0.1 });
  const [reviewsRef, reviewsInView] = useInView({ threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1 });

  // Preload all services images on mount to eliminate loading lag on slides
  useEffect(() => {
    const serviceImages = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12];
    serviceImages.forEach((src) => {
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % ROTATING_WORDS.length);
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  // Update clock for editorial top bar
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const clockTimer = setInterval(updateTime, 1000);
    return () => clearInterval(clockTimer);
  }, []);

  // Manage body scroll and Escape key when video popout modal is active
  useEffect(() => {
    if (activeVideoUrl) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setActiveVideoUrl(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeVideoUrl]);

  const currentService = SERVICES_SHOWCASE_DATA[activeServiceIdx];
  const totalSlides = currentService.slides.length;
  const currentSlide = currentService.slides[activeSlideIdx];
  const currentSlideImage = typeof currentSlide === 'string' ? currentSlide : (currentSlide?.url || '');
  const currentSlideCaption = typeof currentSlide === 'object' ? currentSlide?.caption : '';

  // Auto slide services section every 1500ms
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlideIdx((prev) => (prev + 1) % totalSlides);
    }, 1500);

    return () => clearInterval(slideTimer);
  }, [totalSlides, activeServiceIdx]);

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

  // Switch active service and reset slide to first
  const handleSelectShowcaseService = (index) => {
    setActiveServiceIdx(index);
    setActiveSlideIdx(0);
  };

  return (
    <main className="home-main">
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef} id="hero">
        <div className="hero-container">
          {/* Left Side: Tag, Title, Desc, Two CTAs */}
          <div className={`hero-content-left ${heroInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
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
              >
               <Link to="/services" style={{textDecoration: "none", color: "inherit"}}> <span>Explore Services</span></Link>
                <ArrowUpRight className="btn-arrow-tilt" size={18} strokeWidth={2.4} />
              </button>
            </div>
          </div>

          {/* Right Side: Four Boxes Grid with Services Names */}
          <div className={`hero-services-right ${heroInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
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

      {/* Services Marquee Track: Things we provide */}
      <section className="services-marquee-section" ref={marqueeRef} aria-label="Services Offerings Ticker">
        <div className={`marquee-outer-wrapper ${marqueeInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
          <div className="marquee-track">
            {SERVICES_MARQUEE_ITEMS.concat(SERVICES_MARQUEE_ITEMS).map((item, idx) => (
              <div key={`marquee-item-${idx}`} className="marquee-item">
                <span className="marquee-sparkle">✦</span>
                <span className="marquee-text">{item.text}</span>
                <span className="marquee-badge">{item.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section className="services-showcase-section" ref={servicesRef} id="services">
        <div className="services-showcase-container">
          <div className="services-showcase-wrapper">

            {/* Left Header Area */}
            <div className={`services-header-area ${servicesInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
              <div className="services-tag-badge">
                <span className="services-tag-bullet"></span>
                <span className="services-tag-text">CORE EXPERTISE</span>
              </div>
              <h2 className="services-showcase-title">Services that we provide</h2>
              <p className="services-showcase-desc">
                Everything you need to grow online, under one roof. Paid ads, organic growth, marketplaces and websites. Pick one service or combine them.
              </p>
            </div>

            {/* Visual Showcase (3-3 Image Slides with animate__zoomIn) */}
            {/* Note: In Desktop this appears on the right; in Mobile this appears ABOVE the boxes */}
            <div className={`services-visual-area ${servicesInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
              <div className="showcase-device-frame">
                {/* Top Window Bar */}
               

                {/* Animated Slide Screen */}
                <div className="showcase-screen-viewport">
                  <div
                    key={`${currentService.id}-${activeSlideIdx}`}
                    className="showcase-slide-animator animate__animated animate__zoomIn"
                  >
                    {currentSlideImage ? (
                      <img
                        src={currentSlideImage}
                        alt={currentSlideCaption || currentService.title}
                        className="showcase-active-img"
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                      />
                    ) : (
                      <div className="showcase-empty-placeholder">
                        <div className="placeholder-content">
                          <div className="placeholder-icon-ring">
                            <ImageIcon size={38} className="placeholder-icon" strokeWidth={1.8} />
                          </div>
                          <h4 className="placeholder-service-name">{currentService.title}</h4>
                          <p className="placeholder-slide-caption">
                            {currentSlideCaption || `Slide 0${activeSlideIdx + 1} Preview`}
                          </p>
                          <div className="placeholder-meta-tags">
                            <span className="placeholder-pill">Slide {activeSlideIdx + 1} of 3</span>
                            <span className="placeholder-status-tag">Ready for Upload</span>
                          </div>
                          <p className="placeholder-helper-note">
                            Insert image in SERVICES_SHOWCASE_DATA: slides[{activeSlideIdx}].url
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Slide Bottom Controls (Navigation buttons without arrows, auto-advances every 1500ms) */}
                <div className="showcase-slide-controls">
                  <div className="slide-dots-group">
                    {currentService.slides.map((_, dotIdx) => (
                      <button
                        key={`slide-dot-${dotIdx}`}
                        type="button"
                        className={`slide-nav-dot ${activeSlideIdx === dotIdx ? 'active' : ''}`}
                        onClick={() => setActiveSlideIdx(dotIdx)}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Service Boxes 2x2 Grid */}
            <div className={`services-boxes-grid ${servicesInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
              {SERVICES_SHOWCASE_DATA.map((service, index) => {
                const isActive = activeServiceIdx === index;
                return (
                  <div
                    key={service.id}
                    className={`service-feature-card ${isActive ? 'active-service-card' : ''}`}
                    onClick={() => handleSelectShowcaseService(index)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSelectShowcaseService(index);
                      }
                    }}
                  >
                    <div className="feature-card-header">
                      <h3 className="feature-card-title">{service.title}</h3>
                      
                    </div>
                    <p className="feature-card-desc">{service.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Editorial Company Profile Section (White Theme) */}
      <section className="editorial-about-section" ref={aboutRef} id="about">
        <div className="editorial-container">
          {/* Giant Title from Design */}
          <div className={`editorial-header-wrap ${aboutInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
            <h1 className="editorial-hero-title">Karya Marketing</h1>

            {/* Top Meta Line with local time */}
            <div className="editorial-meta-bar">
              <span className="editorial-meta-item">DIGITAL GROWTH PARTNER</span>
              <span className="editorial-meta-item">INNOVATION & PERFORMANCE</span>
              <span className="editorial-meta-item editorial-time-pill">
                OUR TIME {currentTime || '3:24:50 PM'}
              </span>
            </div>
          </div>

          {/* Content Grid: Left Text + Co-Founders + CTA, Right Image */}
          <div className="editorial-content-grid">
            <div className={`editorial-left-col ${aboutInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
              <p className="editorial-paragraph">
                We are a full-service digital marketing and performance growth partner focused on
                creating thoughtful, ROI-centered digital experiences. With a sharp eye for metrics
                and a deep understanding of consumer psychology, we craft strategies that are not
                only visually compelling but also scalable, intuitive, and profitable.
              </p>

              <p className="editorial-paragraph">
                We believe great marketing goes beyond surface aesthetics—it solves real business
                problems and delivers meaningful revenue experiences. Our approach combines rigorous
                data, creative storytelling, and tech architecture to build products and campaigns
                that users enjoy and businesses value.
              </p>

              {/* Co-Founders Highlight */}
              <div className="editorial-founders-block">
                <span className="founders-label">CO-FOUNDERS</span>
                <div className="founders-chips">
                  <div className="founder-chip">
                    <span className="founder-avatar-initial">S</span>
                    <div className="founder-info">
                      <strong className="founder-name">Mr. Surya Thakur</strong>
                      <span className="founder-role">Co-Founder & Growth Strategist</span>
                    </div>
                  </div>
                  <div className="founder-chip">
                    <span className="founder-avatar-initial">K</span>
                    <div className="founder-info">
                      <strong className="founder-name">Miss. Kanishtha</strong>
                      <span className="founder-role">Co-Founder & Creative Director</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Know More Button */}
              <div className="editorial-action-row">
                <button
                  type="button"
                  className="btn-know-more"
                  onClick={() => handleCtaClick('General Inquiry')}
                >
             <Link to="/about" style={{textDecoration: "none", color: "inherit"}}><span >Know more</span></Link>
                  <ArrowUpRight className="btn-arrow-tilt" size={18} strokeWidth={2.4} />
                </button>
              </div>
            </div>

            {/* Right Column: Image Frame (Empty placeholder ready for upload) */}
            <div className={`editorial-right-col ${aboutInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
              <div className="editorial-image-frame">
                {editorialImage ? (
                  <img
                    src={editorialImage}
                    alt="Karya Marketing Profile"
                    className="editorial-main-img"
                  />
                ) : (
                  <div className="editorial-placeholder-box">
                    <div className="editorial-placeholder-inner">
                      <div className="placeholder-cam-icon">
                        <ImageIcon size={44} strokeWidth={1.6} />
                      </div>
                      <h4 className="placeholder-head">Karya Marketing Showcase</h4>
                      <p className="placeholder-sub">Upload image in editorialImage state</p>
                      <span className="placeholder-badge">Ready For Image</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Stats Section with animated counter effect */}
          <div className={`editorial-stats-row ${statsInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`} ref={statsRef}>
            <div className="editorial-stat-card">
              <span className="stat-category-tag">COMPANIES</span>
              <h3 className="stat-large-number">
                <StatCounter end={28} suffix="+" startWhen={statsInView} />
              </h3>
              <p className="stat-desc-text">
                GLOBALLY AVAILABLE, EMBRACING A VARIETY OF CULTURES & VERTICALS
              </p>
            </div>

            <div className="editorial-stat-card">
              <span className="stat-category-tag">AWARDS</span>
              <h3 className="stat-large-number">
                <StatCounter end={39} suffix="+" startWhen={statsInView} />
              </h3>
              <p className="stat-desc-text">
                RECOGNIZED FOR EXCEPTIONAL CREATIVITY & DATA-DRIVEN PERFORMANCE
              </p>
            </div>

            <div className="editorial-stat-card">
              <span className="stat-category-tag">PROJECTS</span>
              <h3 className="stat-large-number">
                <StatCounter end={150} suffix="+" startWhen={statsInView} />
              </h3>
              <p className="stat-desc-text">
                DELIVERED GLOBALLY, CELEBRATING SUSTAINABLE REVENUE GROWTH
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (Bento Grid: 2 Large, 2 Small across 2 rows) */}
      <section className="why-choose-section" ref={whyRef} id="why-choose-us">
        <div className="why-choose-container">
          <div className={`why-choose-header ${whyInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
            <div className="services-tag-badge">
              <span className="services-tag-bullet"></span>
              <span className="services-tag-text">OUR ADVANTAGE</span>
            </div>
            <h2 className="why-choose-title">Why Choose Us</h2>
            <p className="why-choose-desc">
              We bridge the gap between creative storytelling and algorithmic precision. Every
              strategy is backed by real data, total funnel accountability, and compounding ROI.
            </p>
          </div>

          <div className="bento-grid-wrapper">
            {/* Row 1: Box 1 (Large - Paragraph) & Box 2 (Small - Check Points) */}
            <div className={`bento-box bento-large bento-box-1 ${whyInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
              <div className="bento-top-row">
                <span className="bento-index">01</span>
                <span className="bento-tag">DATA & ATTRIBUTION</span>
              </div>
              <h3 className="bento-title">Total Funnel Accountability & Zero Vanity Metrics</h3>
              <p className="bento-paragraph">
                Many agencies report vanity impressions while actual profits stagnate. At Karya, we
                take full ownership of your conversion pipeline—from first impression to customer
                lifetime value. Every ad dollar is tracked with custom attribution models, and we
                rigorously audit conversion rates at every touchpoint to guarantee measurable,
                repeatable return on ad spend.
              </p>
            </div>

            <div className={`bento-box bento-small bento-box-2 ${whyInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
              <div className="bento-top-row">
                <span className="bento-index">02</span>
                <span className="bento-tag">PRECISION SYSTEM</span>
              </div>
              <h3 className="bento-title">Performance Precision</h3>
              <ul className="bento-points-list">
                <li>
                  <CheckCircle2 className="check-icon" size={19} />
                  <span>Zero vanity metrics — 100% focused on revenue</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" size={19} />
                  <span>Transparent weekly attribution & live reporting</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" size={19} />
                  <span>Rapid iterative creative testing cycle</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" size={19} />
                  <span>Direct access to senior growth strategists</span>
                </li>
              </ul>
            </div>

            {/* Row 2: Box 3 (Small - Check Points) & Box 4 (Large - Paragraph) */}
            <div className={`bento-box bento-small bento-box-3 ${whyInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
              <div className="bento-top-row">
                <span className="bento-index">03</span>
                <span className="bento-tag">TECH ARCHITECTURE</span>
              </div>
              <h3 className="bento-title">Engineered For Scale</h3>
              <ul className="bento-points-list">
                <li>
                  <CheckCircle2 className="check-icon" size={19} />
                  <span>Blazing-fast custom code & landing architectures</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" size={19} />
                  <span>Amazon, Flipkart & Shopify store scaling</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" size={19} />
                  <span>Dedicated growth account manager</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" size={19} />
                  <span>Continuous conversion rate optimization (CRO)</span>
                </li>
              </ul>
            </div>

            <div className={`bento-box bento-large bento-box-4 ${whyInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
              <div className="bento-top-row">
                <span className="bento-index">04</span>
                <span className="bento-tag">CREATIVE ENGINE</span>
              </div>
              <h3 className="bento-title">High-Impact Creative Meets Algorithmic Rigor</h3>
              <p className="bento-paragraph">
                High-performance growth requires the intersection of emotion and engineering. Our
                in-house designers, copywriters, and developers produce thumb-stopping creative
                assets engineered specifically to hook modern buyers, while our media buyers
                dynamically optimize multi-channel bid strategies to consistently outpace your
                competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Reviews Section (Horizontal Swipeable Track, No Marquee, Tall Cards) */}
      <section className="video-reviews-section" ref={reviewsRef} id="reviews">
        <div className="video-reviews-container">
          <div className={`video-reviews-header ${reviewsInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
            <div className="services-tag-badge">
              <span className="services-tag-bullet"></span>
              <span className="services-tag-text">STORIES</span>
            </div>
            <h2 className="video-reviews-title">Video Reviews</h2>
            <p className="video-reviews-desc">
              Watch real founders and business leaders share how Karya Marketing accelerated their acquisition,
              streamlined operations, and scaled revenue.
            </p>
          </div>

          <div className={`video-reviews-track ${reviewsInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
            {VIDEO_REVIEWS_DATA.map((video) => (
              <VideoReviewCard
                key={video.id}
                video={video}
                onPlay={setActiveVideoUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section (Continuous Seamless Loop Marquee with Text Reviews Only) */}
      <section className="testimonials-marquee-section" ref={testimonialsRef} id="testimonials">
        <div className={`testimonials-header-block ${testimonialsInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
          <div className="services-tag-badge">
            <span className="services-tag-bullet"></span>
            <span className="services-tag-text">CLIENT FEEDBACK</span>
          </div>
          <h2 className="testimonials-main-title">Testimonials</h2>
        </div>

        <div className={`testimonials-marquee-outer ${testimonialsInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
          <div className="testimonials-marquee-track">
            {TESTIMONIALS_DATA.concat(TESTIMONIALS_DATA).map((item, idx) => (
              <div
                key={`testimonial-${item.id}-${idx}`}
                className={`testimonial-quote-box ${item.tint}`}
              >
                <p className="testimonial-quote-text">{item.quote}</p>

                <div className="testimonial-card-bottom">
                  <div className="author-details">
                    <strong className="author-name">{item.name}</strong>
                    <span className="author-role">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Reference Design with Half Mobile Image, No Logos) */}
      <section className="cta-showcase-section" ref={ctaRef} id="contact">
        <div className="cta-showcase-container">
          <div className="cta-content-wrapper">
            {/* Left Side: Tag, Heading, Desc, Button */}
            <div className={`cta-text-side ${ctaInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
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
            <div className={`cta-mobile-side ${ctaInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
              <div className="cta-mobile-frame">
                <img src={mobileImg} alt="Karya Mobile Showcase" className="cta-half-mobile-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Popout Modal (With dedicated top bar and easy mobile cancel) */}
      {activeVideoUrl && (
        <div
          className="video-modal-backdrop"
          onClick={() => setActiveVideoUrl(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-header-bar">
              <span className="video-modal-title"></span>
              <button
                type="button"
                className="video-modal-close-btn"
                onClick={() => setActiveVideoUrl(null)}
                aria-label="Close video"
              >
                <X size={20} strokeWidth={2.4} />
              </button>
            </div>

            <div className="video-player-frame">
              <iframe
                src={formatVideoEmbedUrl(activeVideoUrl)}
                title="Client Video Review"
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope"
                allowFullScreen
                loading="eager"
                className="video-embed-iframe"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;
