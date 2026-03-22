import { useState, useEffect, useCallback } from 'react';
import { testimonials } from '../data/testimonials';
import { useStaggerReveal } from '../utils/helpers';
import { FaStar, FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Testimonials.css';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const containerRef = useStaggerReveal();
  const total = testimonials.length;

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((prev) => (prev - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="testimonials section" id="testimoni" ref={containerRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Testimoni Pelanggan</span>
          <h2 className="section-title">Apa Kata Mereka?</h2>
        </div>

        <div className="testi-slider reveal-scale">
          <FaQuoteRight className="testi-quote-icon" />
          
          <div 
            className="testi-track" 
            style={{ 
              width: `${total * 100}%`,
              transform: `translateX(-${current * (100 / total)}%)` 
            }}
          >
            {testimonials.map((testi) => (
              <div 
                key={testi.id} 
                className="testi-slide"
                style={{ flex: `0 0 ${100 / total}%`, width: `${100 / total}%` }}
              >
                <div className="testi-card">
                  <div className="testi-stars">
                    {[...Array(testi.rating)].map((_, i) => (
                      <FaStar key={i} className="star-icon" />
                    ))}
                  </div>
                  <p className="testi-text">"{testi.text}"</p>
                  <div className="testi-author">
                    <div className="testi-avatar">
                      {testi.name.charAt(0)}
                    </div>
                    <div className="testi-author-info">
                      <h4>{testi.name}</h4>
                      <span>{testi.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="testi-controls">
            <button onClick={prev} aria-label="Previous testi"><FaChevronLeft /></button>
            <div className="testi-dots">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={idx === current ? 'active' : ''}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            <button onClick={next} aria-label="Next testi"><FaChevronRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
