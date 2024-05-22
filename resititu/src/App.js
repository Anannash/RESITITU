import logo from './logo.svg';
import './App.css';
import  PerfilPr  from "./components/PerfilPr";
import { InicioSesion } from './components/Inicio/InicioSesion';
import  Nanvar_Horizontal  from './components/Nanvar/Nanvar_Horizontal';



function App() {
  return (
    
    <div className="App">
      <Nanvar_Horizontal/>
     
      <header className="App-header">
        
        

        
       
       <InicioSesion/>
        

        
      </header>
      <PerfilPr/>


    </div>
  );
}

export default App;
