import React, { useContext } from 'react'
import AuthContext from '../../../../context/authContext'


const PantallaPrincipalClienteLogueado = () => {

    const { clientelogueado } = useContext(AuthContext)
    return (
        <div className='container text-center text-white'>
            <br />
            <h1 className='text-center'>  PANTALLA PRINCIPAL CLIENTE LOGUEADO</h1>
            <br />
            <br />
            <h2>NUESTRAS ESPECIALIDADES </h2>
            <br />
            <br />
            <h2>Nombre(s)</h2>
            <h4>{clientelogueado.primerNombre + '    '+clientelogueado.segundoNombre}</h4>
            <h2>Apellidos</h2>
            <h4>{clientelogueado.apellidoPaterno + '   ' +clientelogueado.apellidoMaterno}</h4>
            <h2>Celular</h2>
            <h4>{clientelogueado.celular}</h4>
            <h2>Correo</h2>
            <h4>{clientelogueado.correo}</h4>
            <br />
            <br />
            <h2>NUESTROS PROFESIONALES</h2>
        </div>
    )
}

export default PantallaPrincipalClienteLogueado
