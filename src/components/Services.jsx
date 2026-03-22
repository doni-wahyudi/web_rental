import { FaCar, FaCalendarAlt, FaPlane, FaRoute } from 'react-icons/fa';
import { services } from '../data/services';
import { useStaggerReveal } from '../utils/helpers';
import './Services.css';

const iconMap = {
  FaCar: FaCar,
  FaCalendarAlt: FaCalendarAlt,
  FaPlane: FaPlane,
  FaRoute: FaRoute,
};

export default function Services() {
  const containerRef = useStaggerReveal();

  return (
    <section className="services section" id="layanan" ref={containerRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Layanan Kami</span>
          <h2 className="section-title">Solusi Rental Mobil Lengkap</h2>
          <p className="section-subtitle">
            Dari sewa harian hingga escort antar kota, kami siap melayani kebutuhan transportasi Anda
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className={`service-card reveal stagger-${idx + 1}`}
              >
                <div className="service-icon-wrap">
                  <IconComponent className="service-icon" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((f, i) => (
                    <li key={i}>✓ {f}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
