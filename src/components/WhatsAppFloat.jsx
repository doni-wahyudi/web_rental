import { FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppUrl } from '../utils/helpers';
import './WhatsAppFloat.css';

export default function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppUrl('Halo RentalKu, saya ingin konsultasi mengenai sewa mobil.')}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
    >
      <div className="ripple-effect"></div>
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">Chat Kami</span>
    </a>
  );
}
