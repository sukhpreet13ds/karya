import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowUpRight,
  Image as ImageIcon,
  Play,
  CheckCircle2,
  X
} from 'lucide-react';
import 'animate.css';
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
import fourthThumb from '../assets/fourth.png'
import  {Link} from 'react-router-dom';
import CtaSection from '../components/CtaSection';

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

// Standalone Video Reviews (from review.txt with titles, descriptions & tall video frames)
const VIDEO_REVIEWS_DATA = [
  {
    id: 'video-1',
    title: 'Dr. Shikha Atri — Founder, True Smilez Dental Clinic, Chandigarh',
    description:
      'For over a year, we ran Google Ads for True Smilez, putting the clinic in front of people searching for a dentist nearby. The result: a steady flow of patient calls, month after month. Hear Dr. Shikha share her experience with Karya.',
    videoUrl: 'https://drive.google.com/file/d/1z8wyOGl7On0cXqXaN7Kgqt9EkCr1CQKl/view?usp=drive_link',
  },
  {
    id: 'video-2',
    title: 'Jesse Gosse — Founder, Medical Digitals, Europe',
    description:
      "Medical Digitals is a healthcare marketing firm based in Europe. They started with us for SEO, and over two years brought us into their Google Ads and LinkedIn campaigns too. Here's Jesse on why they keep growing with Karya.",
    videoUrl: 'https://drive.google.com/file/d/1AgyAnn032VFDfEkgBmNvEugSuPku-CYC/view?usp=drive_link',
  },
  {
    id: 'video-3',
    title: 'Navjeevan Singh —  Founder, DC Travellers, Chandigarh',
    description:
      "DC Travellers is a travel agency we've worked with on Google and Meta Ads, bringing in steady travel enquiries. Hear from the founder on what working with Karya looks like.",
    videoUrl: 'https://drive.google.com/file/d/15efqQljLF63utRf8Y1xzDF4lFN08iOpU/view?usp=drive_link',
  },
  {
    id: 'video-4',
    title: 'Arjun — Founder, HCP Compass, United Kingdom',
    description:
      "We designed and built the HCP Compass website from scratch and handle its SEO, so the right audience finds them on Google. Also work as their strategist for social media . Here's Arjun on partnering with Karya.",
    videoUrl: 'https://drive.google.com/file/d/19VClRhFfp4g5K-LYWsHcFWJeW-pZQQzN/view?usp=sharing',
    thumbnail: fourthThumb,
  },
];

