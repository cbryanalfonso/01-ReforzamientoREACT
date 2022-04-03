import React from "react";

export const Funciones = () => {
  const sumar = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado de sumar es {sumar(34, 10)}</span>
    </>
  );
};
