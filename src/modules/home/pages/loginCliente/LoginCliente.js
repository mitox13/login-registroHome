import React, { useState, useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../../../../context/authContext'
import { useHistory } from 'react-router-dom'
import { getClientes } from './../../../services/clienteService'
import Swal from 'sweetalert2'

const LoginCliente = () => {
    
    
    const [formulario, setFormulario] = useState({
        correo: '',
        password: ''
    })
    const { correo, password } = formulario

    const { iniciarSesionClienteContext } = useContext(AuthContext)

    const [clientes, setClientes] = useState([])
    useEffect(() => {
        getClientes().then((rpta) => {
            setClientes(rpta.data);
        })
    }, [])


    console.log(clientes);
    const history = useHistory()

    const handleChange = e => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = e => {
        let contador = 0
        e.preventDefault();
        if (clientes) {
            clientes.find((cliente) => {
                if (cliente.contrasena === formulario.password && cliente.correo === formulario.correo) {
                    history.push('/cliente/logueado')
                    iniciarSesionClienteContext(cliente)
                    console.log('estas logueado felicitaciones');
                    contador++
                }
            })
            if (contador === 0) {
                Swal.fire(
                    'Lo sentimos :C',
                    'Correo o contrasena :v incorrecto(s)',
                    'error'
                )
            }
        }
    }
    

    return (
        <>
            <div className="sidenav bg-warning">
            </div>
            <div className="main ">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">

                        <h2>Login de Usuario</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Usuario</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Usuario"
                                    name="correo"
                                    value={correo}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Contraseña</label>
                                <input type="password"
                                    className="form-control"
                                    placeholder="Contraseña"
                                    name="password"
                                    onChange={handleChange}
                                    value={password}
                                />
                            </div>
                            <button type="submit" className="btn btn-orange">Ingresar</button>
                            <NavLink to='/registroCliente' className="btn btn-white">Registrar</NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginCliente


