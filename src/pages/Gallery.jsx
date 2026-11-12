import React, { useState } from 'react';
import { ZoomIn, Sparkles, Calendar } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import GalleryModal from '../components/GalleryModal';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../data/galleryData';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="gallery-page">
      {/* Hero Header */}
      <section className="service-details-hero" style={{ textAlign: 'center' }}>
        <div className="container">
          <span className="section-eyebrow">Visual Artistry</span>
          <h1 style={{ marginBottom: '16px' }}>Sanctuary Gallery</h1>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto' }}>
            A curated visual celebration of luminescent bridal beauty, lived-in balayage artistry, clinical skin transformations, and restorative spa environments.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section section-bg-white">
        <div className="container">
          {/* Category Filters */}
          <div className="gallery-filters">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="gallery-item"
                onClick={() => setSelectedItem(item)}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelectedItem(item);
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-item-img"
                  loading="lazy"
                />
                <div className="gallery-zoom-icon">
                  <ZoomIn size={18} />
                </div>
                <div className="gallery-item-overlay">
                  <span className="gallery-item-badge">{item.categoryLabel}</span>
                  <h3 className="gallery-item-title">{item.title}</h3>
                  <p className="gallery-item-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedItem && (
            <GalleryModal
              item={selectedItem}
              items={filteredItems}
              onClose={() => setSelectedItem(null)}
              onNavigate={(newItem) => setSelectedItem(newItem)}
            />
          )}

          {/* CTA Banner */}
          <div style={{
            marginTop: '80px',
            textAlign: 'center',
            backgroundColor: 'var(--color-warm-ivory)',
            padding: '54px 32px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-border-gold)'
          }}>
            <Sparkles size={36} color="var(--color-champagne-gold)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '2.2rem', marginBottom: '14px' }}>Inspired by Our Artistry?</h3>
            <p style={{ color: 'var(--color-muted-text)', maxWidth: '580px', margin: '0 auto 28px auto' }}>
              Bring your dream aesthetic to life. Schedule an in-person diagnostic consultation with one of our master artisans today.
            </p>
            <Button to="/contact" variant="primary" size="lg" icon={Calendar}>
              Reserve Your Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
