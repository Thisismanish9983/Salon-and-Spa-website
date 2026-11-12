import React, { useState } from 'react';
import { ChevronDown, Search, Sparkles, MessageCircle, Calendar } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';
import { FAQ_CATEGORIES, FAQ_DATA } from '../data/faqData';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIds, setOpenIds] = useState([1]); // First open by default
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQ_DATA.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="faq-page">
      {/* Hero Header */}
      <section className="service-details-hero" style={{ textAlign: 'center' }}>
        <div className="container">
          <span className="section-eyebrow">Guest Clarity & Etiquette</span>
          <h1 style={{ marginBottom: '16px' }}>Frequently Asked Questions</h1>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto' }}>
            Everything you need to know about preparing for your visit, our botanical formulations, and reservation courtesies.
          </p>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="section section-bg-white">
        <div className="container">
          {/* Search bar */}
          <div style={{ maxWidth: '480px', margin: '0 auto 32px auto', position: 'relative' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions or keywords..."
              className="form-control"
              style={{ paddingLeft: '44px', borderRadius: 'var(--radius-full)' }}
            />
            <Search
              size={18}
              color="var(--color-champagne-gold)"
              style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
            />
          </div>

          {/* Category Tabs */}
          <div className="gallery-filters" style={{ marginBottom: '48px' }}>
            {FAQ_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Accordion Group */}
          {filteredFaqs.length > 0 ? (
            <div className="faq-accordion-group">
              {filteredFaqs.map((faq) => {
                const isOpen = openIds.includes(faq.id);
                return (
                  <div key={faq.id} className={`faq-item ${isOpen ? 'open' : ''}`}>
                    <button
                      className="faq-question-btn"
                      onClick={() => toggleAccordion(faq.id)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown size={20} className="faq-chevron" />
                    </button>
                    {isOpen && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: 'var(--color-warm-ivory)', borderRadius: 'var(--radius-md)' }}>
              <Sparkles size={36} color="var(--color-champagne-gold)" style={{ marginBottom: '16px' }} />
              <h3 style={{ marginBottom: '8px' }}>No Questions Found</h3>
              <p style={{ color: 'var(--color-muted-text)', marginBottom: '20px' }}>
                We couldn&apos;t find any answers matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
              >
                Reset Search
              </Button>
            </div>
          )}

          {/* Unanswered Query Callout */}
          <div style={{
            marginTop: '80px',
            backgroundColor: 'var(--color-warm-ivory)',
            borderRadius: 'var(--radius-lg)',
            padding: '48px 36px',
            textAlign: 'center',
            border: '1px solid var(--color-border-gold)',
            maxWidth: '720px',
            margin: '80px auto 0 auto'
          }}>
            <MessageCircle size={36} color="var(--color-champagne-gold)" style={{ marginBottom: '14px' }} />
            <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Still Have Questions?</h3>
            <p style={{ color: 'var(--color-muted-text)', marginBottom: '24px' }}>
              Our private concierge team is delighted to provide tailored guidance regarding custom beauty formulations or private bookings.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Button to="/contact" variant="primary">
                Contact Concierge Desk
              </Button>
              <Button to="/contact" variant="outline" icon={Calendar}>
                Book an Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
