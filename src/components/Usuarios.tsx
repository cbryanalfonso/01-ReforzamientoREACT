import { Usuario } from "../interfaces/reqRes";
import { useUsuarios } from "../Hooks/useUsuarios";

export const Usuarios = () => {
  /* const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  const paginaRef = useRef(1)
  useEffect(() => {
      cargarUsuarios()
  }, []);

  const cargarUsuarios = async() => {
    const resp = await reqResApi.get<ReqResListado>("/users",{
        params:{
            page: paginaRef.current
        }
    })

    if ( resp.data.data.length > 0){
        setUsuarios(resp.data.data)
        paginaRef.current++;
    }else{
        alert('No hay nada');
    }
    
      
  };
 */

  //uso de customHooks...
  const { paginaAnterior, paginaSiguiente, usuarios } = useUsuarios();
  const renderItem = ({
    id,
    first_name,
    last_name,
    email,
    avatar,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{
              width: 50,
              borderRadius: 100,
            }}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios: </h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map(renderItem)}</tbody>
      </table>
      <button className="btn btn-primary" onClick={paginaAnterior}>
        Anteriores
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={paginaSiguiente}>
        Siguiente
      </button>
    </>
  );
};
