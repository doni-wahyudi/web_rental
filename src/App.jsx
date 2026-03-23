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
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import './App.css';
import './pages/Contact.css';

function App() {
  return (
    <BrowserRouter basename="/web_rental/">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/armada" element={<FleetPage />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/kontak" element={<Contact />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/artikel" element={<Articles />} />
        <Route path="/artikel/:slug" element={<ArticleDetail />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </BrowserRouter>
  );
}

export default App;
