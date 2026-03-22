import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import FleetPage from './pages/FleetPage';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQPage from './pages/FAQPage';
import './App.css';
import './pages/Contact.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/armada" element={<FleetPage />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/kontak" element={<Contact />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </BrowserRouter>
  );
}

export default App;
