import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import Button from './Button';

const NewsletterForm = ({ placeholder = 'Enter your email address...', buttonText = 'Subscribe' }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please provide an email address.');
      return;
    }
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 600);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="newsletter-form" noValidate>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          placeholder={placeholder}
          className="newsletter-input"
          aria-label="Email address"
          disabled={status === 'loading'}
        />
        <Button
          type="submit"
          variant="primary"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Subscribing...' : buttonText}
        </Button>
      </form>

      {status === 'success' && (
        <div className="newsletter-feedback" role="alert">
          <CheckCircle2 size={16} />
          <span>Thank you for subscribing! We look forward to welcoming you.</span>
        </div>
      )}

      {status === 'error' && (
        <div className="newsletter-feedback" style={{ color: 'var(--color-error)' }} role="alert">
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;
