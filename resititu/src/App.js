
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './tailwind.css'; 
import { InicioSesion } from './components/Inicio/InicioSesion';
import NanvarHorizontal from './components/Nanvar/NanvarHorizontal.js';
import PerfilPr from './components/Profesor/PerfilPr.js';
import React from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <NanvarHorizontal />
        <header className="App-header">
          <Routes>
            <Route path="/login" element={<InicioSesion />} />
            <Route path="/perfil" element={<PerfilPr />} />
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;