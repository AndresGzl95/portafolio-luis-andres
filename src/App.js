import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Certificaciones from './components/Certificaciones'; // Importa el componente
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/certificaciones" element={<Certificaciones />} /> {/* Agrega la ruta */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
