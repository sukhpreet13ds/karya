import React, { useState } from 'react';
import './style/style.css';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import QueryModal from './components/QueryModal';

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
    <div className="app-layout">
      <Navbar onOpenQueryModal={handleOpenModal} />
      <Home onOpenQueryModal={handleOpenModal} />
      <QueryModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        initialService={selectedService}
      />
    </div>
  );
}

export default App;
