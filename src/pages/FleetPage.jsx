import Fleet from '../components/Fleet';

export default function FleetPage() {
  return (
    <main className="page-wrapper" style={{ paddingTop: 'var(--navbar-height)' }}>
      <div className="page-header bg-dark">
        <div className="container text-center">
          <h1 className="page-title text-white">Armada Lengkap Kami</h1>
          <p className="page-subtitle text-light">Pilihan kendaraan terbaik untuk setiap perjalanan Anda</p>
        </div>
      </div>
      <Fleet showAll={true} />
    </main>
  );
}
