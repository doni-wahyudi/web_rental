import { useState } from 'react';
import { faqData } from '../data/faq';
import { useStaggerReveal } from '../utils/helpers';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FAQ.css';

export default function FAQ({ limit }) {
  const [openId, setOpenId] = useState(1);
  const containerRef = useStaggerReveal();

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const displayedFaq = limit ? faqData.slice(0, limit) : faqData;

  return (
    <section className="faq section" id="faq" ref={containerRef}>
      <div className="container">
        <div className="faq-inner">
          <div className="faq-intro reveal-left">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Pertanyaan Umum</h2>
            <p className="section-subtitle" style={{ marginLeft: 0, textAlign: 'left' }}>
              Temukan jawaban atas pertanyaan yang sering diajukan seputar layanan sewa mobil di RentalKu.
            </p>
            {limit && (
              <a href="/faq" className="btn btn-outline-dark" style={{ marginTop: '2rem' }}>
                Lihat Semua FAQ
              </a>
            )}
          </div>

          <div className="faq-accordion reveal-right">
            {displayedFaq.map((item, idx) => (
              <div 
                key={item.id} 
                className={`faq-item stagger-${(idx % 6) + 1} ${openId === item.id ? 'open' : ''}`}
              >
                <button className="faq-question" onClick={() => toggle(item.id)}>
                  <span>{item.question}</span>
                  <div className="faq-icon">
                    {openId === item.id ? <FaMinus /> : <FaPlus />}
                  </div>
                </button>
                <div 
                  className="faq-answer-wrapper" 
                  style={{ height: openId === item.id ? 'auto' : 0 }}
                >
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
