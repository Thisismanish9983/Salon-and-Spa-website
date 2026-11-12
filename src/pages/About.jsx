import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Calendar,
  Leaf,
  Award,
  HeartHandshake,
  ShieldCheck,
  CheckCircle,
  Clock,
  Compass
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const About = () => {
  return (
    <div className="about-page">
      {/* Header Banner */}
      <section className="service-details-hero" style={{ textAlign: 'center' }}>
        <div className="container">
          <span className="section-eyebrow">Our Heritage & Craft</span>
          <h1 style={{ marginBottom: '18px' }}>The LuxeAura Legacy</h1>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto' }}>
            Where timeless European salon traditions merge with mindful organic wellness, creating an unprecedented sanctuary for self-care.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section section-bg-white">
        <div className="container">
          <div className="about-split">
            <div className="about-images-composition">
              <img
                src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1000&q=80"
                alt="LuxeAura Sanctuary"
                className="about-img-primary"
              />
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
                alt="Spa Sanctuary Room"
                className="about-img-secondary"
              />
            </div>

            <div>
              <span className="section-eyebrow">Est. 2012 • Beverly Hills</span>
              <h2 style={{ marginBottom: '20px' }}>Born from a Passion for Unhurried Beauty</h2>
              <p style={{ marginBottom: '16px' }}>
                LuxeAura was born out of a desire to redefine the modern salon and spa experience. In an era where appointments often feel transactional and hurried, our founders envisioned an opulent, unhurried sanctuary where every visit unfolds as a sensory journey.
              </p>
              <p style={{ marginBottom: '24px' }}>
                Nestled in an acoustic-damped architectural space adorned in Italian marble, champagne brass, and soft travertine, LuxeAura offers a calming retreat from the urban bustle. Here, every service begins with a warm botanical sensory rinse and in-depth personal diagnostic.
              </p>

              <div style={{
                backgroundColor: 'var(--color-warm-ivory)',
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                borderLeft: '4px solid var(--color-champagne-gold)',
                marginBottom: '28px'
              }}>
                <p style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-deep-brown)', marginBottom: '8px' }}>
                  &ldquo;True elegance is not about perfection, but about the profound serenity you carry back into the world when you leave our sanctuary doors.&rdquo;
                </p>
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-champagne-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  — Elena Vance, Founder & Creative Director
                </span>
              </div>

              <Button to="/contact" variant="primary" icon={Calendar}>
                Reserve Your Experience
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Excellence */}
      <section className="section section-bg-beige">
        <div className="container">
          <SectionHeader
            eyebrow="Our Sacred Standard"
            title="The Four Cornerstones of LuxeAura"
            subtitle="Everything we craft is anchored in an unwavering commitment to biological safety, artisan mastery, and bespoke serenity."
          />

          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-box-icon">
                <Leaf size={28} />
              </div>
              <h3 className="feature-box-title">Botanical Purity</h3>
              <p className="feature-box-desc">
                We stringently ban parabens, sulfates, formaldehyde, and phthalates. All our formulations are biologically compatible, cruelty-free, and enriched with wild-harvested plant extracts.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-box-icon">
                <Award size={28} />
              </div>
              <h3 className="feature-box-title">Artisan Mastery</h3>
              <p className="feature-box-desc">
                Our master stylists and dermal aestheticians complete at least 200 hours of continuous European and Japanese masterclass education annually to refine their techniques.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-box-icon">
                <HeartHandshake size={28} />
              </div>
              <h3 className="feature-box-title">Acoustic Serenity</h3>
              <p className="feature-box-desc">
                Our treatment suites are soundproofed and feature ambient chromotherapy, soft organic cotton robes, and personalized musical landscapes tailored to your brainwave relaxation.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-box-icon">
                <ShieldCheck size={28} />
              </div>
              <h3 className="feature-box-title">Sanctuary Hygiene</h3>
              <p className="feature-box-desc">
                Exceeding hospital-level sanitation standards with hospital autoclave sterilization, air HEPA carbon filters, and completely single-use biodegradable nail files and buffers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="section section-bg-dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '36px'
          }}>
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', color: 'var(--color-champagne-gold)', fontWeight: 600 }}>14+</div>
              <div style={{ color: '#dfdad5', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', marginTop: '6px' }}>Years in Operation</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', color: 'var(--color-champagne-gold)', fontWeight: 600 }}>18,400+</div>
              <div style={{ color: '#dfdad5', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', marginTop: '6px' }}>Sanctuary Guests</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', color: 'var(--color-champagne-gold)', fontWeight: 600 }}>45+</div>
              <div style={{ color: '#dfdad5', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', marginTop: '6px' }}>Artisan Awards</div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', color: 'var(--color-champagne-gold)', fontWeight: 600 }}>100%</div>
              <div style={{ color: '#dfdad5', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', marginTop: '6px' }}>Clean Beauty Commitment</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="section section-bg-white" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <span className="section-eyebrow">Experience The Magic</span>
          <h2 style={{ marginBottom: '18px' }}>Ready to Begin Your Transformation?</h2>
          <p style={{ color: 'var(--color-muted-text)', marginBottom: '32px' }}>
            Whether you desire a subtle balayage gloss or a full-day royal spa package, we invite you to experience the LuxeAura sanctuary difference.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <Button to="/contact" variant="primary" size="lg" icon={Calendar}>
              Reserve an Appointment
            </Button>
            <Button to="/team" variant="outline" size="lg">
              Meet Our Specialists
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
