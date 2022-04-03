import React from "react";

export const TiposBasicos = () => {
  //Tipos de datos en typescript....

  let nombre: string = "Alfonso"; // de esta forma le digo de que tiopo de dato es mi variable
  //  string | number nos menciona que podemos declarar de dos formas distintas.  son mutaciones

  const edad: number = 22;

  const estadoActivo: boolean = true;

  //arreglo

  const poderes : string[] = [];
  poderes.push('wq')
  return (
    <>
      <h3>Tipos basicos </h3>
      {nombre} , {edad}
      <br />
      {poderes.join(", ")}
    </>
  );
};
