import React, { useState } from 'react';
import { Search, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import { SERVICES_CATEGORIES, SERVICES_DATA } from '../data/servicesData';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="services-page">
      {/* Hero Banner */}
      <section className="service-details-hero" style={{ textAlign: 'center' }}>
        <div className="container">
          <span className="section-eyebrow">Haute Artistry & Wellness</span>
          <h1 style={{ marginBottom: '16px' }}>Our Rituals & Services</h1>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto' }}>
            Explore our curated menu of hair architecture, French blonding, clinical cellular skincare, and centuries-old body rituals.
          </p>
        </div>
      </section>

      {/* Services Explorer */}
      <section className="section section-bg-white">
        <div className="container">
          {/* Search bar & Category tabs */}
          <div style={{ maxWidth: '480px', margin: '0 auto 32px auto', position: 'relative' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatments by name, benefit or category..."
              className="form-control"
              style={{ paddingLeft: '44px', borderRadius: 'var(--radius-full)' }}
            />
            <Search
              size={18}
              color="var(--color-champagne-gold)"
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
            />
          </div>

          <div className="gallery-filters" style={{ marginBottom: '48px' }}>
            {SERVICES_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          {filteredServices.length > 0 ? (
            <div className="services-grid-home">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: 'var(--color-warm-ivory)', borderRadius: 'var(--radius-md)' }}>
              <Sparkles size={40} color="var(--color-champagne-gold)" style={{ marginBottom: '16px' }} />
              <h3 style={{ marginBottom: '8px' }}>No Treatments Match Your Query</h3>
              <p style={{ color: 'var(--color-muted-text)', marginBottom: '24px' }}>
                We could not find any rituals matching &ldquo;{searchQuery}&rdquo;. Try clearing your search or switching categories.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
              >
                Reset Filters
              </Button>
            </div>
          )}

          {/* Packages Callout */}
          <div style={{
            marginTop: '80px',
            backgroundColor: 'var(--color-warm-ivory)',
            border: '1px solid var(--color-border-gold)',
            borderRadius: 'var(--radius-lg)',
            padding: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div style={{ maxWidth: '600px' }}>
              <span className="section-eyebrow">Looking for Multi-Service Packages?</span>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Explore Our Curated Sanctuary Packages</h3>
              <p style={{ color: 'var(--color-muted-text)' }}>
                Combine signature haircuts, gold facials, and hot stone therapy into an all-inclusive 3 to 5-hour immersive retreat with significant savings.
              </p>
            </div>
            <Button to="/pricing" variant="primary" size="lg" icon={ArrowRight}>
              View Curated Packages
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
