import React, { useState } from 'react';
import {
  CheckCircle2,
  Image as ImageIcon,
  Target,
  Sparkles,
  TrendingUp,
  BarChart3,
  ShieldCheck,
  Zap,
  Users,
  Compass,
  Layers
} from 'lucide-react';
import CtaSection from '../components/CtaSection';
import herobg from '../assets/herobg.png';

const About = ({ onOpenQueryModal }) => {
  // Hero background image
  const [aboutHeroImg, _setAboutHeroImg] = useState(herobg);

  return (
    <main className="about-page-main">
      {/* Top Hero Section with less height, empty image frame, and 'About Us' written over it */}
      <section className="about-hero-section">
        <div className="about-hero-image-frame">
          {aboutHeroImg ? (
            <img src={aboutHeroImg} alt="About Karya Marketing" className="about-hero-bg-img" />
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
                <span className="about-tag-text">WHO WE ARE</span>
              </div>
              <h1 className="about-hero-title">About Us</h1>
              <p className="about-hero-sub">
                Pioneering performance-driven growth, scalable tech architecture, and compounding brand revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections (Pure paragraphs & check points, strictly NO images) */}
      <div className="about-content-body">
        {/* Section 1: Our Story & Purpose */}
        <section className="about-content-section" id="story">
          <div className="about-section-container">
            <div className="about-section-header">
              <div className="about-pill-label">
                <Compass size={14} className="pill-icon" />
                <span>OUR MISSION</span>
              </div>
              <h2 className="about-section-heading">
                Marketing Engineered for Revenue, Not Vanity.
              </h2>
            </div>

            <div className="about-paragraphs-block">
              <p className="about-lead-paragraph">
                Karya Marketing was founded with a singular conviction: ambitious businesses deserve growth
                partners who treat every marketing rupee with the accountability of an investor. In an era where
                many agencies deliver vanity impressions and hollow engagement, we obsess over conversion economics,
                customer acquisition cost (CAC), and verified return on ad spend (ROAS).
              </p>
              <p className="about-secondary-paragraph">
                We believe that great marketing happens at the exact intersection of human emotion and technical
                precision. Our team unites strategic data analysts, thumb-stopping creative directors, performance media
                buyers, and full-stack software engineers under one roof to build systems that scale reliably month over month.
              </p>
            </div>

            {/* Core Check Points */}
            <div className="about-checklist-grid">
              <div className="about-check-card">
                <div className="check-icon-circle">
                  <CheckCircle2 size={20} className="about-check-icon" />
                </div>
                <div className="check-card-text">
                  <h4 className="check-card-title">Full-Funnel Ownership</h4>
                  <p className="check-card-desc">
                    We manage the entire pipeline from top-of-funnel creative to checkout optimization, ensuring no leaks in your customer journey.
                  </p>
                </div>
              </div>

              <div className="about-check-card">
                <div className="check-icon-circle">
                  <CheckCircle2 size={20} className="about-check-icon" />
                </div>
                <div className="check-card-text">
                  <h4 className="check-card-title">Transparent Attribution</h4>
                  <p className="check-card-desc">
                    No hidden dashboards or murky metrics. Live reporting, clear weekly briefs, and transparent tracking directly mapped to revenue.
                  </p>
                </div>
              </div>

              <div className="about-check-card">
                <div className="check-icon-circle">
                  <CheckCircle2 size={20} className="about-check-icon" />
                </div>
                <div className="check-card-text">
                  <h4 className="check-card-title">Engineering-Grade Speed</h4>
                  <p className="check-card-desc">
                    Custom web platforms and landing architectures built with modern code for sub-second loads and maximum conversion rates.
                  </p>
                </div>
              </div>

              <div className="about-check-card">
                <div className="check-icon-circle">
                  <CheckCircle2 size={20} className="about-check-icon" />
                </div>
                <div className="check-card-text">
                  <h4 className="check-card-title">Compounding Optimization</h4>
                  <p className="check-card-desc">
                    Continuous A/B split testing on ad hooks, design frameworks, and sales funnels to systematically lower your acquisition costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Leadership & Co-Founders */}
        <section className="about-content-section about-founders-bg" id="founders">
          <div className="about-section-container">
            <div className="about-section-header">
              <div className="about-pill-label">
                <Users size={14} className="pill-icon" />
                <span>EXECUTIVE LEADERSHIP</span>
              </div>
              <h2 className="about-section-heading">Led by Growth &amp; Creative Pioneers</h2>
              <p className="about-section-subtext">
                Direct access to seasoned decision-makers who have scaled brands across paid media, global marketplaces, and bespoke web platforms.
              </p>
            </div>

            <div className="about-founders-grid">
              {/* Co-Founder 1: Mr. Surya Thakur */}
              <div className="founder-profile-card">
                <div className="founder-profile-header">
                  {/* <div className="founder-avatar-badge">S</div> */}
                  <div>
                    <h3 className="founder-profile-name">Surya Thakur</h3>
                    <span className="founder-profile-title">Co-Founder &amp; Growth Strategist</span>
                  </div>
                </div>
                <p className="founder-bio-text">
                  Surya oversees performance acquisition architecture, media buying algorithms, and cross-channel funnel strategy.
                  With a relentless focus on unit economics and multi-touch attribution, he has spearheaded growth programs that consistently
                  outpace industry benchmarks.
                </p>
                <ul className="founder-points-list">
                  <li>
                    <CheckCircle2 size={16} className="founder-mini-check" />
                    <span>Cross-channel paid media architecture (Meta, Google, LinkedIn)</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="founder-mini-check" />
                    <span>Conversion Rate Optimization (CRO) &amp; retention modeling</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="founder-mini-check" />
                    <span>Advanced data modeling and algorithmic bidding strategy</span>
                  </li>
                </ul>
              </div>

              {/* Co-Founder 2: Miss. Kanishtha */}
              <div className="founder-profile-card">
                <div className="founder-profile-header">
                  {/* <div className="founder-avatar-badge badge-alt">K</div> */}
                  <div>
                    <h3 className="founder-profile-name">Kanishtha</h3>
                    <span className="founder-profile-title">Co-Founder &amp; Creative Director</span>
                  </div>
                </div>
                <p className="founder-bio-text">
                  Kanishtha directs creative vision, brand identity, and psychological hook crafting. Her methodology bridges high-end
                  aesthetic storytelling with rapid performance testing, ensuring every creative asset commands attention and inspires action.
                </p>
                <ul className="founder-points-list">
                  <li>
                    <CheckCircle2 size={16} className="founder-mini-check" />
                    <span>High-converting visual identity and brand positioning</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="founder-mini-check" />
                    <span>Psychology-driven ad creative design &amp; hook storytelling</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="founder-mini-check" />
                    <span>User interface and high-performance experience design</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Strategic Pillars (No Images, Content & Icons Only) */}
        <section className="about-content-section" id="pillars">
          <div className="about-section-container">
            <div className="about-section-header">
              <div className="about-pill-label">
                <Layers size={14} className="pill-icon" />
                <span>CORE PILLARS</span>
              </div>
              <h2 className="about-section-heading">How We Engineer Compounding Results</h2>
            </div>

            <div className="about-pillars-grid">
              <div className="about-pillar-box">
                <div className="pillar-icon-box">
                  <Target size={24} />
                </div>
                <h3 className="pillar-title">1. Precision Audience Targeting</h3>
                <p className="pillar-paragraph">
                  We don't guess demographics. We leverage deep market research, competitor search trends, and first-party data to position
                  your solution right in front of high-intent buyers who are ready to purchase.
                </p>
                <ul className="pillar-check-list">
                  <li><CheckCircle2 size={15} /><span>High-intent custom audience clustering</span></li>
                  <li><CheckCircle2 size={15} /><span>Exclusion filters to stop wasted ad spend</span></li>
                  <li><CheckCircle2 size={15} /><span>Lookalike modeling built on highest LTV buyers</span></li>
                </ul>
              </div>

              <div className="about-pillar-box">
                <div className="pillar-icon-box">
                  <Sparkles size={24} />
                </div>
                <h3 className="pillar-title">2. Thumb-Stopping Creative Engine</h3>
                <p className="pillar-paragraph">
                  Attention spans are short. We engineer creative assets designed with instant visual hooks, empathetic problem-framing,
                  and clear action catalysts to win the attention war on social feeds.
                </p>
                <ul className="pillar-check-list">
                  <li><CheckCircle2 size={15} /><span>Iterative 3-second hook testing matrix</span></li>
                  <li><CheckCircle2 size={15} /><span>Dynamic lifestyle &amp; UGC product demonstrations</span></li>
                  <li><CheckCircle2 size={15} /><span>Persuasive direct-response sales copy</span></li>
                </ul>
              </div>

              <div className="about-pillar-box">
                <div className="pillar-icon-box">
                  <Zap size={24} />
                </div>
                <h3 className="pillar-title">3. Conversion Architecture</h3>
                <p className="pillar-paragraph">
                  Clicks without conversions are expensive noise. We craft blistering fast landing pages and high-performing checkout
                  experiences that remove all buying friction and maximize order value.
                </p>
                <ul className="pillar-check-list">
                  <li><CheckCircle2 size={15} /><span>Mobile-first responsive architecture</span></li>
                  <li><CheckCircle2 size={15} /><span>Strategic trust badges &amp; social proof placement</span></li>
                  <li><CheckCircle2 size={15} /><span>A/B tested offers, bundles, and checkout flows</span></li>
                </ul>
              </div>

              <div className="about-pillar-box">
                <div className="pillar-icon-box">
                  <BarChart3 size={24} />
                </div>
                <h3 className="pillar-title">4. Compounding Attribution &amp; Scale</h3>
                <p className="pillar-paragraph">
                  Scaling requires confident budget allocation. We track customer lifecycles across channels, allowing us to safely
                  increase ad spend while maintaining profitability and protecting margins.
                </p>
                <ul className="pillar-check-list">
                  <li><CheckCircle2 size={15} /><span>Server-side tracking (CAPI) &amp; GA4 setup</span></li>
                  <li><CheckCircle2 size={15} /><span>Weekly transparent ROAS &amp; CPA accountability</span></li>
                  <li><CheckCircle2 size={15} /><span>Predictable horizontal and vertical budget scale</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Karya Values & Promises */}
        <section className="about-content-section about-values-bg" id="values">
          <div className="about-section-container">
            <div className="about-section-header text-center">
              <div className="about-pill-label mx-auto">
                <ShieldCheck size={14} className="pill-icon" />
                <span>OUR COMMITMENT</span>
              </div>
              <h2 className="about-section-heading">The Karya Guarantee</h2>
              <p className="about-section-subtext mx-auto">
                No long-term locks, no vanity smoke screens. Only measurable revenue and honest partnership.
              </p>
            </div>

            <div className="about-guarantee-row">
              <div className="guarantee-card">
                <TrendingUp size={28} className="guarantee-icon" />
                <h4>Revenue Over Reach</h4>
                <p>We measure our success exclusively by your sales, qualified leads, and profitable growth.</p>
              </div>

              <div className="guarantee-card">
                <ShieldCheck size={28} className="guarantee-icon" />
                <h4>Zero Lock-In Contracts</h4>
                <p>We work month-to-month. You stay because our strategy delivers measurable ROI, not because of legal ties.</p>
              </div>

              <div className="guarantee-card">
                <Users size={28} className="guarantee-icon" />
                <h4>Senior Direct Access</h4>
                <p>You collaborate directly with experienced growth strategists, never handed off to junior interns.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Same CTA Section as in Home.jsx */}
      <CtaSection onOpenQueryModal={onOpenQueryModal} />
    </main>
  );
};

export default About;

