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
import QueryModal from './components/QueryModal';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleOpenModal = (serviceName = '') => {
    setSelectedService(serviceName || '');
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-layout">
        <Navbar onOpenQueryModal={handleOpenModal} />
        <Routes>
          <Route path="/" element={<Home onOpenQueryModal={handleOpenModal} />} />
          <Route path="/about" element={<About onOpenQueryModal={handleOpenModal} />} />
          <Route path="/contact" element={<Contact onOpenQueryModal={handleOpenModal} />} />
          <Route path="/services" element={<Services onOpenQueryModal={handleOpenModal} />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Home onOpenQueryModal={handleOpenModal} />} />
        </Routes>
        <Footer onOpenQueryModal={handleOpenModal} />
        <QueryModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          initialService={selectedService}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
