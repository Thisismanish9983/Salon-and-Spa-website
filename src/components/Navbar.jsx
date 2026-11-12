import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Sparkles, Phone, Clock, ChevronDown } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  // Scroll detection for sticky navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu & dropdown on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  // Essential primary navigation links
  const primaryLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' }
  ];

  // Secondary links inside clean 'Explore' dropdown
  const moreLinks = [
    { name: 'Our Team', path: '/team' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' }
  ];

  // All links for mobile drawer
  const allMobileLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing & Packages', path: '/pricing' },
    { name: 'Our Team', path: '/team' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' }
  ];

  const isMoreActive = moreLinks.some((l) => location.pathname === l.path);

  return (
    <div className="header-sticky-wrapper">
      {/* Main Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo" aria-label="LuxeAura Home">
            <div className="brand-symbol">
              <Sparkles size={20} />
            </div>
            <div className="brand-text">
              <span className="brand-name">LuxeAura</span>
              <span className="brand-tagline">Salon & Spa Sanctuary</span>
            </div>
          </Link>

          {/* Clean Desktop Navigation Links */}
          <ul className="nav-links-desktop">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Pricing
              </NavLink>
            </li>

            {/* Explore Dropdown */}
            <li
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                className={`nav-dropdown-trigger nav-link ${isMoreActive ? 'active' : ''}`}
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Explore</span>
                <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'none' }} />
              </button>

              <ul className="nav-dropdown-menu">
                {moreLinks.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) => `nav-dropdown-item ${isActive ? 'active' : ''}`}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>

          {/* Right Action Button */}
          <div className="nav-actions">
            <Button
              to="/contact"
              variant="primary"
              size="sm"
              icon={Calendar}
              className="desktop-only-btn"
            >
              Book Appointment
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
            <div className="brand-symbol">
              <Sparkles size={18} />
            </div>
            <div className="brand-text">
              <span className="brand-name" style={{ fontSize: '1.45rem' }}>LuxeAura</span>
              <span className="brand-tagline">Sanctuary</span>
            </div>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            style={{ color: 'var(--color-deep-brown)', padding: '6px' }}
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {allMobileLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mobile-nav-footer">
          <Button
            to="/contact"
            variant="primary"
            icon={Calendar}
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Appointment
          </Button>

          <div style={{ fontSize: '0.85rem', color: 'var(--color-muted-text)', marginTop: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Phone size={14} color="var(--color-champagne-gold)" />
              <span>+1 (800) 589-3287</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Clock size={14} color="var(--color-champagne-gold)" />
              <span>Tue - Sun: 9:00 AM – 8:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