// Client Results data from review.txt (16 items: max 4x4 on desktop, 2x2 on mobile)
const CLIENT_RESULTS_DATA = [
  {
    id: 'res-1',
    metric: '₹10 Lakh → ₹2 Crore',
    client: 'VIP Number Shop · eCommerce · India',
    description:
      'We rebuilt targeting around high-intent buyers and positioned the brand on exclusivity, not discounts. Achieved a 20x return on ad spend.',
    services: 'Meta Ads · Google Ads',
    url: 'https://www.vipnumbershop.com/',
  },
  {
    id: 'res-2',
    metric: '₹1.99 Lakh in 8 Days',
    client: 'Flawnt · Pearl Jewellery · India',
    description:
      'A full Meta Ads setup with CAPI and catalog feed drove 46% week-over-week sales growth from new customers.',
    services: 'Meta Ads · Google Ads',
    url: 'https://flawnt.store/?srsltid=AYCX9vL2r8Fi2ukghKB_aXY_CEnpMOSY_511pzC8QZGkYDVbiaNLTu67',
  },
  {
    id: 'res-3',
    metric: 'Up to 3.64x ROAS',
    client: 'Pro Ultimate Sports · Sportswear · India',
    description:
      'Launched 88 campaigns, scaling each product line independently and reaching 11.2 million people.',
    services: 'Meta Ads · Automation',
    url: 'https://proultimatesports.com/',
  },
  {
    id: 'res-4',
    metric: '2.3 Lakh Profile Visits at ₹0.93',
    client: 'CEAT Specialty · Industrial · Global',
    description:
      'Ran country-specific campaigns across Germany, UK, France, North America, and India in collaboration with a partner agency.',
    services: 'Google Ads · Meta Ads · LinkedIn Ads',
  },
  {
    id: 'res-5',
    metric: '2 Years, Still Growing Together',
    client: 'Medical Digitals · Healthcare Marketing · Europe',
    description:
      'What started as SEO gradually expanded into Google Ads and LinkedIn campaigns, building a long-term marketing partnership.',
    services: 'SEO · Google Ads · LinkedIn Ads',
    url: 'https://medicaldigitals.com/',
  },
  {
    id: 'res-6',
    metric: '$17K → $47.9K Revenue',
    client: 'Dura Craft · Furniture · Australia',
    description:
      'Refined campaigns and tested creatives that directed potential buyers straight to product pages.',
    services: 'Meta Ads · Google Ads',
  },
  {
    id: 'res-7',
    metric: '1,967 Leads for ₹66.5K',
    client: 'AppCartify · SaaS · UAE, India, USA',
    description:
      'Improved targeting and creatives for a Shopify mobile-app product to generate high-quality leads.',
    services: 'Meta Ads',
    url: 'https://www.appcartify.com/',
  },
  {
    id: 'res-8',
    metric: '939 Leads at $3.65 Each',
    client: 'VIS Learning · Education · Australia',
    description:
      'Executed targeted lead generation campaigns for an educational visa consultancy.',
    services: 'Meta Ads',
  },
  {
    id: 'res-9',
    metric: '13x ROAS',
    client: 'Rangeela · Clothing · Canada',
    description:
      'Ran targeted advertising campaigns for an online women’s clothing brand, focusing on performance and conversions.',
    services: 'Meta Ads · Google Ads',
    url: 'https://www.rangeelaa.com/?srsltid=AYCX9vJHUdPs8MtxNwVDywzQTqXntEqu46_QBv_hifRfgLf3ZSTKykVq',
  },
  {
    id: 'res-10',
    metric: '314K → 3.57M Views',
    client: 'ThinkJr · Kids Education · USA',
    description:
      'Reduced cost per view by 75% while increasing clicks from 455 to 12.5K through optimized YouTube campaigns.',
    services: 'YouTube Ads',
  },
  {
    id: 'res-11',
    metric: '591 Leads at ₹50 Each',
    client: 'Emerald Heights Schools · Education · India',
    description:
      'Generated admission leads through targeted campaigns for two schools in Indore.',
    services: 'Meta Ads',
  },
  {
    id: 'res-12',
    metric: '244K Clicks, 1.89K Conversions',
    client: 'GoMage · eCommerce Agency · USA',
    description:
      'Managed 12 months of Google Ads campaigns, achieving an average cost per click of just $0.20.',
    services: 'Google Ads',
  },
  {
    id: 'res-13',
    metric: 'A Year of Steady Patient Calls',
    client: 'True Smilez · Dental Clinic · Mohali',
    description:
      'Managed Google Ads campaigns for over a year, consistently bringing local patients to the dental clinic.',
    services: 'Google Ads',
    url: 'https://truesmilez.in/',
  },
  {
    id: 'res-14',
    metric: 'A Full Marketing Team in One Partner',
    client: 'Bhealix · Skincare · India',
    description:
      'Delivered an integrated marketing solution covering strategy, social media, Meta Ads, Google Ads, and overall marketing management.',
    services: 'Full-Service Marketing',
    url: 'https://www.bhealix.com/?srsltid=AYCX9vJLDZaPHqAu2sEPuZ2rXe7VlnAoPDqQoL2he1ow-z5YJhlxxt-j',
  },
  {
    id: 'res-15',
    metric: 'Meta Ads + Social Media Direction',
    client: 'Rajat Ganga Jewellers · Jewellery · Jaipur',
    description:
      'Provided Meta Ads expertise and social media consulting to strengthen the brand’s digital presence.',
    services: 'Meta Ads · Social Media',
    url: 'https://rajatgangajewelsstudio.in/',
  },
  {
    id: 'res-16',
    metric: 'One Brand, Two Markets',
    client: 'Footwear · India & UK',
    description:
      'Managed Meta Ads and social media strategies to maintain consistent brand communication across the Indian and UK markets.',
    services: 'Meta Ads · Social Media',
  },
];

