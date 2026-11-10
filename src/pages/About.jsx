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
import mobilesImg from '../assets/mobiles.png';

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
                Marketing Built for Sales, Not Likes.
              </h2>
            </div>

            <div className="about-paragraphs-block">
              <h3 className="about-story-title" style={{ fontSize: '20px', fontWeight: '700', color: 'var(--deep-navy, #001C44)', marginBottom: '14px' }}>
                Our Story
              </h3>
              <p className="about-lead-paragraph">
                We didn't start Karya in a boardroom. We started it after years of watching the same problem repeat.
              </p>
              <p className="about-secondary-paragraph">
                Surya was a Performance Marketing Manager. Kanishtha was a Sales Manager. Working at the same company, we saw brand after brand spend on ads and get little back. They had hired agencies. They had waited. Reports kept coming, full of reach and impressions. Results didn't. Deadlines slipped, and good businesses started losing faith in marketing itself.
              </p>
              <p className="about-secondary-paragraph">
                Meanwhile, we were delivering results for our company's clients every single day. So one day we asked ourselves: if we can do this for them, why not do it directly for the brands who need it most?
              </p>
              <p className="about-secondary-paragraph">
                That's the win-win behind Karya. You get the same experience that big companies pay for, without the extra layers in between. No middlemen, no waiting on a chain of approvals, no paying for overheads that don't grow your business. Just the two people who understand both sides of growth: the marketing that brings in leads, and the sales thinking that turns them into customers.
              </p>
              <p className="about-secondary-paragraph">
                That question became Karya, which means "work" in Hindi. We chose to stay small on purpose. No layers, no handovers to juniors. You talk directly to the people running your campaigns, and every week you see exactly what your money brought back.
              </p>
              <p className="about-secondary-paragraph">
                We're not here to promise you the moon. We're here to do the work, and let the results speak.
              </p>
              <p className="about-secondary-paragraph" style={{ fontWeight: '700', color: 'var(--teal-green, #027F64)', fontSize: '18px', marginTop: '16px' }}>
                Your Growth, Our Karya.
              </p>
            </div>

            {/* Core Check Points */}
            <div className="about-checklist-grid">
              <div className="about-check-card">
                <div className="check-icon-circle">
                  <CheckCircle2 size={20} className="about-check-icon" />
                </div>
                <div className="check-card-text">
                  <h4 className="check-card-title">We Own the Whole Journey</h4>
                  <p className="check-card-desc">
                    From the first ad to the final checkout, we manage every step so no customer slips away in between.
                  </p>
                </div>
              </div>

              <div className="about-check-card">
                <div className="check-icon-circle">
                  <CheckCircle2 size={20} className="about-check-icon" />
                </div>
                <div className="check-card-text">
                  <h4 className="check-card-title">Clear Reports, Every Week</h4>
                  <p className="check-card-desc">
                    No confusing dashboards. You see how many leads came in, what each cost, and what we're doing next.
                  </p>
                </div>
              </div>

              <div className="about-check-card">
                <div className="check-icon-circle">
                  <CheckCircle2 size={20} className="about-check-icon" />
                </div>
                <div className="check-card-text">
                  <h4 className="check-card-title">Fast Pages That Sell</h4>
                  <p className="check-card-desc">
                    Mobile-friendly landing pages and websites that load quickly and turn visitors into buyers.
                  </p>
                </div>
              </div>

              <div className="about-check-card">
                <div className="check-icon-circle">
                  <CheckCircle2 size={20} className="about-check-icon" />
                </div>
                <div className="check-card-text">
                  <h4 className="check-card-title">Always Testing, Always Improving</h4>
                  <p className="check-card-desc">
                    We keep testing ads, offers and pages so your cost per lead keeps going down over time.
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
                <span>THE FOUNDERS</span>
              </div>
              <h2 className="about-section-heading">The Two People Behind Your Growth</h2>
              <p className="about-section-subtext">
                When you work with Karya, you work directly with us. No account managers in between.
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
                  A former Performance Marketing Manager, Surya runs the ads and growth strategy. He plans, launches and scales campaigns across Meta, Google and LinkedIn, with one focus: more leads at a lower cost.
                </p>
                <ul className="founder-points-list">
                  <li>
                    <CheckCircle2 size={16} className="founder-mini-check" />
                    <span>Meta, Google &amp; LinkedIn Ads</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="founder-mini-check" />
                    <span>Tracking, reporting &amp; scaling</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="founder-mini-check" />
                    <span>Landing pages that convert</span>
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
                  A former Sales Manager, Kanishtha knows what makes a customer say yes. She shapes the offers, creatives and messaging that turn clicks into real buyers, and makes sure every client always knows where things stand.
                </p>
                <ul className="founder-points-list">
                  <li>
                    <CheckCircle2 size={16} className="founder-mini-check" />
                    <span>Offers &amp; sales messaging</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="founder-mini-check" />
                    <span>Ad creatives &amp; brand direction</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="founder-mini-check" />
                    <span>Client communication</span>
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
                <span>HOW WE WORK</span>
              </div>
              <h2 className="about-section-heading">Our 4-Step Approach to Growth</h2>
            </div>

            <div className="about-pillars-grid">
              <div className="about-pillar-box">
                <div className="pillar-icon-box">
                  <Target size={24} />
                </div>
                <h3 className="pillar-title">1. Find the Right Buyers</h3>
                <p className="pillar-paragraph">
                  We study your market and competitors to show your ads to people ready to buy, and stop spending on those who aren't.
                </p>
                <ul className="pillar-check-list">
                  <li><CheckCircle2 size={15} /><span>Buyer-focused audiences</span></li>
                  <li><CheckCircle2 size={15} /><span>No wasted ad spend</span></li>
                  <li><CheckCircle2 size={15} /><span>Lookalikes of your best customers</span></li>
                </ul>
              </div>

              <div className="about-pillar-box">
                <div className="pillar-icon-box">
                  <Sparkles size={24} />
                </div>
                <h3 className="pillar-title">2. Make Ads People Stop For</h3>
                <p className="pillar-paragraph">
                  Short attention spans need strong hooks. We create ads that grab attention in the first 3 seconds and give a clear reason to act.
                </p>
                <ul className="pillar-check-list">
                  <li><CheckCircle2 size={15} /><span>Hook testing</span></li>
                  <li><CheckCircle2 size={15} /><span>UGC &amp; product videos</span></li>
                  <li><CheckCircle2 size={15} /><span>Sales-focused ad copy</span></li>
                </ul>
              </div>

              <div className="about-pillar-box">
                <div className="pillar-icon-box">
                  <Zap size={24} />
                </div>
                <h3 className="pillar-title">3. Turn Clicks Into Customers</h3>
                <p className="pillar-paragraph">
                  Traffic means nothing if no one buys. We fix landing pages and checkout so more visitors complete the order.
                </p>
                <ul className="pillar-check-list">
                  <li><CheckCircle2 size={15} /><span>Mobile-first pages</span></li>
                  <li><CheckCircle2 size={15} /><span>Reviews &amp; trust badges</span></li>
                  <li><CheckCircle2 size={15} /><span>Tested offers &amp; bundles</span></li>
                </ul>
              </div>

              <div className="about-pillar-box">
                <div className="pillar-icon-box">
                  <BarChart3 size={24} />
                </div>
                <h3 className="pillar-title">4. Track, Then Scale</h3>
                <p className="pillar-paragraph">
                  We set up proper tracking so we know exactly what's working, then increase spend only where it pays back.
                </p>
                <ul className="pillar-check-list">
                  <li><CheckCircle2 size={15} /><span>Meta CAPI &amp; GA4 setup</span></li>
                  <li><CheckCircle2 size={15} /><span>Weekly ROAS &amp; cost-per-lead reports</span></li>
                  <li><CheckCircle2 size={15} /><span>Safe, steady budget scaling</span></li>
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
      <CtaSection
        onOpenQueryModal={onOpenQueryModal}
        badgeLabel="Free Lead Audit · No Lock-In"
        heading="Work Directly With the Founders"
        description="Tell us about your business and your ads. We'll personally review them and show you where your spend is leaking, before you commit to anything."
        buttonText="Get My Free Lead Audit"
        mobileImage={mobilesImg}
      />
    </main>
  );
};

export default About;

