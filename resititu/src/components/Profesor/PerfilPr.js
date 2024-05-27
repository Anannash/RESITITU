import React, { useState , useEffect } from 'react';
import './PerfilPr.css';
import axios from 'axios';



const PerfilPr = () => {
  const [mostrarContenidoI, setMostrarContenidoI] = useState(false);
  const [datos, setDatos] = useState([]);
  const [mostrarContenidoA1, setMostrarContenidoA1] = useState(false);
  const [botonesVisibles, setBotonesVisibles] = useState({});

  const [estudiante, setEstudiante] = useState({
    NoControl: '',
    nombre: '',
    apellidoP: '',
    apellidoM: '',
    no_creditos: '',
    semestre: '',
    carrera: '',
    correo: '',
    FechaSol: new Date().toISOString().split('T')[0],
    ingles: '',
    contrasena: '',
  });

  const handleInicioClick = () => {
    setMostrarContenidoI(!mostrarContenidoI);
  };

  const handleAnexo1Click = () => {
    setMostrarContenidoA1(!mostrarContenidoA1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEstudiante({
      ...estudiante,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/estudiantes', estudiante)
      .then(response => {
        console.log('Estudiante añadido:', response.data);
        setEstudiante({
          NoControl: '',
          nombre: '',
          apellidoP: '',
          apellidoM: '',
          no_creditos: 0,
          semestre: 0,
          carrera: '',
          correo: '',
          FechaSol: new Date().toISOString().split('T')[0],
          ingles: '',
          contrasena: '',
        });
      })
      .catch(error => {
        console.error('Error al añadir el estudiante:', error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/estudiantes');
        setDatos(response.data);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  const handleSolicitudChange = (index) => {
    setBotonesVisibles((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleEnviarCorreo = (correo) => {
    window.location.href = 'mailto:vinc_syc@chihuahua2.tecnm.mx?subject=Solicitar Titulacion&body=Aqui coloca la solicitud"';
    
  };

  return (
    <div className="BodyPer">
      <div className='container'>
        <nav className='NavegadorVer'>
          <ul>
            <li><a href="#" onClick={handleInicioClick}>Inicio</a></li>
            <li><a href="#" onClick={handleAnexo1Click}>Anexo 1</a></li>
            <li><a href="#">Anexo 2</a></li>
            <li><a href="#">Anexo 3</a></li>
            <li><a href="#">Anexo 4</a></li>
          </ul>
        </nav>

        {mostrarContenidoI && (
          <div className="IngresoTemporal bg-fondoB">
            <h1 className='bg'>Registro Temporal</h1>

            <form onSubmit={handleSubmit}>
              <div>
                <label style={{ display: 'block' }}>No Control</label>
                <input
                  type='Number'
                  name='NoControl'
                  value={estudiante.NoControl}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label style={{ display: 'block' }}>Nombre</label>
                <input
                  type='String'
                  name='nombre'
                  value={estudiante.nombre}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label style={{ display: 'block' }}>Apellido paterno</label>
                <input
                  type='String'
                  name='apellidoP'
                  value={estudiante.apellidoP}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label style={{ display: 'block' }}>Apellido materno</label>
                <input
                  type='String'
                  name='apellidoM'
                  value={estudiante.apellidoM}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label style={{ display: 'block' }}>Carrera</label>
                <input
                  type='String'
                  name='carrera'
                  value={estudiante.carrera}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label style={{ display: 'block' }}>Contrasena</label>
                <input
                  type='password'
                  name='contrasena'
                  value={estudiante.contrasena}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label style={{ display: 'block' }}>Correo</label>
                <input
                  type='String'
                  name='correo'
                  value={estudiante.correo}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label style={{ display: 'block' }}>No. de creditos</label>
                <input
                  type='Number'
                  name='no_creditos'
                  value={estudiante.no_creditos}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label style={{ display: 'block' }}>Semestre Actual</label>
                <input
                  type='Number'
                  name='semestre'
                  value={estudiante.semestre}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label style={{ display: 'block' }}>Fecha de Solicitud</label>
                <input
                  type='Date'
                  name='FechaSol'
                  value={estudiante.FechaSol}
                  onChange={handleInputChange}
                />
              </div>

              <button>Guardar</button>
            </form>
          </div>
        )}

        {mostrarContenidoA1 && (
          <div className="table-container bg-fondoB">
            <table>
              <thead>
                <tr>
                  <th className="col-control">No. Control</th>
                  <th className="col-nombre">Nombre</th>
                  <th className="col-fecha">Fecha Solicitud</th>
                  <th className="col-correo">Correo Institucional</th>
                  <th className="col-ingles">Inglés</th>
                  <th className="col-solicitud">Solicitud</th>
                </tr>
              </thead>
              <tbody>
                {datos.map((item, index) => (
                  <tr key={index}>
                    <td className="col-control">{item.NoControl}</td>
                    <td className="col-nombre">{item.nombre + " " + item.apellidoP + " " + item.apellidoM}</td>
                    <td className="col-fecha">{item.FechaSol}</td>
                    <td className="col-correo">{item.correo}</td>
                    <td className="col-ingles">
                      <input
                        type="checkbox"
                        checked={item.ingles}
                        readOnly
                      />
                    </td>
                    <td className="col-solicitud">
                      <input
                        type="checkbox"
                        checked={botonesVisibles[index] || false}
                        onChange={() => handleSolicitudChange(index)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {Object.keys(botonesVisibles).map(index => botonesVisibles[index] && (
              <div key={index}>
                <button className='BotonMail font-bold text-2xl text-neutral-50' onClick= {handleEnviarCorreo}>
                  Enviar correo a Vinculacion  Sistemas Y Computacion ITCH II
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PerfilPr;