// Industries We've Worked With data from review.txt
const INDUSTRIES_DATA = [
  {
    id: 'ind-1',
    industry: 'Dental & Healthcare',
    brands: ['True Smilez', 'Dental IQ', 'The Dental Masters', 'Medical Digitals'],
  },
  {
    id: 'ind-2',
    industry: 'Jewellery',
    brands: ['Flawnt', 'Rajat Ganga Jewellers'],
  },
  {
    id: 'ind-3',
    industry: 'Fashion, Footwear & Sportswear',
    brands: ['Pro Ultimate Sports', 'Rangeela'],
  },
  {
    id: 'ind-4',
    industry: 'Skincare',
    brands: ['Bhealix'],
  },
  {
    id: 'ind-5',
    industry: 'Fitness',
    brands: ['Pro Ultimate Gyms'],
  },
  {
    id: 'ind-6',
    industry: 'eCommerce',
    brands: ['VIP Number Shop', 'Dura Craft', 'Healthy Bedroom'],
  },
  {
    id: 'ind-7',
    industry: 'Education',
    brands: ['Emerald Heights Schools', 'VIS Learning', 'ThinkJr'],
  },
  {
    id: 'ind-8',
    industry: 'SaaS & Software',
    brands: ['AppCartify', 'ILN', 'GoMage'],
  },
  {
    id: 'ind-9',
    industry: 'Travel',
    brands: ['DC Travellers'],
  },
  {
    id: 'ind-10',
    industry: 'Music',
    brands: ['ShabadGuru', 'UK artists'],
  },
  {
    id: 'ind-11',
    industry: 'Automotive & Industrial',
    brands: ['CEAT Specialty', 'CAMSO'],
  },
];

// Hero right side 4 highlight stat cards from review.txt
const HERO_HIGHLIGHT_CARDS = [
  {
    id: 'hero-stat-1',
    number: '01',
    bigNumber: '₹10L → ₹2Cr',
    label: 'Revenue from ad spend',
    smallLine: 'VIP Number Shop · 20x ROAS',
  },
  {
    id: 'hero-stat-2',
    number: '02',
    bigNumber: '₹1.99L',
    label: 'Sales in 8 days',
    smallLine: 'Flawnt · Pearl Jewellery',
  },
  {
    id: 'hero-stat-3',
    number: '03',
    bigNumber: '11.2M',
    label: 'People reached',
    smallLine: 'Pro Ultimate Sports · 3.64x ROAS',
  },
  {
    id: 'hero-stat-4',
    number: '04',
    bigNumber: '6 Countries',
    label: 'Countries served',
    smallLine: '$1.5M+ ad spend managed',
  },
];

