import React from 'react';
import { Sparkles, Home, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <div className="container-narrow">
        <div className="not-found-num">404</div>
        <span className="section-eyebrow">Tranquility Interrupted</span>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Sanctuary Path Not Found</h1>
        <p style={{ color: 'var(--color-muted-text)', maxWidth: '520px', margin: '0 auto 36px auto', fontSize: '1.1rem' }}>
          The page or ritual path you are seeking has been moved or does not exist. Allow us to guide you back to our sanctuary entrance.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <Button to="/" variant="primary" icon={Home}>
            Return to Sanctuary Home
          </Button>
          <Button to="/services" variant="outline">
            Browse All Services
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
