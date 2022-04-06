//import React from 'react'
/* 
import { Contador } from "./components/Contador";
import { ContadorConHook } from "./components/ContadorConHook";
import { Login } from "./components/Login";
import { Funciones } from "./typescript/Funciones";
import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { TiposBasicos } from "./typescript/TiposBasicos"; */
/* import { Usuarios } from "./components/Usuarios"; */

import { Formularios } from "./components/Formularios";

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introduccion a TS - React </h1>
      <hr />
      <Formularios/>
      {/*   <Usuarios/> */}
      {/* <Login/> */}
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
