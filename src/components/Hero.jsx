import { useState, useEffect, useCallback } from 'react';
import { heroSlides } from '../data/heroSlides';
import { getWhatsAppUrl } from '../utils/helpers';
import { FaChevronLeft, FaChevronRight, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import './Hero.css';

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [textVisible, setTextVisible] = useState(true);
  const total = heroSlides.length;

  const goTo = useCallback((idx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTextVisible(false);

    setTimeout(() => {
      setCurrent(idx);
      setTimeout(() => {
        setTextVisible(true);
        setIsAnimating(false);
      }, 100);
    }, 500);
  }, [isAnimating]);

  const next = useCallback(() => goTo((current + 1) % total), [current, total, goTo]);
  const prev = useCallback(() => goTo((current - 1 + total) % total), [current, total, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section className="hero" id="hero">
      {/* Background Images */}
      {heroSlides.map((s, idx) => (
        <div
          key={s.id}
          className={`hero-bg ${idx === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${s.image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Decorative Elements */}
      <div className="hero-deco hero-deco-1" />
      <div className="hero-deco hero-deco-2" />

      {/* Content */}
      <div className="hero-content container">
        <div className={`hero-text ${textVisible ? 'visible' : ''}`}>
          <span className="hero-badge">🚗 Rental Mobil Terpercaya</span>
          <h1 className="hero-title">
            {slide.title}
            <span className="hero-title-accent"> {slide.subtitle}</span>
          </h1>
          <p className="hero-description">{slide.description}</p>
          <div className="hero-ctas">
            <a
              href={getWhatsAppUrl(`Halo RentalKu, saya tertarik dengan layanan ${slide.title}`)}
              className="btn btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> {slide.cta}
            </a>
            <a href="#armada" className="btn btn-outline btn-lg">
              Lihat Armada <FaArrowRight />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="hero-nav">
        <button className="hero-arrow hero-arrow-prev" onClick={prev} aria-label="Previous">
          <FaChevronLeft />
        </button>
        <div className="hero-dots">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              className={`hero-dot ${idx === current ? 'active' : ''}`}
              onClick={() => goTo(idx)}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
        <button className="hero-arrow hero-arrow-next" onClick={next} aria-label="Next">
          <FaChevronRight />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
