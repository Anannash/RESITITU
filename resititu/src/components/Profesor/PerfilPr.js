import React, { useState , useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './PerfilPr.css';
import axios from 'axios';



const PerfilPr = () => {
  const [mostrarContenidoI, setMostrarContenidoI] = useState(false);
  const [datos, setDatos] = useState([]);
  const [mostrarContenidoA1, setMostrarContenidoA1] = useState(false);
  const [mostrarContenidoA2, setMostrarContenidoA2] = useState(false);
  const [IsChecked, setIsChecked] = useState(false);
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
    FechaSol: new Date().toLocaleDateString('en-US'),
    ingles: '',
    recidencias: '',
    expediente: '',
    contrasena: '',
  });

  const handleInicioClick = () => {
    setMostrarContenidoI(!mostrarContenidoI);
  };

  const handleAnexo1Click = () => {
    setMostrarContenidoA1(!mostrarContenidoA1);
  };

  const handleAnexo2Click = () => {
    setMostrarContenidoA2(!mostrarContenidoA2);
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
          FechaSol: new Date().toLocaleDateString(),
          ingles: '',
          recidencias: '',
          expediente: '',
          contrasena: '',
          
        });
        toast.success('Registro Completado')
      })
      .catch(error => {
        toast.error('Error al añadir el estudiante:', error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/estudiantes');
        setDatos(response.data);
      } catch (error) {
        toast.error('Error al obtener los datos:', error);
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

  const handleEnviarCorreoV = (nombreEstudiante) => {
    window.location.href = `mailto:vinc_syc@chihuahua2.tecnm.mx?subject=Solicitar Titulacion de ${nombreEstudiante}&body=Aqui coloca la solicitud`;
    toast('Redireccionado a su correo', {
      icon: '👏',
    });
  };

  const handleEnviarCorreoE = (correoEstudiante) => {
    window.location.href = `mailto:${correoEstudiante}?subject=Se acepto el proceso de Titulacion por parte de 
    Vinculacion &body=Felicidades, ahora ...`;
    toast('Redireccionado a su correo', {
      icon: '👏',
    });
  };

  return (
    <div className="BodyPer">
      <div className='container'>
        <nav className='NavegadorVer'>
          <ul>
            <li><a href="#" onClick={handleInicioClick}>Inicio</a></li>
            <li><a href="#" onClick={handleAnexo1Click}>Anexo 1</a></li>
            <li><a href="#" onClick={handleAnexo2Click}>Anexo 2</a></li>
            <li><a href="#">Anexo 3</a></li>
            <li><a href="#">Anexo 4</a></li>
          </ul>
        </nav>
          {/* *************************************INICIO ******************************** */}
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
                <label style={{ display: 'block' }}>Ingles</label>
                <select name="ingles"  
                value={estudiante.ingles}
                onChange={handleInputChange}>
                <option value="Si">Si</option>
                <option value="No">No</option>
                </select>
                </div>

                <div>
                <label style={{ display: 'block' }}>Recidencias</label>
                <select name="recidencias"  
                value={estudiante.recidencias}
                onChange={handleInputChange}>
                <option value="Si">Si</option>
                <option value="No">No</option>
                </select>
                </div>
               

                <div>
                <label style={{ display: 'block' }}>Expediente</label>
                <select name="expediente"  
                value={estudiante.expediente}
                onChange={handleInputChange}>
                <option value="Si">Si</option>
                <option value="No">No</option>
                </select>
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

          {/* ****************************ANEXO 1************************************** */}
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
                  <th className="col-acciones">Envio</th>
                </tr>
              </thead>
              <tbody>
                {datos.map((item, index) => (
                  <tr key={index}>
                    <td className="col-control">{item.NoControl}</td>
                    <td className="col-nombre">{`${item.nombre} ${item.apellidoP} ${item.apellidoM}`}</td>
                    <td className="col-fecha">{item.FechaSol}</td>
                    <td className="col-correo">{`${item.correo}`}</td>
                    <td className="col-ingles">
                      <input
                     
                        type="checkbox"
                        checked={item.ingles === ("Si" || "SI" || 'si')}
                       
                        readOnly
                        
                       
                      />
                    </td>
                    <td className="col-solicitud">
                      <input
                        type="checkbox"
                        checked={botonesVisibles[index] || false}
                        onChange={() => handleSolicitudChange(index)}
                        readOnly
                      />
                      
                    </td>
                    <td className="col-acciones">
                      {botonesVisibles[index] && (
                        <button
                          className='BotonMail font-bold text-2xl text-neutral-50'
                          onClick={() => handleEnviarCorreoV(`${item.nombre} ${item.apellidoP} ${item.apellidoM} ${item.NoControl}`)}
                        >
                          Enviar correo a Vinculacion
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
           
          </div>
        )}

            {/* ***************************************ANEXO 2*************************************/}
          {mostrarContenidoA2 &&(
              <div className="table-container">
                <table>
              <thead>
                <tr>
                  <th className="col-control">No. Control</th>
                  <th className="col-nombre">Nombre</th>
                  <th className="col-fecha">Fecha Solicitud</th>
                  <th className="col-Recidencias">Recidencias</th>
                  <th className="col-expediente">Expediente</th>
                  <th className="col-notificar">Notificar</th>
                </tr>
              </thead>
              <tbody>
                {datos.map((item, index) => (
                  <tr key={index}>
                    <td className="col-control">{item.NoControl}</td>
                    <td className="col-nombre">{`${item.nombre} ${item.apellidoP} ${item.apellidoM}`}</td>
                    <td className="col-fecha">{item.FechaSol}</td>
                    <td className="col-Recidencias">
                      <input
                     
                        type="checkbox"
                        checked={item.recidencias === ("Si" || "SI" || 'si')}
                       
                        readOnly
                        
                       
                      />
                    </td>
                    <td className="col-expediente">
                      <input
                        type="checkbox"
                        checked={item.Expediente === ("Si" || "SI" || 'si')}
                       
                        readOnly
                      />
                      
                    </td>
                    <td className="col-notificar">
                      
                        <button
                          className='BotonMail font-bold text-2xl text-neutral-50'
                          onClick={() => handleEnviarCorreoE(`${item.correo}`)}
                        >
                          Enviar correo al Estudiante
                        </button>
                     
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>


              </div>


          )}

      </div>
      <ToastContainer />
    </div>
  );
};

export default PerfilPr;