import { useScrollReveal, useStaggerReveal } from '../utils/helpers';
import { FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';
import './Coverage.css';

export default function Coverage() {
  const containerRef = useStaggerReveal();
  const mapRef = useScrollReveal();

  const jabodetabek = ['Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Barat', 'Jakarta Timur', 'Jakarta Utara', 'Bogor', 'Depok', 'Tangerang', 'Tangerang Selatan', 'Bekasi'];
  const java = ['Bandung', 'Cirebon', 'Semarang', 'Yogyakarta', 'Solo', 'Surabaya', 'Malang', 'Banyuwangi'];

  return (
    <section className="coverage section" id="area-layanan" ref={containerRef}>
      <div className="container">
        <div className="coverage-inner">
          <div className="coverage-content reveal-left">
            <span className="section-label">Area Layanan</span>
            <h2 className="section-title">Jabodetabek & Seluruh Pulau Jawa</h2>
            <p className="section-subtitle" style={{ marginLeft: 0, textAlign: 'left' }}>
              Kami melayani sewa harian dan lepas kunci untuk area Jabodetabek. Untuk kebutuhan luar kota, layanan escort kami siap mengantar Anda ke berbagai tujuan di Pulau Jawa.
            </p>

            <div className="coverage-lists">
              <div className="coverage-col">
                <h3 className="coverage-subtitle"><FaMapMarkerAlt /> Area Jabodetabek</h3>
                <ul className="coverage-list">
                  {jabodetabek.slice(0, 6).map((city, i) => (
                    <li key={i}><FaCheckCircle className="check-icon" /> {city}</li>
                  ))}
                  <li>Dan sekitarnya...</li>
                </ul>
              </div>

              <div className="coverage-col">
                <h3 className="coverage-subtitle"><FaRoute /> Rute Jawa (Escort)</h3>
                <ul className="coverage-list">
                  {java.slice(0, 6).map((city, i) => (
                    <li key={i}><FaCheckCircle className="check-icon" /> {city}</li>
                  ))}
                  <li>Dan kota lainnya...</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="coverage-visual reveal-right" ref={mapRef}>
            {/* Using CSS gradient to simulate a map visual instead of an image for simplicity and style */}
            <div className="map-illustration">
              <div className="map-pin pin-jkt">
                <div className="pin-dot"></div>
                <span className="pin-label">Jabodetabek</span>
              </div>
              <div className="map-route"></div>
              <div className="map-pin pin-bdg">
                <div className="pin-dot"></div>
                <span className="pin-label">Bandung</span>
              </div>
              <div className="map-pin pin-smg">
                <div className="pin-dot"></div>
                <span className="pin-label">Semarang</span>
              </div>
              <div className="map-pin pin-sby">
                <div className="pin-dot"></div>
                <span className="pin-label">Surabaya</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaRoute(props) {
  return (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M416 320h-96c-17.6 0-32-14.4-32-32s14.4-32 32-32h96s96-107.4 96-160-43-96-96-96-96 43-96 96c0 25.1 22.2 63.1 42.6 100.9l-8.5 7.1C325.7 228.3 288 256 288 256s-37.7-27.7-66.1-51.1l-8.5-7.1C233.8 159.9 256 121.9 256 96c0-53-43-96-96-96S64 43 64 96c0 52.6 96 160 96 160h96c17.6 0 32 14.4 32 32s-14.4 32-32 32H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-64c0-35.3-28.7-64-64-64zM160 96c0-17.6-14.4-32-32-32s-32 14.4-32 32c0 14.2 19 46.5 32 68.6 13-22.1 32-54.4 32-68.6z"></path>
    </svg>
  );
}
