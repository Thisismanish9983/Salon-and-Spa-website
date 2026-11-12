import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <Link to="/" className="brand-logo" aria-label="LuxeAura Home">
              <div className="brand-symbol" style={{ borderColor: 'var(--color-champagne-gold)' }}>
                <Sparkles size={20} color="var(--color-champagne-gold)" />
              </div>
              <div className="brand-text">
                <span className="brand-name" style={{ color: 'var(--color-warm-ivory)' }}>LuxeAura</span>
                <span className="brand-tagline">Salon & Spa Sanctuary</span>
              </div>
            </Link>
            <p>
              Premium salon and spa sanctuary dedicated to bespoke hair styling, skin therapies, and holistic wellness.
            </p>
            <div className="footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/pricing" className="footer-link">Pricing & Packages</Link></li>
              <li><Link to="/team" className="footer-link">Our Team</Link></li>
              <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="footer-heading">Contact & Hours</h4>
            <div className="footer-contact-item">
              <MapPin size={18} />
              <span>482 Beverly Boulevard, Los Angeles, CA</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} />
              <span>+1 (310) 555-0194</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} />
              <span>contact@luxeaura.com</span>
            </div>
            <div className="footer-contact-item">
              <Clock size={18} />
              <div>
                <div>Tue – Sat: 9:00 AM – 8:00 PM</div>
                <div>Sun: 10:00 AM – 6:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} LuxeAura. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
