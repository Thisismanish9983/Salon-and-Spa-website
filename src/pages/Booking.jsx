import React from 'react';
import { Sparkles, ShieldCheck, Clock, Award, Info } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import AppointmentForm from '../components/AppointmentForm';

const Booking = () => {
  return (
    <div className="booking-page">
      {/* Hero Header */}
      <section className="service-details-hero" style={{ textAlign: 'center' }}>
        <div className="container">
          <span className="section-eyebrow">Online Concierge</span>
          <h1 style={{ marginBottom: '16px' }}>Reserve Your Ritual</h1>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto' }}>
            Select your preferred treatment, designate your artist, and schedule your private sanctuary escape.
          </p>
        </div>
      </section>

      {/* Main Booking Interface */}
      <section className="section section-bg-white">
        <div className="container">
          {/* Booking Component */}
          <AppointmentForm />

          {/* Guest Preparation Tips */}
          <div style={{
            marginTop: '80px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            <div style={{
              backgroundColor: 'var(--color-warm-ivory)',
              padding: '28px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border-subtle)'
            }}>
              <Clock size={24} color="var(--color-champagne-gold)" style={{ marginBottom: '12px' }} />
              <h4 style={{ marginBottom: '8px' }}>Early Arrival</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-muted-text)' }}>
                Please arrive 15 minutes prior to unwind in our Serenity Tea Lounge and complete your personalized skin & hair diagnostic.
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--color-warm-ivory)',
              padding: '28px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border-subtle)'
            }}>
              <ShieldCheck size={24} color="var(--color-champagne-gold)" style={{ marginBottom: '12px' }} />
              <h4 style={{ marginBottom: '8px' }}>Sanctuary Protocol</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-muted-text)' }}>
                Complimentary cancellations or rescheduling are honored up to 24 hours prior to your scheduled reservation time.
              </p>
            </div>

            <div style={{
              backgroundColor: 'var(--color-warm-ivory)',
              padding: '28px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border-subtle)'
            }}>
              <Sparkles size={24} color="var(--color-champagne-gold)" style={{ marginBottom: '12px' }} />
              <h4 style={{ marginBottom: '8px' }}>Sensory Comfort</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-muted-text)' }}>
                Every reservation includes chilled champagne, artisanal macarons, warm botanical foot soaks, and heated massage bed suites.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
