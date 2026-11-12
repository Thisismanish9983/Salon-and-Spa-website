import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Calendar,
  ArrowRight,
  ShieldCheck,
  Award,
  Leaf,
  HeartHandshake,
  Clock,
  Star,
  Check,
  Instagram
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import TestimonialSlider from '../components/TestimonialSlider';
import NewsletterForm from '../components/NewsletterForm';
import { SERVICES_DATA } from '../data/servicesData';
import { PACKAGES_DATA } from '../data/packagesData';
import { TEAM_MEMBERS } from '../data/teamData';
import { GALLERY_ITEMS } from '../data/galleryData';

const Home = () => {
  const featuredServices = SERVICES_DATA.slice(0, 6);
  const previewTeam = TEAM_MEMBERS.slice(0, 4);
  const previewGallery = GALLERY_ITEMS.slice(0, 6);

  return (
    <div className="home-page">
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <Sparkles size={14} color="var(--color-champagne-gold)" />
                <span>Haute Coiffure & Luxury Spa</span>
              </div>

              <h1 className="hero-title">
                Where Beauty <br />
                Meets <span>Relaxation</span>
              </h1>

              <p className="hero-description">
                Immerse yourself in a sanctuary of bespoke aesthetic artistry and restorative spa rituals.
                From precision French balayage to 24K gold facial infusions, elevate your radiance with our master artisans.
              </p>

              <div className="hero-cta-group">
                <Button to="/booking" variant="primary" size="lg" icon={Calendar}>
                  Book Appointment
                </Button>
                <Button to="/services" variant="outline" size="lg" icon={ArrowRight}>
                  Explore Services
                </Button>
              </div>

              <div className="hero-stats">
                <div>
                  <div className="stat-item-num">14+</div>
                  <div className="stat-item-label">Years of Artistry</div>
                </div>
                <div>
                  <div className="stat-item-num">18k+</div>
                  <div className="stat-item-label">Guests Pampered</div>
                </div>
                <div>
                  <div className="stat-item-num">99%</div>
                  <div className="stat-item-label">Client Approval</div>
                </div>
              </div>
            </div>

            {/* Hero Image Composition */}
            <div className="hero-media-wrapper">
              <div className="hero-main-img-card">
                <img
                  src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=80"
                  alt="LuxeAura Salon Experience"
                  className="hero-main-img"
                />
              </div>

              <div className="hero-floating-badge">
                <div className="hero-badge-icon">
                  <Star size={24} fill="var(--color-champagne-gold)" />
                </div>
                <div>
                  <div className="hero-badge-text">Voted #1 Luxury Salon</div>
                  <div className="hero-badge-sub">Beverly Hills & California Guide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED SERVICES SECTION */}
      <section className="section section-bg-white">
        <div className="container">
          <SectionHeader
            eyebrow="Our Signature Craft"
            title="Signature Rituals & Services"
            subtitle="Indulge in expertly sculpted hair designs, clinical-grade dermal rejuvenation, and deeply restorative holistic spa therapies."
          />

          <div className="services-grid-home">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Button to="/services" variant="secondary" size="lg" icon={ArrowRight}>
              View All 8 Service Categories
            </Button>
          </div>
        </div>
      </section>

      {/* 3. ABOUT THE SALON SECTION */}
      <section className="section section-bg-ivory">
        <div className="container">
          <div className="about-split">
            <div className="about-images-composition">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80"
                alt="LuxeAura Styling Ritual"
                className="about-img-primary"
              />
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
                alt="Spa Sanctuary Interior"
                className="about-img-secondary"
              />
            </div>

            <div>
              <SectionHeader
                eyebrow="The LuxeAura Philosophy"
                title="A Tranquil Haven Dedicated to Your Elegance"
                subtitle="Founded on the belief that beauty rituals should be deeply restorative rather than rushed, LuxeAura combines old-world European techniques with modern clean clinical science."
                align="left"
              />

              <div className="about-pillars-grid">
                <div className="pillar-item">
                  <div className="pillar-icon-box">
                    <Leaf size={22} />
                  </div>
                  <div>
                    <h4 className="pillar-title">Botanical Purity</h4>
                    <p className="pillar-desc">Only certified organic, non-toxic, and cruelty-free elixirs touch your skin and hair.</p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon-box">
                    <Award size={22} />
                  </div>
                  <div>
                    <h4 className="pillar-title">Master Artistry</h4>
                    <p className="pillar-desc">Every artist undergoes rigorous European academy certifications and editorial training.</p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon-box">
                    <HeartHandshake size={22} />
                  </div>
                  <div>
                    <h4 className="pillar-title">Bespoke Suites</h4>
                    <p className="pillar-desc">Private acoustic-insulated care chambers with custom temperature and acoustic curation.</p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon-box">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h4 className="pillar-title">Hygienic Sanctuary</h4>
                    <p className="pillar-desc">Hospital-grade autoclave sterilization for all precision tools and implements.</p>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '36px' }}>
                <Button to="/about" variant="primary" icon={ArrowRight}>
                  Discover Our Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="section section-bg-beige">
        <div className="container">
          <SectionHeader
            eyebrow="The Sanctuary Difference"
            title="Why Discerning Guests Choose LuxeAura"
            subtitle="An uncompromising dedication to holistic wellness, elevated sensory hospitality, and visible clinical outcomes."
          />

          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-box-icon">
                <Leaf size={28} />
              </div>
              <h3 className="feature-box-title">Pure Botanicals</h3>
              <p className="feature-box-desc">
                Bio-identical collagen peptides, cold-pressed French botanical oils, and ammonia-free bond-restoring hair colors.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-box-icon">
                <Award size={28} />
              </div>
              <h3 className="feature-box-title">Certified Masters</h3>
              <p className="feature-box-desc">
                Our creative directors bring over a decade of high-fashion runway, Swiss dermatology, and international salon experience.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-box-icon">
                <Sparkles size={28} />
              </div>
              <h3 className="feature-box-title">Private Luxury Suites</h3>
              <p className="feature-box-desc">
                Escape crowded salon floors. Experience your treatment in peaceful individual suites with champagne service.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-box-icon">
                <ShieldCheck size={28} />
              </div>
              <h3 className="feature-box-title">Clinical Hygiene</h3>
              <p className="feature-box-desc">
                Medical-grade sanitation protocols, single-use organic linen, and air purification guarantee your absolute peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. POPULAR TREATMENT PACKAGES */}
      <section className="section section-bg-white">
        <div className="container">
          <SectionHeader
            eyebrow="Curated Experiences"
            title="Popular Treatment Packages"
            subtitle="Carefully paired multi-service journeys designed to provide comprehensive head-to-toe rejuvenation at exceptional value."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
            gap: '30px'
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

                <div className="package-features-title">Included Rituals</div>
                <ul className="package-features-list">
                  {pkg.includedServices.map((serviceName, idx) => (
                    <li key={idx} className="package-feature-item">
                      <Check size={16} />
                      <span>{serviceName}</span>
                    </li>
                  ))}
                </ul>

                <div className="package-perks-box">
                  <div className="package-perks-title">Complimentary Perks</div>
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

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/pricing" style={{ color: 'var(--color-champagne-gold)', fontWeight: 600, textDecoration: 'underline' }}>
              Explore detailed package terms & custom bridal reservations →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. EXPERT BEAUTY PROFESSIONALS PREVIEW */}
      <section className="section section-bg-ivory">
        <div className="container">
          <SectionHeader
            eyebrow="Meet The Artisans"
            title="Expert Beauty Professionals"
            subtitle="Meet our celebrated team of visionary hair stylists, color alchemists, dermal aestheticians, and massage therapists."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(270px, 100%), 1fr))',
            gap: '28px'
          }}>
            {previewTeam.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image-wrapper">
                  <img src={member.image} alt={member.name} className="team-img" loading="lazy" />
                  <div className="team-social-overlay">
                    <a href={member.socials.instagram} target="_blank" rel="noreferrer" className="team-social-link" aria-label="Instagram">
                      <Instagram size={16} />
                    </a>
                  </div>
                </div>
                <div className="team-body">
                  <h3 className="team-name">{member.name}</h3>
                  <div className="team-role">{member.role}</div>
                  <div className="team-experience">{member.experience}</div>
                  <p className="team-bio">{member.bio.slice(0, 95)}...</p>
                  <div className="team-specialties">
                    {member.specialties.map((spec, i) => (
                      <span key={i} className="team-specialty-tag">{spec}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Button to="/team" variant="outline" size="lg" icon={ArrowRight}>
              View All Artists & Credentials
            </Button>
          </div>
        </div>
      </section>

      {/* 7. SPECIAL OFFERS / PROMOTIONAL BANNER */}
      <section className="section" style={{ padding: '0 0 var(--section-padding-y) 0' }}>
        <div className="container">
          <div className="promo-banner">
            <div className="promo-grid">
              <div>
                <span className="promo-eyebrow">First-Time Guest Offer</span>
                <h2 className="promo-title">Enjoy 20% Off Your First Visit</h2>
                <p className="promo-desc">
                  Experience our bespoke hair artistry, facial treatments, or body rituals. Enjoy a 20% privilege on your first reservation.
                </p>
                <div className="promo-actions">
                  <Button to="/booking" variant="primary" size="lg" icon={Calendar}>
                    Book Your Appointment
                  </Button>
                  <Button to="/services" variant="outline-white" size="lg">
                    Browse Services
                  </Button>
                </div>
              </div>

              <div className="promo-badge-box">
                <div className="promo-discount">20% OFF</div>
                <div style={{ fontSize: '1rem', color: '#ded3c9', marginTop: '6px' }}>
                  Applied automatically at checkout
                </div>
                <div className="promo-code-pill">WELCOME20</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. IMAGE GALLERY PREVIEW */}
      <section className="section section-bg-beige">
        <div className="container">
          <SectionHeader
            eyebrow="Our Living Portfolio"
            title="LuxeAura In Pictures"
            subtitle="A glimpse into the luminous transformations, bridal magic, and serene moments crafted daily inside our sanctuary."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
            gap: '24px'
          }}>
            {previewGallery.map((item) => (
              <div key={item.id} className="gallery-item">
                <img src={item.image} alt={item.title} className="gallery-item-img" loading="lazy" />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-badge">{item.categoryLabel}</span>
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <p className="gallery-item-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Button to="/gallery" variant="secondary" size="lg" icon={ArrowRight}>
              Open Full Interactive Lightbox Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* 9. CUSTOMER TESTIMONIALS */}
      <section className="section section-bg-ivory">
        <div className="container">
          <SectionHeader
            eyebrow="Guest Impressions"
            title="Voices of Delight"
            subtitle="Read what editorial tastemakers, brides, and wellness seekers share about their time at LuxeAura."
          />

          <TestimonialSlider />
        </div>
      </section>

      {/* 10. APPOINTMENT BOOKING CTA BANNER */}
      <section className="section section-bg-dark" style={{ textAlign: 'center' }}>
        <div className="container-narrow">
          <span className="section-eyebrow">Your Sanctuary Awaits</span>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', marginBottom: '20px', color: 'var(--color-warm-ivory)' }}>
            Elevate Your Senses & Radiance
          </h2>
          <p style={{ fontSize: '1.15rem', color: '#c9bfb8', marginBottom: '36px', maxWidth: '640px', margin: '0 auto 36px auto' }}>
            Allow our team to craft your personalized sensory escape. Appointments are limited to preserve privacy and personalized tranquility.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Button to="/booking" variant="primary" size="lg" icon={Calendar}>
              Reserve an Appointment
            </Button>
            <Button to="/contact" variant="outline-white" size="lg">
              Contact Concierge Desk
            </Button>
          </div>
        </div>
      </section>

      {/* 11. INSTAGRAM FEED PREVIEW */}
      <section className="section section-bg-white" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <span className="section-eyebrow">Connect With Us</span>
            <h2 style={{ fontSize: '2.2rem' }}>Follow @LuxeAuraSanctuary</h2>
            <p style={{ color: 'var(--color-muted-text)', marginTop: '8px' }}>
              Daily beauty inspiration, masterclass tips, and behind-the-scenes artistry on Instagram.
            </p>
          </div>

          <div className="instagram-strip">
            {GALLERY_ITEMS.slice(0, 6).map((item, idx) => (
              <a
                key={idx}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="instagram-item"
                aria-label="View on Instagram"
              >
                <img src={item.image} alt={item.title} className="instagram-item-img" loading="lazy" />
                <div className="instagram-overlay">
                  <Instagram size={28} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 12. NEWSLETTER SUBSCRIPTION */}
      <section className="section section-bg-ivory">
        <div className="container">
          <div className="newsletter-card">
            <span className="section-eyebrow">The Inner Circle</span>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '14px' }}>Join Our Sanctuary Gazette</h2>
            <p style={{ color: 'var(--color-muted-text)', maxWidth: '520px', margin: '0 auto' }}>
              Receive seasonal ritual previews, masterclass beauty wisdom, and early access to VIP holiday calendar openings.
            </p>
            <NewsletterForm placeholder="Enter your email for private invitations..." />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
