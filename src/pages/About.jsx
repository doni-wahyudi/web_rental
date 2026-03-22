import { useScrollReveal, useStaggerReveal } from '../utils/helpers';
import Stats from '../components/Stats';
import { FaShieldAlt, FaUserTie, FaCheckCircle, FaCar } from 'react-icons/fa';
import aboutImage from '../assets/hero-2.png';

export default function About() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();
  const coreValuesRef = useStaggerReveal('.value-card');
  
  return (
    <main className="page-wrapper" style={{ paddingTop: 'var(--navbar-height)' }}>
      <div className="page-header bg-dark">
        <div className="container text-center">
          <h1 className="page-title text-white">Tentang RentalKu</h1>
          <p className="page-subtitle text-light">Dedikasi kami untuk memberikan layanan transportasi terbaik, aman, dan nyaman.</p>
        </div>
      </div>
      
      {/* Company Overview */}
      <section className="section pb-0">
        <div className="container">
          <div className="grid-2-cols" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div className="about-image reveal-left" ref={leftRef}>
              <div className="glass" style={{ padding: '1rem', borderRadius: 'var(--radius-2xl)', background: 'rgba(212, 168, 67, 0.1)' }}>
                <img 
                  src={aboutImage}
                  alt="RentalKu Fleet" 
                  style={{ width: '100%', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }} 
                />
              </div>
            </div>
            <div className="about-content reveal-right" ref={rightRef}>
              <span className="section-label">Cerita Kami</span>
              <h2 className="mb-4" style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Mitra Perjalanan Terpercaya Anda</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                RentalKu hadir sebagai solusi transportasi premium di area Jabodetabek dan layanan escort ke seluruh penjuru Pulau Jawa. Berawal dari visi untuk menstandarisasi kenyamanan sewa mobil, kami terus berkembang menjadi salah satu penyedia armada terlengkap dan terpercaya.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
                Kami percaya bahwa perjalanan yang baik dimulai dari kendaraan yang prima dan pelayanan yang ramah. Oleh karena itu, seluruh armada kami selalu melewati proses pengecekan ketat sebelum digunakan.
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                  <FaCheckCircle style={{ color: 'var(--color-success)', fontSize: '1.25rem' }} /> Armada Terawat & Bersih
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                  <FaCheckCircle style={{ color: 'var(--color-success)', fontSize: '1.25rem' }} /> Driver Profesional
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                  <FaCheckCircle style={{ color: 'var(--color-success)', fontSize: '1.25rem' }} /> Layanan Customer Service 24/7
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-light" style={{ background: 'var(--color-bg-alt)', marginTop: '4rem' }}>
        <div className="container" ref={coreValuesRef}>
          <div className="text-center mb-5">
            <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)' }}>Kenapa Memilih Kami?</h2>
            <p className="mt-2" style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>Nilai-nilai inti yang selalu kami pegang dalam melayani setiap pelanggan.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div className="value-card glass text-center p-5 reveal-scale" style={{ borderRadius: 'var(--radius-xl)' }}>
              <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', background: 'rgba(212, 168, 67, 0.1)', borderRadius: '50%', display: 'flex', placeItems: 'center', justifyContent: 'center', color: 'var(--color-accent-dark)', fontSize: '2rem' }}>
                <FaCar />
              </div>
              <h3 className="mb-3">Kualitas Armada</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>Armada terbaru dengan perawatan rutin di bengkel resmi untuk memastikan performa kendaraan selalu optimal.</p>
            </div>
            
            <div className="value-card glass text-center p-5 reveal-scale" style={{ borderRadius: 'var(--radius-xl)' }}>
              <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', background: 'rgba(212, 168, 67, 0.1)', borderRadius: '50%', display: 'flex', placeItems: 'center', justifyContent: 'center', color: 'var(--color-accent-dark)', fontSize: '2rem' }}>
                <FaShieldAlt />
              </div>
              <h3 className="mb-3">Keamanan Terjamin</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>Fasilitas asuransi kendaraan komprehensif (All Risk) untuk ketenangan pikiran Anda selama perjalanan.</p>
            </div>
            
            <div className="value-card glass text-center p-5 reveal-scale" style={{ borderRadius: 'var(--radius-xl)' }}>
              <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem', background: 'rgba(212, 168, 67, 0.1)', borderRadius: '50%', display: 'flex', placeItems: 'center', justifyContent: 'center', color: 'var(--color-accent-dark)', fontSize: '2rem' }}>
                <FaUserTie />
              </div>
              <h3 className="mb-3">Mitra Pengemudi</h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>Driver profesional, ramah, dan berpengalaman yang menguasai rute perjalanan dengan sangat baik.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section included here as well */}
      <Stats />
      
    </main>
  );
}
