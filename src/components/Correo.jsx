import React, { useContext } from 'react'
import { usuarioContext } from '../App'

export default function Correo() {
    const correo = useContext(usuarioContext);
    return (
        <div>
            {correo && <p>Correo: {correo.correo}</p>}
        </div>
    )
}
