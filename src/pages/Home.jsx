import Hero from '../components/Hero';
import Services from '../components/Services';
import Fleet from '../components/Fleet';
import Stats from '../components/Stats';
import Coverage from '../components/Coverage';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <Fleet limit={4} />
      <Coverage />
      <Testimonials />
      <FAQ limit={4} />
    </main>
  );
}