// Pure text testimonials data from review.txt for continuous marquee
const TESTIMONIALS_DATA = [
  {
    id: 'review-1',
    name: 'Pro Ultimate Sports',
    role: "Men's Sportswear, India",
    quote:
      'This fitness apparel brand needed every product line to sell on its own. We built 88 separate Meta campaigns, added WhatsApp abandoned-cart automation, and reached 11.2M people, with top campaigns at 3.64x ROAS.',
    tint: 'tint-mint',
  },
  {
    id: 'review-2',
    name: 'Flawnt',
    role: 'Pearl Jewellery, India',
    quote:
      'Flawnt wanted growth from new customers, not just retargeting. With a full Meta Ads setup, CAPI and catalog feed, they made ₹1.99 lakh in sales in 8 days, up 46% week over week.',
    tint: 'tint-pink',
  },
  {
    id: 'review-3',
    name: 'VIP Number Shop',
    role: 'eCommerce, India',
    quote:
      "Their ads weren't showing why a VIP number is special. We repositioned the brand on exclusivity and targeted business owners, turning ₹10 lakh of ad spend into ₹2 crore in revenue.",
    tint: 'tint-cream',
  },
  {
    id: 'review-4',
    name: 'Rajat Ganga Jewellers',
    role: 'Jewellery, Jaipur',
    quote:
      'We worked as their Meta Ads specialists and social media consultants, shaping how the brand shows up and sells online.',
    tint: 'tint-mint',
  },
  {
    id: 'review-5',
    name: 'Bhealix',
    role: 'Skincare, India',
    quote:
      'Bhealix got a complete marketing team in one partner: strategy, social media, Meta Ads, Google Ads and day-to-day management.',
    tint: 'tint-pink',
  },
  {
    id: 'review-6',
    name: 'Pro Ultimate Gyms',
    role: 'Fitness Franchise, India',
    quote:
      'We ran Meta and Google Ads with social media to keep new member enquiries coming in across their gyms.',
    tint: 'tint-cream',
  },
  {
    id: 'review-7',
    name: 'Dura Craft',
    role: 'Furniture, Australia',
    quote:
      'Sales were stuck despite good products. Refined campaigns and tested creatives turned $17K of ad spend into $47.9K in revenue.',
    tint: 'tint-mint',
  },
  {
    id: 'review-8',
    name: 'AppCartify',
    role: 'SaaS, UAE, India & USA',
    quote:
      'Better targeting and creatives brought 1,967 leads for their Shopify app on just ₹66.5K.',
    tint: 'tint-pink',
  },
  {
    id: 'review-9',
    name: 'VIS Learning',
    role: 'Visa Consultancy, Australia',
    quote:
      "Their ads weren't reaching the right students. We generated 939 quality leads at $3.65 each.",
    tint: 'tint-cream',
  },
  {
    id: 'review-10',
    name: 'Rangeela',
    role: "Women's Clothing, Canada",
    quote:
      'Low engagement turned into a 13x return on ad spend with a focused campaign strategy.',
    tint: 'tint-mint',
  },
  {
    id: 'review-11',
    name: 'ThinkJr',
    role: 'Kids Education, USA',
    quote:
      'YouTube views grew from 314K to 3.57M while cost per view dropped 75%.',
    tint: 'tint-pink',
  },
  {
    id: 'review-12',
    name: 'Emerald Heights Schools',
    role: 'Education, Indore',
    quote:
      'Admission campaigns brought 591 leads at ₹50 each for two schools.',
    tint: 'tint-cream',
  },
  {
    id: 'review-13',
    name: 'GoMage',
    role: 'eCommerce Agency, USA',
    quote:
      '12 months of Google Ads delivered 244K clicks and 1,890 conversions at $0.20 per click.',
    tint: 'tint-mint',
  },
  {
    id: 'review-14',
    name: 'CEAT Specialty',
    role: 'Industrial Tyres, Global',
    quote:
      'With a partner agency, we ran country-wise campaigns across 5 markets, including 2.3 lakh Instagram profile visits at ₹0.93 each.',
    tint: 'tint-pink',
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
const StatCounter = ({
  end,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1600,
  startWhen = false,
}) => {
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
      const currentVal = easeProgress * end;
      setCount(decimals > 0 ? parseFloat(currentVal.toFixed(decimals)) : Math.floor(currentVal));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startWhen, decimals]);

  const displayCount = decimals > 0 ? count.toFixed(decimals) : count;

  return (
    <span>
      {prefix}
      {displayCount}
      {suffix}
    </span>
  );
};

