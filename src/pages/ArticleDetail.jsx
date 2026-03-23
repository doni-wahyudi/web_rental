import { useParams, Link, Navigate } from 'react-router-dom';
import { articles } from '../data/articles';
import { useScrollReveal } from '../utils/helpers';
import { FaCalendarAlt, FaUser, FaTag, FaArrowLeft } from 'react-icons/fa';
import './Articles.css';

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);
  const contentRef = useScrollReveal();

  if (!article) {
    return <Navigate to="/artikel" replace />;
  }

  return (
    <main className="page-wrapper" style={{ paddingTop: 'var(--navbar-height)' }}>
      <div className="container" style={{ paddingTop: 'var(--space-8)', paddingBottom: 'var(--space-20)', maxWidth: '900px' }}>
        <Link to="/artikel" className="btn btn-outline-dark mb-4" style={{ display: 'inline-flex', padding: '10px 20px', fontSize: 'var(--font-size-sm)' }}>
          <FaArrowLeft /> Kembali ke Blog
        </Link>
        
        <article ref={contentRef} className="reveal-scale">
          <div className="article-meta mb-3" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-primary)', justifyContent: 'flex-start', gap: '1.5rem' }}>
            <span><FaTag style={{ color: 'var(--color-accent)' }} /> {article.category}</span>
            <span><FaCalendarAlt style={{ color: 'var(--color-accent)' }} /> {article.date}</span>
            <span><FaUser style={{ color: 'var(--color-accent)' }} /> {article.author}</span>
          </div>
          
          <h1 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--color-primary)', lineHeight: 1.2 }}>
            {article.title}
          </h1>
          
          <img src={article.image} alt={article.title} className="article-detail-img" />
          
          {/* Render HTML content safely */}
          <div className="article-detail-body" dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>
      </div>
    </main>
  );
}
