const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//configurar espress
const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Titulacion', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
  console.log('Conexión establecida con la base de datos MongoDB');
});

const estudiantesC = new mongoose.Schema({
    NoControl: Number,
  nombre: String,
  apellidoP: String,
  apellidoM: String,
  no_creditos: Number,
  semestre: Number,
  carrera: String,
  correo: String,
  FechaSol: Date,
  ingles: String,
  contrasena:String,

});

const asesorExt = new mongoose.Schema({
    NoControl: Number,
  nombre: String,
  apellidoP: String,
  apellidoM: String,
  correo: String,
  telefono: Number

});

const asesorInt = new mongoose.Schema({
    NoControl: Number,
  nombre: String,
  apellidoP: String,
  apellidoM: String,
  correo: String,
  telefono: Number,
  status: ['FDD','Completo','Dado de baja'],
  cargoJefatura: String,
  TipoMaestro: String

});

const proyecto = new mongoose.Schema({
    
    nombrePr: String,
    estudiante: {
        type: Number,
        ref: 'Estudiantes' // Referencia al modelo Estudiantes
    },
    asesorInterno: {
        type: Number,
        ref: 'AsesorInt' // Referencia al modelo AsesorInt
    },
    asesorExterno: {
        type: Number,
        ref: 'AsesorExt' // Referencia al modelo AsesorExt
    },
    liberacion:String,
    documento:Buffer


});


// Crear el modelo
const Estudiante = mongoose.model('Estudiantes', estudiantesC);
const aseExt = mongoose.model('AsesorEXT', asesorExt);
const aseInt = mongoose.model("AsesorINT", asesorInt);
const Proyecto = mongoose.model("Proyectos", proyecto);


//Ruta para anadir a un estudiante
app.post('/api/estudiantes', async (req, res) => {
  try {
    const newEsti = new Estudiante({
      NoControl: req.body.NoControl,
      nombre: req.body.nombre,
      apellidoP: req.body.apellidoP,
      apellidoM: req.body.apellidoM,
      no_creditos: req.body.no_creditos,
      semestre: req.body.semestre,
      carrera: req.body.carrera,
      correo: req.body.correo,
      FechaSol: req.body.FechaSol,
      ingles: req.body.ingles,
      contrasena: req.body.contrasena,
    });

    const item = await newEsti.save();
    res.status(200).send(item);
  } catch (err) {
    res.status(500).send(err);
  }
});
//Ruta para obtener datos de los Estudiantes
app.get('/api/estudiantes', async (req, res) => {
  try {
    const estudiantes = await Estudiante.find();
    res.status(200).send(estudiantes);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Inicia el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

