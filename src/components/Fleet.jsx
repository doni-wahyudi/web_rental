import { useState } from 'react';
import { fleet } from '../data/fleet';
import { formatPrice, getWhatsAppUrl, useStaggerReveal } from '../utils/helpers';
import { FaUsers, FaCog, FaSuitcase, FaWhatsapp } from 'react-icons/fa';
import './Fleet.css';

const categories = ['Semua', 'MPV', 'MPV Premium', 'SUV', 'Sedan', 'Luxury Van', 'Minibus'];

export default function Fleet({ showAll = false }) {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const containerRef = useStaggerReveal();

  const filtered = activeCategory === 'Semua'
    ? fleet
    : fleet.filter((c) => c.type === activeCategory);

  const displayed = showAll ? filtered : filtered.slice(0, 4);

  return (
    <section className="fleet section" id="armada" ref={containerRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Armada Kami</span>
          <h2 className="section-title">Pilih Mobil Sesuai Kebutuhan</h2>
          <p className="section-subtitle">
            Armada terawat dan selalu dalam kondisi prima untuk kenyamanan perjalanan Anda
          </p>
        </div>

        {/* Category Filter */}
        <div className="fleet-filters reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Car Grid */}
        <div className="fleet-grid">
          {displayed.map((car, idx) => (
            <div key={car.id} className={`fleet-card reveal stagger-${(idx % 6) + 1}`}>
              {car.popular && <span className="fleet-badge">Populer</span>}
              <div className="fleet-image-wrap">
                <img src={car.image} alt={car.name} className="fleet-image" loading="lazy" />
              </div>
              <div className="fleet-info">
                <span className="fleet-type">{car.type}</span>
                <h3 className="fleet-name">{car.name}</h3>
                <div className="fleet-specs">
                  <span><FaUsers /> {car.passengers} Orang</span>
                  <span><FaCog /> {car.transmission}</span>
                  <span><FaSuitcase /> {car.luggage} Koper</span>
                </div>
                <div className="fleet-pricing">
                  <div className="fleet-price">
                    <span className="price-label">Lepas Kunci</span>
                    <span className="price-value">{formatPrice(car.pricePerDay)}</span>
                  </div>
                  <div className="fleet-price">
                    <span className="price-label">+ Driver</span>
                    <span className="price-value accent">{formatPrice(car.priceWithDriver)}</span>
                  </div>
                </div>
                <a
                  href={getWhatsAppUrl(`Halo RentalKu, saya ingin menyewa ${car.name}`)}
                  className="btn btn-primary fleet-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> Pesan Sekarang
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
