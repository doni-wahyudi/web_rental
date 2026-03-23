import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand & About */}
          <div className="footer-col brand-col">
            <Link to="/" className="navbar-brand footer-brand">
              <span className="brand-icon">RK</span>
              <span className="brand-text">Rental<span className="brand-accent">Ku</span></span>
            </Link>
            <p className="footer-desc">
              Penyedia layanan sewa mobil premium dan escort perjalanan terbaik di Jabodetabek dan Pulau Jawa. Kenyamanan dan keselamatan Anda adalah prioritas utama kami.
            </p>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-title">Layanan</h4>
            <ul className="footer-links">
              <li><Link to="/armada">Sewa Harian</Link></li>
              <li><Link to="/armada">Sewa Korporasi</Link></li>
              <li><a href="#area-layanan">Antar Jemput Bandara</a></li>
              <li><a href="#area-layanan">Escort Luar Kota</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Perusahaan</h4>
            <ul className="footer-links">
              <li><Link to="/tentang">Tentang Kami</Link></li>
              <li><Link to="/armada">Armada</Link></li>
              <li><Link to="/artikel">Artikel Terbaru</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/kontak">Kontak</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col contact-col">
            <h4 className="footer-title">Hubungi Kami</h4>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>Jl. Jend. Sudirman Kav. 50, Jakarta Selatan, 12190</span>
              </li>
              <li>
                <FaPhoneAlt className="contact-icon" />
                <span><a href="tel:+6281234567890">0812-3456-7890</a></span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span><a href="mailto:info@rentalku.com">info@rentalku.com</a></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} RentalKu. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/faq">Syarat & Ketentuan</Link>
            <Link to="/faq">Kebijakan Privasi</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
