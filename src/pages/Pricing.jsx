import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Check, Sparkles, Calendar, ShieldCheck, Heart } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { PACKAGES_DATA } from '../data/packagesData';

const ADD_ONS = [
  { name: 'K18 Molecular Biomimetic Peptide Shield', price: 45, duration: '15 mins', desc: 'Repairs polypeptide chains inside damaged keratin fibers.' },
  { name: 'Cryo-Globe Lymphatic Facial De-puff', price: 35, duration: '15 mins', desc: 'Cools capillaries, relieves tension, and sculpts cheekbones.' },
  { name: 'Warm Jade Stone Scalp Decompression', price: 40, duration: '20 mins', desc: 'Warm jade gua sha release across occipital meridian points.' },
  { name: 'Pure 24K Gold Eye & Lip Hydro-Patch', price: 30, duration: '15 mins', desc: 'Intensive smoothing of fine expression lines with colloidal gold.' },
  { name: 'Bulgarian Rose Paraffin Hand Cocoon', price: 35, duration: '20 mins', desc: 'Deep warm botanical wax infusion restoring silky epidermal softness.' }
];

const Pricing = () => {
  return (
    <div className="pricing-page">
      {/* Hero Header */}
      <section className="service-details-hero" style={{ textAlign: 'center' }}>
        <div className="container">
          <span className="section-eyebrow">Transparent Luxury Investments</span>
          <h1 style={{ marginBottom: '16px' }}>Curated Packages & Pricing</h1>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto' }}>
            Elevate your personal retreat with multi-service immersive journeys designed to harmonize beauty, rejuvenation, and tranquility.
          </p>
        </div>
      </section>

      {/* Main Packages Grid */}
      <section className="section section-bg-white">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            marginBottom: '72px'
          }}>
            {PACKAGES_DATA.map((pkg) => (
              <div key={pkg.id} className={`package-card ${pkg.featured ? 'featured' : ''}`}>
                {pkg.badge && <span className="package-badge">{pkg.badge}</span>}

                <div className="package-header">
                  <h3 className="package-name">{pkg.name}</h3>
                  <div className="package-tagline">{pkg.tagline}</div>

                  <div className="package-pricing">
                    <span className="package-currency">$</span>
                    <span className="package-amount">{pkg.price}</span>
                    <span className="package-original-price">${pkg.originalPrice}</span>
                  </div>

                  <div className="package-duration-pill">
                    <Clock size={14} />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <p className="package-desc">{pkg.description}</p>

                <div className="package-features-title">Included Rituals:</div>
                <ul className="package-features-list">
                  {pkg.includedServices.map((serviceName, idx) => (
                    <li key={idx} className="package-feature-item">
                      <Check size={16} />
                      <span>{serviceName}</span>
                    </li>
                  ))}
                </ul>

                <div className="package-perks-box">
                  <div className="package-perks-title">Complimentary Perks:</div>
                  {pkg.perks.map((perk, idx) => (
                    <div key={idx} className="package-perk-item">
                      <Sparkles size={13} color="var(--color-champagne-gold)" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                <div className="package-cta">
                  <Button
                    to={`/booking?package=${pkg.id}`}
                    variant={pkg.featured ? 'primary' : 'secondary'}
                    style={{ width: '100%' }}
                    icon={Calendar}
                  >
                    Reserve This Package
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Add-ons Menu */}
          <div style={{
            backgroundColor: 'var(--color-warm-ivory)',
            borderRadius: 'var(--radius-lg)',
            padding: '56px 40px',
            border: '1px solid var(--color-border-gold)'
          }}>
            <SectionHeader
              eyebrow="Bespoke Enhancements"
              title="Ritual Add-Ons & Boosters"
              subtitle="Upgrade any signature service or package with our rapid-infusion therapeutic booster therapies."
            />

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}>
              {ADD_ONS.map((addon, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: 'var(--color-white)',
                    padding: '24px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '1.15rem' }}>{addon.name}</h4>
                    <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-champagne-gold)' }}>
                      +${addon.price}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-muted-text)', marginBottom: '12px' }}>
                    {addon.desc}
                  </p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-light-text)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} /> {addon.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bridal & Private Events Consultation */}
          <div style={{
            marginTop: '64px',
            textAlign: 'center',
            padding: '48px',
            backgroundColor: 'var(--color-soft-beige)',
            borderRadius: 'var(--radius-md)'
          }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '12px' }}>Planning a Bridal Party or Private Sanctuary Buyout?</h3>
            <p style={{ maxWidth: '640px', margin: '0 auto 28px auto', color: 'var(--color-muted-text)' }}>
              Our private suite accommodates bridal parties, anniversary gatherings, and corporate retreats with bespoke champagne service, artisanal catering, and dedicated master stylists.
            </p>
            <Button to="/contact" variant="primary" size="lg">
              Contact Event Concierge
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