// Tall Video Review Card Component for the horizontal Review section
const VideoReviewCard = ({ video, onPlay }) => {
  const [thumbError, setThumbError] = useState(false);
  const match = video.videoUrl ? video.videoUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) : null;
  const fileId = match ? match[1] : '';
  const thumbUrl = video.thumbnail || (fileId ? `https://drive.google.com/thumbnail?id=${fileId}&sz=w800` : '');

  const handleTriggerPlay = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    onPlay(video.videoUrl);
  };

  return (
    <div className="video-review-slide-item">
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

      <div className="video-review-content-below">
        <h4 className="video-review-caption-title">{video.title}</h4>
        <p className="video-review-caption-desc">{video.description}</p>
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
  const [ourTime, setOurTime] = useState('');
  const [userTime, setUserTime] = useState('');

  // Scroll reveal refs for each section
  const [heroRef, heroInView] = useInView({ threshold: 0.05 }, true);
  const [marqueeRef, marqueeInView] = useInView({ threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ threshold: 0.15 });
  const [whyRef, whyInView] = useInView({ threshold: 0.1 });
  const [resultsRef, resultsInView] = useInView({ threshold: 0.08 });
  const [reviewsRef, reviewsInView] = useInView({ threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.1 });
  const [industriesRef, industriesInView] = useInView({ threshold: 0.1 });

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

  // Update clocks for editorial top bar: Karya office time (IST) + Visitor's local browser time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      try {
        setOurTime(
          now.toLocaleTimeString('en-US', {
            timeZone: 'Asia/Kolkata',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
          })
        );
      } catch {
        setOurTime(
          now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
          })
        );
      }
      setUserTime(
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
              Spent on ads that didn’t sell? We fix what’s broken, from targeting and creatives to your funnel, so every rupee starts working.
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

          {/* Right Side: Four Highlight Stat Boxes Grid */}
          <div className={`hero-services-right ${heroInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
            <div className="hero-services-grid">
              {HERO_HIGHLIGHT_CARDS.map((card) => (
                <div
                  key={card.id}
                  className="hero-service-card"
                  onClick={() => handleServiceCardClick(card.label)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleServiceCardClick(card.label);
                    }
                  }}
                >
                  <div className="card-top-row">
                    <span className="service-number">{card.number}</span>
                    <div className="service-tilt-badge">
                      <ArrowUpRight className="service-tilt-arrow" size={18} strokeWidth={2.4} />
                    </div>
                  </div>

                  <div className="hero-card-stat-block">
                    <h3 className="hero-card-big-number">{card.bigNumber}</h3>
                    <p className="hero-card-label">{card.label}</p>
                    <span className="hero-card-small-line">{card.smallLine}</span>
                  </div>

                  <div className="card-bottom-action">
                    <span className="card-action-text">See the case study</span>
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
                Four ways we turn your marketing spend into customers. Pick one, or let us run them all.
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
              <div className="editorial-time-stack">
                <span className="editorial-meta-item editorial-time-pill">
                  OUR TIME: {ourTime || '3:24:50 PM'}
                </span>
                <span className="editorial-meta-item editorial-time-pill user-time-pill">
                  YOUR TIME: {userTime || '3:24:50 PM'}
                </span>
              </div>
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
                    {/* <span className="founder-avatar-initial">S</span> */}
                    <div className="founder-info">
                      <strong className="founder-name">Surya Thakur</strong>
                      <span className="founder-role">Co-Founder & Growth Strategist</span>
                    </div>
                  </div>
                  <div className="founder-chip">
                    {/* <span className="founder-avatar-initial">K</span> */}
                    <div className="founder-info">
                      <strong className="founder-name">Kanishtha</strong>
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
              <span className="stat-category-tag">AD SPEND MANAGED</span>
              <h3 className="stat-large-number">
                <StatCounter prefix="$" end={1.5} decimals={1} suffix="M+" startWhen={statsInView} />
              </h3>
            </div>

            <div className="editorial-stat-card">
              <span className="stat-category-tag">PEAK ROAS</span>
              <h3 className="stat-large-number">
                <StatCounter end={20} suffix="x" startWhen={statsInView} />
              </h3>
            </div>

            <div className="editorial-stat-card">
              <span className="stat-category-tag">COUNTRIES SERVED</span>
              <h3 className="stat-large-number">
                <StatCounter end={6} startWhen={statsInView} />
              </h3>
            </div>

            <div className="editorial-stat-card">
              <span className="stat-category-tag">LEADS GENERATED</span>
              <h3 className="stat-large-number">
                <StatCounter end={14} suffix="K+" startWhen={statsInView} />
              </h3>
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
            <h2 className="why-choose-title">Why Brands Choose Karya</h2>
            <p className="why-choose-desc">
              We measure success the way you do: in leads, orders and revenue, not likes and impressions.
            </p>
          </div>

          <div className="bento-grid-wrapper">
            {/* Row 1: Box 1 (Large - Paragraph) & Box 2 (Small - Check Points) */}
            <div className={`bento-box bento-large bento-box-1 ${whyInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
              <div className="bento-top-row">
                <span className="bento-index">01</span>
               
              </div>
              <h3 className="bento-title"> Results You Can Count</h3>
              <p className="bento-paragraph">
                Many agencies send reports full of reach and impressions while sales stay flat. We track every rupee from ad to enquiry to order, so you always know what your spend brought back.
              </p>
            </div>

            <div className={`bento-box bento-small bento-box-2 ${whyInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
              <div className="bento-top-row">
                <span className="bento-index">02</span>
               
              </div>
              <h3 className="bento-title">No Lock-In, Full Transparency</h3>
              <ul className="bento-points-list">
                <li>
                  <CheckCircle2 className="check-icon" size={19} />
                  <span>Free lead audit before we start</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" size={19} />
                  <span>Month-to-month, cancel anytime</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" size={19} />
                  <span>Weekly reports on leads and cost per lead</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" size={19} />
                  <span>Direct access to the founders</span>
                </li>
              </ul>
            </div>

            {/* Row 2: Box 3 (Small - Check Points) & Box 4 (Large - Paragraph) */}
            <div className={`bento-box bento-small bento-box-3 ${whyInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
              <div className="bento-top-row">
                <span className="bento-index">03</span>
               
              </div>
              <h3 className="bento-title">One Team for Everything</h3>
              <ul className="bento-points-list">
                <li>
                  <CheckCircle2 className="check-icon" size={19} />
                  <span>Meta, Google, LinkedIn & YouTube Ads</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" size={19} />
                  <span>SEO and social media</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" size={19} />
                  <span>Amazon, Flipkart & Shopify growth</span>
                </li>
                <li>
                  <CheckCircle2 className="check-icon" size={19} />
                  <span>Websites built to convert</span>
                </li>
              </ul>
            </div>

            <div className={`bento-box bento-large bento-box-4 ${whyInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
              <div className="bento-top-row">
                <span className="bento-index">04</span>
              </div>
              <h3 className="bento-title">Proven Across Industries & Countries</h3>
              <p className="bento-paragraph">
               From pearl jewellery and sportswear to dental clinics, SaaS and industrial brands, we’ve grown businesses in 6 countries. Whatever your industry, we’ve likely solved your problem before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Results Section (4x4 Grid on Desktop, Responsive, 2x2 on Mobile) */}
      <section className="client-results-section" ref={resultsRef} id="results">
        <div className="client-results-container">
          <div className={`client-results-header ${resultsInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
            <div className="services-tag-badge">
              <span className="services-tag-bullet"></span>
              <span className="services-tag-text">CLIENT RESULTS</span>
            </div>
            <h2 className="client-results-title">Real Numbers. Real Brands.</h2>
            <p className="client-results-desc">
              No vanity metrics. Here's what our work actually delivered.
            </p>
          </div>

          <div className={`client-results-grid ${resultsInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
            {CLIENT_RESULTS_DATA.map((item, index) => (
              <div key={item.id} className="client-result-box">
                <div className="result-box-top">
                  <span className="result-index">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                  <span className="result-services-tag">{item.services}</span>
                </div>
                <h3 className="result-metric-text">{item.metric}</h3>
                <h4 className="result-client-name">{item.client}</h4>
                <p className="result-desc-text">{item.description}</p>
                {item.url && (
                  <div className="result-url-wrap">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="result-site-link"
                    >
                      <span className="result-site-url">
                        {item.url.replace(/^https?:\/\//, '').replace(/\/$/, '').split('?')[0]}
                      </span>
                      <ArrowUpRight size={13} className="result-link-arrow" strokeWidth={2.4} />
                    </a>
                  </div>
                )}
              </div>
            ))}
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

      {/* Industries We've Worked With Section */}
      <section className="industries-section" ref={industriesRef} id="industries">
        <div className="industries-container">
          <div className={`industries-header ${industriesInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
            <div className="services-tag-badge">
              <span className="services-tag-bullet"></span>
              <span className="services-tag-text">SECTOR EXPERTISE</span>
            </div>
            <h2 className="industries-main-title">Industries We've Worked With</h2>
            <p className="industries-main-desc">
              Every industry speaks its own language. We speak it.
            </p>
          </div>

          <div className={`industries-table-card ${industriesInView ? 'animate__animated animate__fadeInUp' : 'section-fade-prep'}`}>
            <div className="industries-table-scroll">
              <table className="industries-table">
                <thead>
                  <tr>
                    <th className="th-industry">Industry</th>
                    <th className="th-brands">Brands</th>
                  </tr>
                </thead>
                <tbody>
                  {INDUSTRIES_DATA.map((row, index) => (
                    <tr key={row.id} className="industries-table-row">
                      <td className="td-industry">
                        <span className="industry-index">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                        <span className="industry-name">{row.industry}</span>
                      </td>
                      <td className="td-brands">
                        <div className="brand-pills-wrap">
                          {row.brands.map((brand, bIdx) => (
                            <span key={`brand-${index}-${bIdx}`} className="brand-pill">
                              {brand}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (Reference Design with Half Mobile Image, No Logos) */}
    <CtaSection/>

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
