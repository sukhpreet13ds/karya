import React, { useEffect } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="legal-page-main">
      <div className="legal-page-container">
        {/* Simple top heading with subtle theme color gesture */}
        <header className="legal-header-block">
          <div className="legal-theme-pill">
            <span className="legal-dot"></span>
            <span>PRIVACY &amp; DATA PROTECTION</span>
          </div>
          <h1 className="legal-page-title">Privacy Policy</h1>
          <p className="legal-meta-text">
            Effective Date: November 2026 &bull; Last Updated: November 2026
          </p>
        </header>

        {/* Clean, readable text content */}
        <article className="legal-content-body">
          <section className="legal-section">
            <h2 className="legal-section-title">1. Introduction</h2>
            <p>
              At <strong>Karya Marketing</strong> ("we", "our", or "us"), we respect your privacy and are committed to
              protecting the personal information you share with us. This Privacy Policy describes how we collect, use,
              disclose, and safeguard your information when you visit our website, use our digital services, or communicate with our team.
            </p>
            <p>
              By accessing or using our website and services, you consent to the practices described in this policy. If you do not
              agree with any terms of this policy, please do not use our services.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways:</p>
            <ul className="legal-bullet-list">
              <li>
                <CheckCircle2 size={16} className="legal-check-icon" />
                <span><strong>Personal Identification:</strong> Name, business name, email address, phone number, and WhatsApp number submitted via enquiry forms.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="legal-check-icon" />
                <span><strong>Project &amp; Business Data:</strong> Information you share regarding your marketing goals, website URLs, ad accounts, and target audiences.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="legal-check-icon" />
                <span><strong>Technical &amp; Log Information:</strong> IP address, browser type, operating system, pages visited, time spent, and referring links collected automatically through standard web server logs.</span>
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">3. How We Use Your Information</h2>
            <p>We utilize the collected information strictly for legitimate business and client service purposes, including:</p>
            <ul className="legal-bullet-list">
              <li>
                <CheckCircle2 size={16} className="legal-check-icon" />
                <span>Delivering, optimizing, and executing customized digital marketing and website strategies.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="legal-check-icon" />
                <span>Responding promptly to your consultation requests, messages, and proposal queries.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="legal-check-icon" />
                <span>Sending project updates, campaign reporting dashboards, and performance metrics.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="legal-check-icon" />
                <span>Improving website usability, load speeds, and technical performance.</span>
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">4. Data Sharing &amp; Third Parties</h2>
            <p>
              We <strong>do not sell, rent, or trade</strong> your personal information to third parties for marketing purposes.
              We may share information only under the following limited conditions:
            </p>
            <ul className="legal-bullet-list">
              <li>
                <CheckCircle2 size={16} className="legal-check-icon" />
                <span><strong>Service Providers:</strong> Trusted third-party cloud hosting, analytics, and CRM tools that assist us in operating our business under strict confidentiality agreements.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="legal-check-icon" />
                <span><strong>Legal Compliance:</strong> When required by law, subpoena, or governmental request to protect our legal rights, property, and user safety.</span>
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">5. Cookies &amp; Tracking Technologies</h2>
            <p>
              Our website may use standard cookies, pixels, and tracking tags to analyze user behavior, measure marketing effectiveness,
              and remember your preferences. You have the right to disable cookies in your web browser settings; however, certain site features
              may function with reduced performance.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">6. Data Security</h2>
            <p>
              We implement industry-standard administrative, technical, and physical safeguards to protect your personal data against unauthorized
              access, alteration, or disclosure. While no electronic transmission is 100% immune to risk, we continually update our security protocols.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">7. Your Privacy Rights</h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections, or ask for the deletion
              of your contact information from our records. To exercise these rights, simply email us at <strong>hello@karyamarketing.com</strong>.
            </p>
          </section>

          <section className="legal-section legal-contact-card">
            <h2 className="legal-section-title">8. Contact Us</h2>
            <p>If you have any questions or concerns regarding this Privacy Policy, please reach out to us:</p>
            <div className="legal-contact-details">
              <p><strong>Karya Marketing</strong></p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-teal" />
                <a href="mailto:hello@karyamarketing.com" className="legal-link">hello@karyamarketing.com</a>
              </p>
              <p>Available Globally &bull; Headquartered in India</p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
};

export default Privacy;
