import React, { createContext } from 'react';
import { useState } from 'react'
import './App.css'
import Usuario from './components/Usuario';
import Correo from './components/Correo';

//Creando un contexto
export const usuarioContext = createContext();

function App() {
  const [user, setUser] = useState(null)


  const cambiarLogin = () => {
    if(user){
      setUser(null);
    }else{
      setUser({
        nombre: "Kenia",
        correo: "kenia@gmail.com"
      })
    }
  }

  return (
    /**
     * Envolvemos los componentes al contexto que acabamos de crear
     * con el Provider le estamos diciendo al contexto que vamos a pasar informacion a los 
     * componentes que estan dentro.
     */
    <usuarioContext.Provider value={user}>
      <button onClick={cambiarLogin}>Cambiar Login</button>
      <div className="App">
        <Usuario />
        <Correo />

        
      </div>
    </usuarioContext.Provider>
  )
}

export default App
