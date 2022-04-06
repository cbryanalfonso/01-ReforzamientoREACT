import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const paginaRef = useRef(1);

  useEffect(() => {
    //Llamado a la API
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResListado>("/users", {
      params: {
        page: paginaRef.current,
      },
    });

    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
    } else {
      alert("No hay nada");
      paginaRef.current--;
    }
  };

  const paginaSiguiente = () => {
   
    paginaRef.current++;
    cargarUsuarios();
  };

  const paginaAnterior = () => {
    if (paginaRef.current > 1) {
      
      paginaRef.current--;
      cargarUsuarios();
    }else{
        alert('No hay nada debajo hermano...')
    }
  };

  return {
    usuarios,
    paginaSiguiente,
    paginaAnterior,
  };
};
