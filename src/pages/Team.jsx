import React from 'react';
import { Instagram, Linkedin, Twitter, Sparkles, Calendar, Award } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { TEAM_MEMBERS } from '../data/teamData';

const Team = () => {
  return (
    <div className="team-page">
      {/* Hero Header */}
      <section className="service-details-hero" style={{ textAlign: 'center' }}>
        <div className="container">
          <span className="section-eyebrow">The Master Artisans</span>
          <h1 style={{ marginBottom: '16px' }}>Meet Our Creative Team</h1>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto' }}>
            Visionary stylists, color chemists, and aesthetic therapists with decades of international European academy training and high-fashion editorial credentials.
          </p>
        </div>
      </section>

      {/* Team Cards Grid */}
      <section className="section section-bg-white">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
            gap: '36px'
          }}>
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} className="team-img" />
                  <div className="team-social-overlay">
                    <a href={member.socials.instagram} target="_blank" rel="noreferrer" className="team-social-link" aria-label="Instagram">
                      <Instagram size={18} />
                    </a>
                    <a href={member.socials.linkedin} target="_blank" rel="noreferrer" className="team-social-link" aria-label="LinkedIn">
                      <Linkedin size={18} />
                    </a>
                    <a href={member.socials.twitter} target="_blank" rel="noreferrer" className="team-social-link" aria-label="Twitter">
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>

                <div className="team-body">
                  <h3 className="team-name">{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <div className="team-experience">{member.experience}</div>
                  <p className="team-bio">{member.bio}</p>

                  <div style={{ marginBottom: '18px' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-deep-brown)', display: 'block', marginBottom: '8px' }}>
                      Core Specialties:
                    </span>
                    <div className="team-specialties">
                      {member.specialties.map((spec, i) => (
                        <span key={i} className="team-specialty-tag">{spec}</span>
                      ))}
                    </div>
                  </div>

                  <Button
                    to="/contact"
                    variant="outline"
                    size="sm"
                    style={{ width: '100%' }}
                    icon={Calendar}
                  >
                    Reserve with {member.name.split(' ')[0]}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Masterclass Training Banner */}
          <div className="academy-banner-card">
            <div>
              <span className="section-eyebrow">Excellence in Continuing Artistry</span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '14px' }}>The LuxeAura Academy Standard</h2>
              <p style={{ color: 'var(--color-muted-text)', lineHeight: 1.8 }}>
                Every master artisan at LuxeAura is required to complete quarterly sabbaticals in Paris, London, or Tokyo, mastering emerging bond-repair chemistry, sculptural dry cuts, and micro-needling lymphatic innovations.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <Award size={24} color="var(--color-champagne-gold)" />
                <span style={{ fontWeight: 600 }}>Vidal Sassoon & Toni&Guy Certified Master Cutters</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <Sparkles size={24} color="var(--color-champagne-gold)" />
                <span style={{ fontWeight: 600 }}>Swiss CIDESCO Aesthetic & Dermal Accreditations</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <Award size={24} color="var(--color-champagne-gold)" />
                <span style={{ fontWeight: 600 }}>Wat Pho Traditional Thai Bodywork Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
