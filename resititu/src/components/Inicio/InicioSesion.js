import React from 'react'
import './InicioS.css';


export const InicioSesion = () => {
  return (
    <div className='cuadro'>
      <h1>Inicio de Sesion</h1>

      <h3> Ingrese su numero de control: </h3>
      <><input type="text" placeholder="Numero de control" /></>

      <h3> Ingrese su contraseña: </h3>
      <><input type="password" placeholder="Contraseña" /></>

      <p><button 
          className="bg-transparent hover:bg-rojoVino text-rojoVino font-semibold
                     hover:text-white py-2 px-4 border 
                     border-rojoVino hover:border-transparent rounded"
        >
        Iniciar Sesión</button></p>
      
        
     




    </div>
  )
}
