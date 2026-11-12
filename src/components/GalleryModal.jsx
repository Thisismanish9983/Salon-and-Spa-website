import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryModal = ({ item, items, onClose, onNavigate }) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = useCallback(() => {
    const prevIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    onNavigate(items[prevIndex]);
  }, [currentIndex, items, onNavigate]);

  const handleNext = useCallback(() => {
    const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    onNavigate(items[nextIndex]);
  }, [currentIndex, items, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, handlePrev, handleNext]);

  return (
    <div className="lightbox-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close-btn" onClick={onClose} aria-label="Close lightbox">
          <X size={28} />
        </button>

        <button
          className="lightbox-nav-btn lightbox-prev"
          onClick={handlePrev}
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>

        <div className="lightbox-image-wrapper">
          <img
            src={item.image}
            alt={item.title}
            className="lightbox-img"
          />
        </div>

        <button
          className="lightbox-nav-btn lightbox-next"
          onClick={handleNext}
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>

        <div className="lightbox-info">
          <span className="gallery-item-badge">{item.categoryLabel}</span>
          <h3 className="gallery-item-title" style={{ fontSize: '1.5rem', marginTop: '4px' }}>
            {item.title}
          </h3>
          <p className="gallery-item-desc" style={{ maxWidth: '600px', margin: '4px auto 0 auto' }}>
            {item.description}
          </p>
          <span style={{ fontSize: '0.8rem', color: '#a3978f', display: 'block', marginTop: '8px' }}>
            {currentIndex + 1} of {items.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
