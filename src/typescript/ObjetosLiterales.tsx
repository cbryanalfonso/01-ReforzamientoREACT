/* 
type, class, interface
class = sirve para crear interfaces */

interface Persona{
    nombreCompleto: string,
    edad: number,
    direccion: Direccion
}
interface Direccion{
    pais: string,
    municipio: string,
}

export const ObjetosLiterales = () => {
    const persona: Persona ={
        nombreCompleto: 'Alfonso',
        edad: 22,
        direccion:{
            pais: 'Mexico',
            municipio: 'Jocotitlan',
        }
    }
   // persona.nombreCompleto= 'skdfjhskjfdh' // se le tiene que decir a typescript
  return (
    <>
        <h3>Objetos literales</h3>   
        {/* {JSON.stringify(persona)} */}
        <code>
            <pre>
            {JSON.stringify(persona, null, 2)} 
            </pre>
        </code>
    </>
  )
}
