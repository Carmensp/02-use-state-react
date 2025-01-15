import React, {useState} from 'react';

export const MiPrimerEstado = () => {
    /*
    let nombre = "Carmen Sánchez";

    const cambiarNombre = e => {
        nombre = "Lizzie Young";
    }
    */

    const[nombre, setNombre] = useState("Carmen Sánchez");
    const cambiarNombre = e => {
        setNombre("Lizzie Young");
    }

  return (
    <div>
        <h3>Componente: MiPrimerEstado</h3>
        <strong>{nombre}</strong>
        &nbsp;
        <button onClick={cambiarNombre}>CAMBIAR</button>
    </div>
  )
}
