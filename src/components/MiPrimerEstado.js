import React, {useState} from 'react';

export const MiPrimerEstado = () => {
    /*
    let nombre = "Carmen Sánchez";

    const cambiarNombre = e => {
        nombre = "Lizzie Young";
    }
    */

    const[nombre, setNombre] = useState("Carmen Sánchez");
    const cambiarNombre = (e, nombreFijo) => {
        setNombre(nombreFijo);
    }

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong className='label'>{nombre}</strong>
        &nbsp;
        <button onClick={e => cambiarNombre(e, "Lizzie")}>CAMBIAR NOMBRE POR LIZZIE</button>
        &nbsp;
        <input type="text" onKeyUp={e => cambiarNombre(e, e.target.value)} placeholder='Cambia el nombre'/>
    </div>
  )
}
