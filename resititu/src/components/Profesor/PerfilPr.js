import React, { useState } from 'react';
import './PerfilPr.css';

const PerfilPr = () => {
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [datos, setDatos] = useState([]);

  const handleClick = () => {
    setMostrarContenido(!mostrarContenido);
    if (!mostrarContenido) {
      fetchData();
    }
  };
  const fetchData = async () => {
    const data = [
      {
        id: 1,
        nombre: 'Don Ramon',
        fechaSolicitud: '15/02/1995',
        correoInstitucional: 'guapoPoderosoAsombrosoMuyHermoso@gmail.com',
        ingles: true,
        solicitud: false
      }
      // Puedes agregar más objetos según necesites
    ];
    setDatos(data);
  };

  return (
    <div className='container'>
      <nav className='NavegadorVer'>
        <ul>
          <li><a href="./components/Inicio/InicioS.js">Inicio</a></li>
          <li><a href="#" onClick={handleClick}>Anexo 1</a></li>
          <li><a href="#">Anexo 2</a></li>
          <li><a href="#">Anexo 3</a></li>
          <li><a href="#">Anexo 4</a></li>
        </ul>
      </nav>

      {mostrarContenido && (
        <div className="table-container">
          <p>Hola mundo</p>
          <table>
            <thead>
              <tr>
                <th style={{ width: '25%' }}>No. Control</th>
                <th style={{ width: '135%' }}>Nombre</th>
                <th style={{ width: '40%' }}>Fecha Solicitud</th>
                <th style={{ width: '100%' }}>Correo Institucional</th>
                <th style={{ width: '50%' }}>Inglés</th>
                <th style={{ width: '50%' }}>Solicitud</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.nombre}</td>
                  <td>{item.fechaSolicitud}</td>
                  <td>{item.correoInstitucional}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={item.ingles}
                      onChange={() => {
                        const newDatos = [...datos];
                        newDatos[index].ingles = !newDatos[index].ingles;
                        setDatos(newDatos);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={item.solicitud}
                      onChange={() => {
                        const newDatos = [...datos];
                        newDatos[index].solicitud = !newDatos[index].solicitud;
                        setDatos(newDatos);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PerfilPr;