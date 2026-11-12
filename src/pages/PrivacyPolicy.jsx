import React from 'react';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-page">
      <section className="service-details-hero" style={{ textAlign: 'center' }}>
        <div className="container">
          <span className="section-eyebrow">Client Confidentiality</span>
          <h1 style={{ marginBottom: '16px' }}>Privacy Policy</h1>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto' }}>
            Your privacy, personal preferences, and health information are safeguarded with the highest standards of discretion and security.
          </p>
        </div>
      </section>

      <section className="section section-bg-white">
        <div className="container-narrow">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', lineHeight: 1.8, color: 'var(--color-muted-text)' }}>
            <div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-deep-brown)', marginBottom: '12px' }}>
                1. Information We Collect
              </h3>
              <p>
                When you schedule an appointment, reserve a package, or consult with our aesthetic specialists, we collect relevant information necessary to provide safe and personalized treatments:
              </p>
              <ul style={{ paddingLeft: '24px', marginTop: '10px' }}>
                <li>Contact coordinates (Full name, telephone number, email address).</li>
                <li>Appointment history, specialist designations, and service preferences.</li>
                <li>Voluntary wellness details, including skin sensitivities, cosmetic allergies, and dietary preferences for refreshment service.</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-deep-brown)', marginBottom: '12px' }}>
                2. How Your Information is Utilized
              </h3>
              <p>
                We strictly utilize your data to facilitate your salon and spa experience:
              </p>
              <ul style={{ paddingLeft: '24px', marginTop: '10px' }}>
                <li>Confirming, rescheduling, and sending courtesy reminders for your reservations.</li>
                <li>Customizing dermal and hair formulations suited to your biological profile.</li>
                <li>Delivering private invitations to seasonal events and VIP offerings (opt-out available at any time).</li>
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-deep-brown)', marginBottom: '12px' }}>
                3. Confidentiality & Non-Disclosure
              </h3>
              <p>
                LuxeAura does not sell, rent, lease, or monetize client data to third parties under any circumstances. All client consultation cards and skin diagnostics are securely encrypted and accessible solely by your designated therapist and attending concierge.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-deep-brown)', marginBottom: '12px' }}>
                4. Your Rights & Preferences
              </h3>
              <p>
                You retain the right to inspect, correct, or request the deletion of your personal records at any point. Simply notify our concierge desk at <strong style={{ color: 'var(--color-deep-brown)' }}>contact@luxeaura.com</strong> or speak directly with our sanctuary manager during your visit.
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--color-warm-ivory)',
              padding: '24px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border-subtle)',
              marginTop: '16px'
            }}>
              <p style={{ fontSize: '0.9rem', margin: 0 }}>
                <strong>Last Updated:</strong> January 2026. For questions regarding our privacy practices, please contact our concierge team at <a href="mailto:contact@luxeaura.com" style={{ color: 'var(--color-champagne-gold)', fontWeight: 600 }}>contact@luxeaura.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
