//import React from 'react'

import { Contador } from "./components/Contador";
import { ContadorConHook } from "./components/ContadorConHook";
import { Login } from "./components/Login";
import { Funciones } from "./typescript/Funciones";
import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { TiposBasicos } from "./typescript/TiposBasicos";

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a typescritps</h1>
      <hr />
      <Login/>
      {/* <ContadorConHook/> */}
      {/*  <Funciones/>
       */}
      {/* 
        <ObjetosLiterales/> */}
      {/* <TiposBasicos/> */}
    </div>
  );
};

export default App;
