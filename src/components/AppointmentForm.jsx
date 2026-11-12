import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Sparkles,
  Check,
  CheckCircle2,
  AlertCircle,
  Info,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { TEAM_MEMBERS } from '../data/teamData';
import Button from './Button';

const TIME_SLOTS = [
  '09:30 AM',
  '11:00 AM',
  '12:30 PM',
  '02:00 PM',
  '03:30 PM',
  '05:00 PM',
  '06:30 PM'
];

const AppointmentForm = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Pre-fill service if passed in URL query e.g. /booking?service=french-balayage-gloss
  const preselectedServiceId = searchParams.get('service');

  const [step, setStep] = useState(1);
  const [selectedServiceId, setSelectedServiceId] = useState(
    preselectedServiceId && SERVICES_DATA.some(s => s.id === preselectedServiceId)
      ? preselectedServiceId
      : SERVICES_DATA[0].id
  );
  const [selectedStaffId, setSelectedStaffId] = useState('any');
  
  // Tomorrow's date formatted as YYYY-MM-DD
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const defaultDateStr = tomorrow.toISOString().split('T')[0];

  const [bookingDate, setBookingDate] = useState(defaultDateStr);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(TIME_SLOTS[1]);

  // Customer Contact Details
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  useEffect(() => {
    if (preselectedServiceId && SERVICES_DATA.some(s => s.id === preselectedServiceId)) {
      setSelectedServiceId(preselectedServiceId);
    }
  }, [preselectedServiceId]);

  const selectedService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];
  const selectedStaff = selectedStaffId === 'any'
    ? { name: 'First Available Master Artist', role: 'Curated Specialist' }
    : TEAM_MEMBERS.find((m) => m.id === selectedStaffId);

  const validateContactForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please provide a valid phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (step === 1 && !selectedServiceId) return;
    if (step === 2 && !selectedTimeSlot) return;
    if (step === 3) {
      if (!validateContactForm()) return;
    }
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!validateContactForm()) {
      setStep(3);
      return;
    }

    setIsSubmitting(true);

    // Simulate luxury confirmation process
    setTimeout(() => {
      setIsSubmitting(false);
      setConfirmedBooking({
        confirmationCode: `LXA-${Math.floor(100000 + Math.random() * 900000)}`,
        service: selectedService,
        staff: selectedStaff,
        date: bookingDate,
        time: selectedTimeSlot,
        customer: formData,
        total: selectedService.price
      });
    }, 800);
  };

  return (
    <div>
      {/* Booking Confirmation Modal */}
      {confirmedBooking && (
        <div className="lightbox-backdrop" role="dialog" aria-modal="true">
          <div className="confirmation-card">
            <div className="confirm-icon-circle">
              <Check size={36} />
            </div>

            <span className="section-eyebrow">Reservation Confirmed</span>
            <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>We Await Your Presence</h2>
            <p style={{ color: 'var(--color-muted-text)', marginBottom: '24px' }}>
              Your reservation reference number is{' '}
              <strong style={{ color: 'var(--color-deep-brown)' }}>
                {confirmedBooking.confirmationCode}
              </strong>
            </p>

            {/* Receipt Summary */}
            <div style={{
              backgroundColor: 'var(--color-warm-ivory)',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
              textAlign: 'left',
              marginBottom: '24px',
              border: '1px solid var(--color-border-subtle)'
            }}>
              <div className="summary-row">
                <span className="summary-label">Treatment Ritual:</span>
                <span className="summary-value">{confirmedBooking.service.name}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Master Specialist:</span>
                <span className="summary-value">{confirmedBooking.staff.name}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Appointment Time:</span>
                <span className="summary-value">{confirmedBooking.date} at {confirmedBooking.time}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Guest Name:</span>
                <span className="summary-value">{confirmedBooking.customer.name}</span>
              </div>
              <div className="summary-row">
                <span className="summary-label">Contact:</span>
                <span className="summary-value">{confirmedBooking.customer.phone}</span>
              </div>
              <div className="summary-total-row" style={{ marginTop: '16px', paddingTop: '12px' }}>
                <span style={{ fontWeight: 600 }}>Estimated Investment:</span>
                <span className="summary-total-amount" style={{ fontSize: '1.6rem' }}>${confirmedBooking.total}</span>
              </div>
            </div>

            {/* Appointment Notice */}
            <div className="demo-disclaimer-pill" style={{ textAlign: 'left', marginBottom: '24px' }}>
              <Info size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong>Appointment Notice:</strong> A confirmation email and calendar reminder have been prepared. Our concierge will be ready to welcome you.
              </div>
            </div>

            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center' }}>
              <Button
                variant="primary"
                onClick={() => {
                  setConfirmedBooking(null);
                  setStep(1);
                  setFormData({ name: '', email: '', phone: '', notes: '' });
                  navigate('/');
                }}
              >
                Return to Sanctuary Home
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main Stepper Layout */}
      <div className="booking-page-layout">
        <div className="booking-form-box">
          {/* Stepper Header */}
          <div className="booking-stepper">
            <div className={`step-indicator ${step === 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
              <div className="step-circle">
                {step > 1 ? <Check size={18} /> : '1'}
              </div>
              <span className="step-label">1. Treatment</span>
            </div>

            <div className={`step-indicator ${step === 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
              <div className="step-circle">
                {step > 2 ? <Check size={18} /> : '2'}
              </div>
              <span className="step-label">2. Artist & Time</span>
            </div>

            <div className={`step-indicator ${step === 3 ? 'active' : ''}`}>
              <div className="step-circle">3</div>
              <span className="step-label">3. Guest Details</span>
            </div>
          </div>

          {/* STEP 1: Service Selection */}
          {step === 1 && (
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Select Your Treatment Ritual</h3>
              <p style={{ fontSize: '0.925rem', marginBottom: '20px' }}>
                Choose from our award-winning aesthetic and wellness services:
              </p>

              <div className="selection-grid">
                {SERVICES_DATA.map((service) => {
                  const isSelected = selectedServiceId === service.id;
                  return (
                    <div
                      key={service.id}
                      className={`select-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedServiceId(service.id)}
                    >
                      <div className="select-card-header">
                        <span className="select-card-title">{service.name}</span>
                        {isSelected && <Check size={18} color="var(--color-champagne-gold)" />}
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--color-muted-text)', margin: '8px 0' }}>
                        {service.shortDesc.slice(0, 85)}...
                      </p>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                        <span className="select-card-meta">${service.price}</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-light-text)' }}>{service.duration}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
                <Button variant="primary" onClick={handleNextStep} icon={ArrowRight}>
                  Next: Specialist & Time
                </Button>
              </div>
            </div>
          )}

          {/* STEP 2: Specialist, Date & Time */}
          {step === 2 && (
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Choose Master Artist & Slot</h3>
              <p style={{ fontSize: '0.925rem', marginBottom: '20px' }}>
                Select your preferred specialist or allow our concierge to curate the best artist for your ritual:
              </p>

              <label className="form-label">Preferred Specialist</label>
              <div className="staff-card-grid">
                <div
                  className={`staff-select-card ${selectedStaffId === 'any' ? 'selected' : ''}`}
                  onClick={() => setSelectedStaffId('any')}
                >
                  <div className="staff-select-avatar" style={{ backgroundColor: 'var(--color-soft-beige)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Sparkles size={20} color="var(--color-champagne-gold)" />
                  </div>
                  <div>
                    <div className="staff-select-name">Any Master Specialist</div>
                    <div className="staff-select-role">Curated by concierge</div>
                  </div>
                </div>

                {TEAM_MEMBERS.map((member) => (
                  <div
                    key={member.id}
                    className={`staff-select-card ${selectedStaffId === member.id ? 'selected' : ''}`}
                    onClick={() => setSelectedStaffId(member.id)}
                  >
                    <img src={member.image} alt={member.name} className="staff-select-avatar" />
                    <div>
                      <div className="staff-select-name">{member.name}</div>
                      <div className="staff-select-role">{member.role.split('&')[0]}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="form-row-2" style={{ marginTop: '28px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="bookingDate">
                    Preferred Date
                  </label>
                  <input
                    id="bookingDate"
                    type="date"
                    min={defaultDateStr}
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Selected Time Slot</label>
                  <div style={{ display: 'flex', alignItems: 'center', height: '48px', color: 'var(--color-deep-brown)', fontWeight: 600 }}>
                    <Clock size={18} color="var(--color-champagne-gold)" style={{ marginRight: '8px' }} />
                    {selectedTimeSlot}
                  </div>
                </div>
              </div>

              <label className="form-label" style={{ marginTop: '10px' }}>Available Times</label>
              <div className="time-slots-grid">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    className={`slot-btn ${selectedTimeSlot === slot ? 'selected' : ''}`}
                    onClick={() => setSelectedTimeSlot(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '36px' }}>
                <Button variant="outline" onClick={handlePrevStep} icon={ArrowLeft}>
                  Back
                </Button>
                <Button variant="primary" onClick={handleNextStep} icon={ArrowRight}>
                  Next: Guest Details
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3: Guest Contact & Notes */}
          {step === 3 && (
            <form onSubmit={handleBookingSubmit} noValidate>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Guest Information</h3>
              <p style={{ fontSize: '0.925rem', marginBottom: '24px' }}>
                Please share your contact coordinates so we may prepare your bespoke suite:
              </p>

              <div className="form-group">
                <label className="form-label" htmlFor="fullName">Full Name *</label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Your Full Name"
                  className="form-control"
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
                  <label className="form-label" htmlFor="emailAddress">Email Address *</label>
                  <input
                    id="emailAddress"
                    type="email"
                    placeholder="name@email.com"
                    className="form-control"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                  />
                  {errors.email && <div className="form-error">{errors.email}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phoneNum">Phone Number *</label>
                  <input
                    id="phoneNum"
                    type="tel"
                    placeholder="+1 (310) 555-0194"
                    className="form-control"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: null });
                    }}
                  />
                  {errors.phone && <div className="form-error">{errors.phone}</div>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="notes">Special Requests & Preferences (Optional)</label>
                <textarea
                  id="notes"
                  rows={3}
                  placeholder="Share any special preferences, allergies, or requests..."
                  className="form-control"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '36px' }}>
                <Button variant="outline" onClick={handlePrevStep} icon={ArrowLeft}>
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  icon={CheckCircle2}
                >
                  {isSubmitting ? 'Confirming Reservation...' : 'Confirm Appointment'}
                </Button>
              </div>
            </form>
          )}
        </div>

        {/* Live Summary Sidebar */}
        <aside className="booking-summary-card">
          <h3 className="summary-title">Reservation Summary</h3>

          <div className="summary-row">
            <span className="summary-label">Treatment:</span>
            <span className="summary-value">{selectedService.name}</span>
          </div>

          <div className="summary-row">
            <span className="summary-label">Category:</span>
            <span className="summary-value">{selectedService.categoryName}</span>
          </div>

          <div className="summary-row">
            <span className="summary-label">Duration:</span>
            <span className="summary-value">{selectedService.duration}</span>
          </div>

          <div className="summary-row">
            <span className="summary-label">Artist:</span>
            <span className="summary-value">{selectedStaff.name}</span>
          </div>

          <div className="summary-row">
            <span className="summary-label">Date:</span>
            <span className="summary-value">{bookingDate}</span>
          </div>

          <div className="summary-row">
            <span className="summary-label">Time Slot:</span>
            <span className="summary-value">{selectedTimeSlot}</span>
          </div>

          <div className="summary-total-row">
            <span style={{ fontWeight: 600 }}>Total Investment:</span>
            <span className="summary-total-amount">${selectedService.price}</span>
          </div>

          {/* Sanctuary Guarantee */}
          <div className="demo-disclaimer-pill">
            <Info size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>Sanctuary Guarantee:</strong> Complimentary rescheduling or cancellation is honored up to 24 hours prior to your visit.
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AppointmentForm;
