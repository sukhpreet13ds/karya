import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './style/style.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Footer from './components/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const handleOpenWhatsApp = (serviceName = '') => {
    window.open(
      `https://wa.me/919896093951?text=${encodeURIComponent(
        `Hi Karya Marketing, I would like to book a query${serviceName ? ` about ${serviceName}` : ''}.`
      )}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-layout">
        <Navbar onOpenQueryModal={handleOpenWhatsApp} />
        <Routes>
          <Route path="/" element={<Home onOpenQueryModal={handleOpenWhatsApp} />} />
          <Route path="/about" element={<About onOpenQueryModal={handleOpenWhatsApp} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services onOpenQueryModal={handleOpenWhatsApp} />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Home onOpenQueryModal={handleOpenWhatsApp} />} />
        </Routes>
        <Footer onOpenQueryModal={handleOpenWhatsApp} />
      </div>
    </BrowserRouter>
  );
}

export default App;
