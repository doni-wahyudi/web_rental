import FAQ from '../components/FAQ';

export default function FAQPage() {
  return (
    <main className="page-wrapper" style={{ paddingTop: 'var(--navbar-height)' }}>
      <div className="page-header bg-dark">
        <div className="container text-center">
          <h1 className="page-title text-white">Pusat Bantuan (FAQ)</h1>
          <p className="page-subtitle text-light">Temukan jawaban untuk semua pertanyaan Anda</p>
        </div>
      </div>
      <FAQ />
    </main>
  );
}
