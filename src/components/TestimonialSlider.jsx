import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isPaused]);

  const activeTestimonial = TESTIMONIALS_DATA[currentIndex];

  return (
    <div
      className="testimonial-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="testimonial-card-luxury">
        <Quote className="testimonial-quote-icon" size={48} />

        <div className="testimonial-stars" aria-label={`${activeTestimonial.rating} out of 5 stars`}>
          {[...Array(activeTestimonial.rating)].map((_, i) => (
            <Star key={i} size={18} fill="currentColor" />
          ))}
        </div>

        <blockquote className="testimonial-quote-text">
          &ldquo;{activeTestimonial.quote}&rdquo;
        </blockquote>

        <div className="testimonial-author-box">
          <img
            src={activeTestimonial.avatar}
            alt={activeTestimonial.name}
            className="testimonial-avatar"
          />
          <div className="testimonial-author-info">
            <h4 className="testimonial-author-name">{activeTestimonial.name}</h4>
            <p className="testimonial-author-meta">{activeTestimonial.title}</p>
            <span className="testimonial-service-tag">{activeTestimonial.service}</span>
          </div>
        </div>
      </div>

      <div className="testimonial-controls">
        <button
          onClick={prevSlide}
          className="testimonial-nav-btn"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="testimonial-dots">
          {TESTIMONIALS_DATA.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`testimonial-dot ${currentIndex === index ? 'active' : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="testimonial-nav-btn"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
