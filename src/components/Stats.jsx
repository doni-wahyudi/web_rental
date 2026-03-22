import { useState, useEffect, useRef } from 'react';
import { FaMapMarkedAlt, FaCarSide, FaSmile, FaRegCalendarCheck } from 'react-icons/fa';
import './Stats.css';

const stats = [
  { id: 1, icon: FaCarSide, value: 50, suffix: '+', label: 'Armada Tersedia' },
  { id: 2, icon: FaSmile, value: 5000, suffix: '+', label: 'Pelanggan Puas' },
  { id: 3, icon: FaMapMarkedAlt, value: 25, suffix: '+', label: 'Kota Tujuan' },
  { id: 4, icon: FaRegCalendarCheck, value: 10, suffix: '+', label: 'Tahun Pengalaman' },
];

function CountUp({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function: easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={ref} className="stat-number">{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="stat-item">
                <Icon className="stat-icon" />
                <CountUp end={stat.value} suffix={stat.suffix} />
                <span className="stat-label">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
