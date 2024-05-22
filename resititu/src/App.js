
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './tailwind.css'; 
import { InicioSesion } from './components/Inicio/InicioSesion';
import NanvarHorizontal from './components/Nanvar/NanvarHorizontal';
import PerfilPr from './components/Profesor/PerfilPr.js';



function App() {
  return (
    
    <div className="App">

      {/*  <Routes><Route path="/perfil" element={<PerfilPr/>} /></Routes>*/ }
     
  
      <NanvarHorizontal/>
     
      <header className="App-header">
        
      {/*<InicioSesion/>*/}
       <PerfilPr/>
        

        
      </header>
   


    </div>
  );
}

export default App;
