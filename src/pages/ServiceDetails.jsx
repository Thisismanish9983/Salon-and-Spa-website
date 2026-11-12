import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Clock,
  Sparkles,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  Heart
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = SERVICES_DATA.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="container" style={{ padding: '100px 24px', textAlign: 'center' }}>
        <Sparkles size={48} color="var(--color-champagne-gold)" style={{ marginBottom: '20px' }} />
        <h2>Service Not Found</h2>
        <p style={{ margin: '16px 0 28px 0', color: 'var(--color-muted-text)' }}>
          The requested service ritual does not exist or may have been relocated.
        </p>
        <Button to="/services" variant="primary" icon={ArrowLeft}>
          Back to Services
        </Button>
      </div>
    );
  }

  // Related services (exclude current one)
  const relatedServices = SERVICES_DATA
    .filter((s) => s.id !== service.id && (s.category === service.category || s.featured))
    .slice(0, 3);

  return (
    <div className="service-details-page">
      {/* Breadcrumb & Hero */}
      <section className="service-details-hero">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--color-light-text)', marginBottom: '16px' }}>
            <Link to="/" style={{ color: 'var(--color-deep-brown)' }}>Home</Link>
            <span>/</span>
            <Link to="/services" style={{ color: 'var(--color-deep-brown)' }}>Services</Link>
            <span>/</span>
            <span style={{ color: 'var(--color-champagne-gold)', fontWeight: 600 }}>{service.name}</span>
          </div>

          <div style={{ maxWidth: '800px' }}>
            <span className="section-eyebrow">{service.categoryName}</span>
            <h1 style={{ marginBottom: '16px' }}>{service.name}</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-muted-text)', lineHeight: 1.7 }}>
              {service.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Main Details Layout */}
      <section className="section section-bg-white" style={{ paddingTop: '40px' }}>
        <div className="container">
          <div className="service-details-layout">
            {/* Left Content Column */}
            <div>
              <div className="service-main-image-frame">
                <img src={service.image} alt={service.name} />
              </div>

              {/* Ritual Overview */}
              <div className="service-content-block">
                <h3>The Ritual Experience</h3>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-muted-text)' }}>
                  {service.fullDesc}
                </p>
              </div>

              {/* Four Step Procedure */}
              <div className="service-content-block">
                <h3>Step-by-Step Experience</h3>
                <p style={{ color: 'var(--color-muted-text)', marginBottom: '16px' }}>
                  Every session follows a carefully orchestrated protocol designed to maximize biological efficacy and sensory bliss:
                </p>

                <div className="procedure-steps-list">
                  {service.procedureSteps.map((stepItem, index) => (
                    <div key={index} className="procedure-step-card">
                      <div className="procedure-step-num">{stepItem.step}</div>
                      <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>{stepItem.title}</h4>
                        <p style={{ fontSize: '0.925rem', color: 'var(--color-muted-text)' }}>{stepItem.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Checklist */}
              <div className="service-content-block">
                <h3>Key Benefits & Outcomes</h3>
                <ul className="benefits-checklist">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="benefit-check-item">
                      <CheckCircle2 size={20} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recommended For & Inclusions */}
              <div style={{
                backgroundColor: 'var(--color-warm-ivory)',
                padding: '28px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border-subtle)',
                marginTop: '36px'
              }}>
                <h4 style={{ marginBottom: '10px' }}>Ideal For:</h4>
                <p style={{ color: 'var(--color-muted-text)', marginBottom: '20px' }}>
                  {service.recommendedFor}
                </p>

                <h4 style={{ marginBottom: '12px' }}>Complimentary with this Ritual:</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {service.includedTreatments.map((item, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: 'var(--color-white)',
                        border: '1px solid var(--color-border-gold)',
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.825rem',
                        fontWeight: 600,
                        color: 'var(--color-deep-brown)'
                      }}
                    >
                      ✓ {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Booking Sidebar */}
            <aside>
              <div className="service-sidebar-card">
                <div className="sidebar-pricing-row">
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-light-text)', textTransform: 'uppercase' }}>
                      Investment Starting at
                    </span>
                    <div className="sidebar-price">${service.price}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-light-text)', textTransform: 'uppercase' }}>
                      Duration
                    </span>
                    <div style={{ fontWeight: 600, color: 'var(--color-deep-brown)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={16} color="var(--color-champagne-gold)" />
                      {service.duration}
                    </div>
                  </div>
                </div>

                <ul className="sidebar-info-list">
                  <li className="sidebar-info-item">
                    <Sparkles size={18} />
                    <span>Private acoustic-insulated suite</span>
                  </li>
                  <li className="sidebar-info-item">
                    <ShieldCheck size={18} />
                    <span>Hospital-grade autoclave sterilized tools</span>
                  </li>
                  <li className="sidebar-info-item">
                    <Heart size={18} />
                    <span>Organic botanicals & cruelty-free elixirs</span>
                  </li>
                  <li className="sidebar-info-item">
                    <Clock size={18} />
                    <span>Champagne & herbal tea service included</span>
                  </li>
                </ul>

                <Button
                  to="/contact"
                  variant="primary"
                  style={{ width: '100%', marginBottom: '14px' }}
                  icon={Calendar}
                >
                  Reserve This Service
                </Button>

                <Button
                  to="/contact"
                  variant="outline"
                  style={{ width: '100%' }}
                >
                  Consult Concierge
                </Button>

                <p style={{ fontSize: '0.75rem', color: 'var(--color-light-text)', textAlign: 'center', marginTop: '16px' }}>
                  Complimentary cancellations accepted up to 24 hours prior.
                </p>
              </div>
            </aside>
          </div>

          {/* Related Services */}
          <div style={{ marginTop: '90px', paddingTop: '60px', borderTop: '1px solid var(--color-border-subtle)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '36px' }}>
              <div>
                <span className="section-eyebrow">Complementary Rituals</span>
                <h3 style={{ fontSize: '2rem' }}>You May Also Adore</h3>
              </div>
              <Link to="/services" style={{ color: 'var(--color-champagne-gold)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>All Services</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="services-grid-home">
              {relatedServices.map((rel) => (
                <ServiceCard key={rel.id} service={rel} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;
