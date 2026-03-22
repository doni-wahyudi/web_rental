import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import { getWhatsAppUrl } from '../utils/helpers';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { to: '/', label: 'Beranda' },
    { to: '/armada', label: 'Armada' },
    { to: '/tentang', label: 'Tentang Kami' },
    { to: '/faq', label: 'FAQ' },
    { to: '/kontak', label: 'Kontak' },
  ];

  const navClass = `navbar ${scrolled || !isHome ? 'navbar-solid' : 'navbar-transparent'}`;

  return (
    <>
      <nav className={navClass} id="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-brand">
            <span className="brand-icon">RK</span>
            <span className="brand-text">Rental<span className="brand-accent">Ku</span></span>
          </Link>

          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <a href="tel:+6281234567890" className="nav-phone">
              <FaPhoneAlt /> <span>0812-3456-7890</span>
            </a>
            <a href={getWhatsAppUrl()} className="btn btn-primary btn-nav" target="_blank" rel="noopener noreferrer">
              Pesan Sekarang
            </a>
          </div>

          <button
            className="navbar-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <Link to="/" className="navbar-brand" onClick={() => setMenuOpen(false)}>
            <span className="brand-icon">RK</span>
            <span className="brand-text">Rental<span className="brand-accent">Ku</span></span>
          </Link>
          <button className="drawer-close" onClick={() => setMenuOpen(false)}>
            <FaTimes />
          </button>
        </div>
        <ul className="drawer-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`drawer-link ${location.pathname === link.to ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="drawer-cta">
          <a href="tel:+6281234567890" className="btn btn-outline-dark btn-lg drawer-btn">
            <FaPhoneAlt /> Hubungi Kami
          </a>
          <a href={getWhatsAppUrl()} className="btn btn-primary btn-lg drawer-btn" target="_blank" rel="noopener noreferrer">
            Pesan via WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
