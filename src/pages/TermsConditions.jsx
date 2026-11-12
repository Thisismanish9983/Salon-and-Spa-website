import React from 'react';
import { FileCheck, Clock, ShieldAlert, Award } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const TermsConditions = () => {
  return (
    <div className="terms-page">
      <section className="service-details-hero" style={{ textAlign: 'center' }}>
        <div className="container">
          <span className="section-eyebrow">Sanctuary Guidelines</span>
          <h1 style={{ marginBottom: '16px' }}>Terms & Conditions</h1>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto' }}>
            To preserve the serene ambiance and seamless hospitality of LuxeAura, we invite all guests to review our sanctuary guidelines.
          </p>
        </div>
      </section>

      <section className="section section-bg-white">
        <div className="container-narrow">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', lineHeight: 1.8, color: 'var(--color-muted-text)' }}>
            <div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-deep-brown)', marginBottom: '12px' }}>
                1. Reservation & Arrival Etiquette
              </h3>
              <p>
                To fully enjoy your sanctuary experience, we recommend arriving 15 minutes prior to your scheduled time. This ensures ample time to unwind in our Serenity Lounge and enjoy a welcoming herbal infusion or champagne. In the event of late arrival, your service time may be adjusted to avoid delaying subsequent guests.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-deep-brown)', marginBottom: '12px' }}>
                2. Cancellation & Rescheduling Courtesy
              </h3>
              <p>
                Our master stylists and therapists reserve private suites exclusively for your appointed time. We kindly ask for at least <strong>24 hours notice</strong> should you need to cancel or adjust your appointment. For bridal parties or multi-service packages exceeding 3 hours, a 48-hour notice is appreciated.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-deep-brown)', marginBottom: '12px' }}>
                3. Health, Allergies & Sensitivities
              </h3>
              <p>
                Your safety is paramount. Please notify your aesthetician or stylist prior to treatment regarding any existing medical conditions, pregnancy, recent cosmetic procedures, or known ingredient allergies. Our specialists will customize all botanical elixirs to honor your biological needs.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-deep-brown)', marginBottom: '12px' }}>
                4. Sanctuary Atmosphere
              </h3>
              <p>
                LuxeAura is conceived as a tranquil refuge from urban noise. We kindly ask that mobile devices be set to silent or vibration mode throughout the salon and spa suites.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--color-deep-brown)', marginBottom: '12px' }}>
                5. Gift Vouchers & Package Credits
              </h3>
              <p>
                LuxeAura gift cards and signature package certificates are fully transferable and valid for 12 months from the date of issue. Vouchers are non-refundable and may be redeemed for any aesthetic service, retail product, or ritual upgrade.
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
                For inquiries regarding group reservations, bridal contracts, or policy clarifications, please contact our concierge team at <a href="mailto:contact@luxeaura.com" style={{ color: 'var(--color-champagne-gold)', fontWeight: 600 }}>contact@luxeaura.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
