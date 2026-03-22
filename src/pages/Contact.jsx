import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { getWhatsAppUrl, useStaggerReveal } from '../utils/helpers';
import './Contact.css';

export default function Contact() {
  const containerRef = useStaggerReveal();

  return (
    <main className="page-wrapper" style={{ paddingTop: 'var(--navbar-height)' }}>
      <div className="page-header bg-dark">
        <div className="container text-center">
          <h1 className="page-title text-white">Hubungi Kami</h1>
          <p className="page-subtitle text-light">Kami siap membantu kebutuhan perjalanan Anda 24/7</p>
        </div>
      </div>

      <section className="section contact-page" ref={containerRef}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info reveal-left stagger-1">
              <h2>Informasi Kontak</h2>
              <p>Tim layanan pelanggan kami siap membantu Anda dengan reservasi, pertanyaan, atau keluhan kapan saja.</p>
              
              <div className="contact-items flex-column mt-5">
                <div className="contact-item">
                  <div className="contact-icon-wrap">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4>Alamat Kantor</h4>
                    <p>Jl. Jend. Sudirman Kav. 50<br/>Jakarta Selatan, 12190</p>
                  </div>
                </div>
                
                <div className="contact-item mt-4">
                  <div className="contact-icon-wrap">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4>Telepon</h4>
                    <p><a href="tel:+6281234567890">0812-3456-7890</a></p>
                  </div>
                </div>
                
                <div className="contact-item mt-4">
                  <div className="contact-icon-wrap">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4>WhatsApp (24 Jam)</h4>
                    <p><a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">0812-3456-7890</a></p>
                  </div>
                </div>
                
                <div className="contact-item mt-4">
                  <div className="contact-icon-wrap">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p><a href="mailto:info@rentalku.com">info@rentalku.com</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap reveal-right stagger-2">
              <div className="glass p-5 rounded-xl">
                <h3 className="mb-4 text-primary">Kirim Pesan</h3>
                <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Pesan terkirim! Tim kami akan segera menghubungi Anda.'); }}>
                  <div className="form-group mb-4">
                    <label>Nama Lengkap</label>
                    <input type="text" className="form-control" required placeholder="Masukkan nama Anda" />
                  </div>
                  
                  <div className="form-group mb-4">
                    <label>No. WhatsApp / Telepon</label>
                    <input type="tel" className="form-control" required placeholder="Contoh: 081234567890" />
                  </div>
                  
                  <div className="form-group mb-4">
                    <label>Layanan yang Diminati</label>
                    <select className="form-control">
                      <option>Sewa Harian (Lepas Kunci)</option>
                      <option>Sewa Harian (Dengan Driver)</option>
                      <option>Antar Jemput Bandara</option>
                      <option>Escort Luar Kota</option>
                      <option>Sewa Korporasi / Bulanan</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  
                  <div className="form-group mb-4">
                    <label>Pesan</label>
                    <textarea className="form-control" rows="4" required placeholder="Tuliskan detail pertanyaan atau kebutuhan Anda"></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-lg w-100 mt-2">Kirim Pesan</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
