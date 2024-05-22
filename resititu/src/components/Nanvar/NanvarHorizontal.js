import React from 'react'
import './Nanvar.css';
import logo from '../../img/LOGO_TEC2.png'; 
 // Importa el archivo CSS desde el mismo directorio

const NanvarHorizontal = () => {
  return (
    <div className="navbar">
      <nav>
      <div className="image-container">
          <img src={logo} alt="Logo del Tec 2" className="logo-img" />
          
       
          </div>   
          <span className='nomb-inst'>Instituto Tecnológico de Chihuhua II
        

        </span>
       
        </nav>
        <nav>
         <span><strong>Recidencias y Titulacion</strong></span>
          </nav>
        
    </div>
  );
}

const NanvarHorizontalVer2 = () => {
  return (
    <div className="navbar">
      <nav>
      <div className="image-container">
          <img src={logo} alt="Logo del Tec 2" className="logo-img" />
          
       
          </div>   
          <span className='nomb-inst'>Instituto Tecnológico de Chihuhua II
        

        </span>
       
        </nav>
        <nav>
         <span><strong>Recidencias y Titulacion</strong></span>
          </nav>
        
    </div>
  );
}

export default NanvarHorizontal;

