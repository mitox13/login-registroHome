import React, { useContext } from 'react'
import AuthContext from '../../../../context/authLoginClienteContext'



const PantallaPrincipalClienteLogueado = () => {
    const { clientelogueado } = useContext(AuthContext)
    return (
        <div>

            <h1 className='text-white text-center'>Bienvenido {clientelogueado.correo}  </h1>
        </div>
    )
}

export default PantallaPrincipalClienteLogueado
