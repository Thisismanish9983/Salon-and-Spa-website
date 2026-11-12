import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.message.trim()) errs.message = 'Please provide your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 700);
  };

  return (
    <div className="contact-page">
      {/* Hero Header */}
      <section className="service-details-hero" style={{ textAlign: 'center' }}>
        <div className="container">
          <span className="section-eyebrow">Private Concierge</span>
          <h1 style={{ marginBottom: '16px' }}>Connect with LuxeAura</h1>
          <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto' }}>
            We welcome your inquiries regarding bespoke bridal bookings, private sanctuary buyouts, or personalized treatment consultations.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section section-bg-white">
        <div className="container">
          <div className="contact-split-grid">
            {/* Left: Contact Info & Hours */}
            <div className="contact-info-panel">
              <span className="section-eyebrow">Sanctuary Coordinates</span>
              <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Visit Our Beverly Hills Retreat</h2>
              <p style={{ color: 'var(--color-muted-text)', marginBottom: '32px' }}>
                Conveniently situated in the golden triangle of Beverly Hills with complimentary valet parking and private elevator access to our rooftop garden.
              </p>

              <div className="contact-item-box">
                <div className="contact-item-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Location</h4>
                  <p style={{ fontSize: '0.925rem' }}>482 Beverly Boulevard<br />Los Angeles, CA 90210</p>
                </div>
              </div>

              <div className="contact-item-box">
                <div className="contact-item-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Phone</h4>
                  <p style={{ fontSize: '0.925rem' }}>+1 (310) 555-0194</p>
                </div>
              </div>

              <div className="contact-item-box">
                <div className="contact-item-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>Email</h4>
                  <p style={{ fontSize: '0.925rem' }}>contact@luxeaura.com</p>
                </div>
              </div>

              {/* Hours Schedule */}
              <div className="hours-schedule">
                <h4 style={{ fontSize: '1.1rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={18} color="var(--color-champagne-gold)" />
                  Operating Hours
                </h4>
                <div className="hours-row">
                  <span>Tuesday – Friday</span>
                  <span style={{ fontWeight: 600 }}>9:00 AM – 8:00 PM</span>
                </div>
                <div className="hours-row">
                  <span>Saturday</span>
                  <span style={{ fontWeight: 600 }}>9:00 AM – 7:00 PM</span>
                </div>
                <div className="hours-row">
                  <span>Sunday</span>
                  <span style={{ fontWeight: 600 }}>10:00 AM – 6:00 PM</span>
                </div>
                <div className="hours-row">
                  <span>Monday</span>
                  <span style={{ color: 'var(--color-champagne-gold)', fontWeight: 600 }}>Private Bridal Buyouts</span>
                </div>
              </div>
            </div>

            {/* Right: Interactive Contact Form */}
            <div className="contact-form-panel">
              <span className="section-eyebrow">Direct Message</span>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '12px' }}>Send a Message to Concierge</h3>
              <p style={{ color: 'var(--color-muted-text)', marginBottom: '28px', fontSize: '0.95rem' }}>
                Our guest liaison team responds to all digital inquiries within 4 business hours.
              </p>

              {submitted ? (
                <div style={{
                  backgroundColor: 'var(--color-white)',
                  padding: '36px',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                  border: '1px solid var(--color-border-gold)'
                }}>
                  <div className="confirm-icon-circle" style={{ width: '60px', height: '60px' }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ marginBottom: '8px' }}>Message Received</h3>
                  <p style={{ color: 'var(--color-muted-text)', marginBottom: '20px' }}>
                    Thank you for reaching out to LuxeAura. Our private concierge desk will contact you promptly.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contactName">Your Name *</label>
                    <input
                      id="contactName"
                      type="text"
                      className="form-control"
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                    />
                    {errors.name && <div className="form-error">{errors.name}</div>}
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contactEmail">Email Address *</label>
                      <input
                        id="contactEmail"
                        type="email"
                        className="form-control"
                        placeholder="name@email.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: null });
                        }}
                      />
                      {errors.email && <div className="form-error">{errors.email}</div>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="contactPhone">Phone Number</label>
                      <input
                        id="contactPhone"
                        type="tel"
                        className="form-control"
                        placeholder="+1 (310) 555-0194"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="subject">Topic of Interest</label>
                    <select
                      id="subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="General Inquiry">General Sanctuary Inquiry</option>
                      <option value="Bridal Booking">Bespoke Bridal Couture Services</option>
                      <option value="Private Buyout">Private Event or Spa Buyout</option>
                      <option value="Press / Media">Press & Editorial Partnerships</option>
                      <option value="Careers">Artisan Career Opportunities</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contactMsg">Message / Specific Desires *</label>
                    <textarea
                      id="contactMsg"
                      rows={5}
                      className="form-control"
                      placeholder="Tell us about the desired treatment, preferred dates, or special event details..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: null });
                      }}
                    />
                    {errors.message && <div className="form-error">{errors.message}</div>}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    icon={Send}
                    style={{ width: '100%', marginTop: '10px' }}
                  >
                    {isSubmitting ? 'Transmitting Message...' : 'Transmit Inquiry'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
