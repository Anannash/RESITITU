import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './InicioS.css';
import axios from 'axios';

export const InicioSesion = () => {
  const [controlNumber, setControlNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState('');
  const navigate = useNavigate();
  const [datos,setDatos] = useState([]);
  

  //sacar los datos de la tabla adminnistrador
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/administrador');
        setDatos(response.data);
      } catch (error) {
        toast.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // Validación simple de los campos de entrada
    if (!controlNumber || !password) {
      toast.error('Por favor, ingrese su número de control y contraseña.');
      return;
    }

    // Simulación de autenticación
    if (controlNumber === '21550748' && password === '12345678') {
      // Redirigir a otra página en caso de éxito
      navigate('/perfil');
    } else {
      toast.error('Número de control o contraseña incorrectos.');
    }
  };

  return (
    <div className="BodyIS">
      <div className='cuadro'>
        <h1>Inicio de Sesión</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <form onSubmit={handleLogin}>
          <h3>Ingrese su número de control:</h3>
          <input
            type="text"
            placeholder="Número de control"
            value={controlNumber}
            onChange={(e) => setControlNumber(e.target.value)}
          />

          <h3>Ingrese su contraseña:</h3>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p>
            <button
              type="submit"
              className="bg-transparent hover:bg-rojoVino text-rojoVino font-semibold
                         hover:text-white py-2 px-4 border 
                         border-rojoVino hover:border-transparent rounded"
            >
              Iniciar Sesión
            </button>
          </p>
        </form>
        <ToastContainer />

      </div>
    </div>
  );
};
