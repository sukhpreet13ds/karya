import React, { useEffect } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

const Terms = () => {
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
            <span>TERMS OF SERVICE</span>
          </div>
          <h1 className="legal-page-title">Terms &amp; Conditions</h1>
          <p className="legal-meta-text">
            Effective Date: November 2026 &bull; Last Updated: November 2026
          </p>
        </header>

        {/* Clean, readable text content */}
        <article className="legal-content-body">
          <section className="legal-section">
            <h2 className="legal-section-title">1. Agreement to Terms</h2>
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client", "you") and
              <strong> Karya Marketing</strong> ("we", "us", or "our"), governing your access to and use of our website,
              consulting engagements, and digital marketing services.
            </p>
            <p>
              By engaging our services or submitting a query through our website, you confirm that you have read, understood,
              and agree to be bound by these Terms.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">2. Scope of Services</h2>
            <p>
              Karya Marketing provides performance marketing, organic growth (SEO), marketplace management, and full-stack web
              development. The specific deliverables, milestones, and commercial terms of each client engagement are detailed in
              individual proposals or service agreements.
            </p>
            <ul className="legal-bullet-list">
              <li>
                <CheckCircle2 size={16} className="legal-check-icon" />
                <span>All campaign strategies and technical builds are executed with professional care and industry standard best practices.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="legal-check-icon" />
                <span>We provide month-to-month flexibility without restrictive lock-in contracts unless explicitly agreed in a customized enterprise tier.</span>
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">3. Client Responsibilities &amp; Approvals</h2>
            <p>To ensure effective delivery and campaign timelines, the Client agrees to:</p>
            <ul className="legal-bullet-list">
              <li>
                <CheckCircle2 size={16} className="legal-check-icon" />
                <span>Provide timely access to ad accounts, websites, analytics portals, and brand creative assets.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="legal-check-icon" />
                <span>Ensure that all brand materials and claims submitted do not violate third-party trademarks, copyrights, or advertising policies.</span>
              </li>
              <li>
                <CheckCircle2 size={16} className="legal-check-icon" />
                <span>Review and provide feedback or approvals on campaigns, creative drafts, and copy in a timely manner.</span>
              </li>
            </ul>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">4. Fees, Invoicing &amp; Ad Spend</h2>
            <p>
              Service fees are billed according to the agreed proposal. Direct advertising budgets (paid to platforms such as Meta,
              Google, or Amazon) are separate from our agency retainer fees and are paid directly by the Client to the respective ad networks.
            </p>
            <p>
              Invoices are payable within the timeframe specified on the invoice. Unpaid balances may result in the temporary pause of active campaign management.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">5. Intellectual Property</h2>
            <p>
              Upon full settlement of all applicable fees, the Client retains ownership of custom creative deliverables, copy, and website code
              developed specifically for their project. Karya Marketing retains the right to reference non-confidential project metrics and
              creative work in our portfolio and case studies, unless a separate Non-Disclosure Agreement (NDA) specifies otherwise.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">6. Confidentiality</h2>
            <p>
              Both parties agree to hold all non-public commercial data, proprietary methodologies, customer lists, and financial figures in
              strict confidence and will not disclose such data to any third party without prior written authorization.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">7. Limitation of Liability</h2>
            <p>
              Digital marketing performance involves third-party algorithms, consumer market dynamics, and competitive bid volatility.
              While Karya Marketing applies expert data-driven methodologies, we do not provide absolute guarantees of specific revenue numbers.
              To the maximum extent permitted by applicable law, our aggregate liability for any claims arising from an engagement shall not
              exceed the total agency fees paid by the Client to Karya Marketing in the three (3) months preceding the claim.
            </p>
          </section>

          <section className="legal-section">
            <h2 className="legal-section-title">8. Termination &amp; Cancellation</h2>
            <p>
              Either party may terminate a monthly service engagement by providing standard written notice as outlined in the active service agreement.
              Upon termination, all active campaigns will be smoothly handed over or paused per the Client's instructions.
            </p>
          </section>

          <section className="legal-section legal-contact-card">
            <h2 className="legal-section-title">9. Inquiries &amp; Legal Notices</h2>
            <p>For any questions or legal inquiries regarding these Terms, please contact:</p>
            <div className="legal-contact-details">
              <p><strong>Karya Marketing</strong></p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-teal" />
                <a href="mailto:teamkaryamarketing@gmail.com" className="legal-link">teamkaryamarketing@gmail.com</a>
              </p>
              <p>Available Globally &bull; Headquartered in India</p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
};

export default Terms;

