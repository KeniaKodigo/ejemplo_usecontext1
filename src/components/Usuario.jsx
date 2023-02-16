import React, { useContext } from 'react'
import { usuarioContext } from '../App'

export default function Hijo() {
    /**
     * Recueperando la informacion del usuario del contexto que hemos creado
     */

    const usuario = useContext(usuarioContext);

    return (
        <div>
            <h1>Componente HIJO</h1>
            {usuario && <p>Hola, {usuario.nombre}</p>}
        </div>
    )
}
