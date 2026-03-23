import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { useStaggerReveal } from '../utils/helpers';
import { FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';
import './Articles.css';

export default function Articles() {
  const listRef = useStaggerReveal('.article-card');

  return (
    <main className="page-wrapper" style={{ paddingTop: 'var(--navbar-height)' }}>
      <div className="page-header bg-dark">
        <div className="container text-center">
          <h1 className="page-title text-white">Blog & Artikel</h1>
          <p className="page-subtitle text-light">Beragam informasi menarik seputar otomotif, tips perjalanan, dan layanan rental mobil.</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container" ref={listRef}>
          <div className="articles-grid">
            {articles.map((article) => (
              <article key={article.id} className="article-card glass reveal-scale">
                <div className="article-image-wrapper">
                  <img src={article.image} alt={article.title} className="article-img" />
                  <span className="article-badge">{article.category}</span>
                </div>
                <div className="article-content">
                  <div className="article-meta">
                    <span><FaCalendarAlt /> {article.date}</span>
                    <span><FaUser /> {article.author}</span>
                  </div>
                  <h2 className="article-title">
                    <Link to={`/artikel/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <p className="article-excerpt">{article.excerpt}</p>
                  <Link to={`/artikel/${article.slug}`} className="btn btn-outline-dark mt-3">Baca Selengkapnya</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
