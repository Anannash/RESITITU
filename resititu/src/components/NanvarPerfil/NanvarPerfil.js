import React from 'react';
import './NanvarPerf.css';
import logo from '../../img/LOGO_TEC2.png'; // Importa el archivo CSS desde el mismo directorio
import usuario from '../../img/usuario.png';

const NanvarPerfil = () => {
  return (
    <div className="navbarp">
      <nav className="nav-contentp">
        <img src={logo} alt="Logo del Tec 2" className="logop" />
        <span className="nomb-instp">Titulacion</span>
        <span className="nombre_Profep">Prof. Elmo</span>
        <img src={usuario} alt="usuario" className="usuariop" />
      </nav>
    </div>
  );
}

export default NanvarPerfil;