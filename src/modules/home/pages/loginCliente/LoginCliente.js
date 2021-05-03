import React, { useState, useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../../../../context/authContext'
import { useHistory } from 'react-router-dom'
import { getClientes } from './../../../services/clienteService'
import imagenLogin from './../../../../imagenes/flexiones.jpg'
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

    const history = useHistory()

    const handleChange = e => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (clientes) {
            const LogueoExitoso = clientes.find((cliente) => (cliente.contrasena === formulario.password && cliente.correo === formulario.correo))
            if (LogueoExitoso) {
                history.push('/cliente/logueado')
                iniciarSesionClienteContext(LogueoExitoso)
                console.log('estas logueado felicitaciones');
            } else {
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
            {/* <div className="sidenav bg-warning ">
            </div>
            <div className="main ">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">

                        <h2 className='text-white'>Login de Usuario</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className='text-white'>Usuario</label>
                                <input type="text"
                                    className="form-control"
                                    placeholder="Usuario"
                                    name="correo"
                                    value={correo}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className='text-white'>Contraseña</label>
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
            </div> */}

            <main className="container-fluid">
                <div className="row row__imgform">
                    <div className="col col__img">
                        <img src={imagenLogin} className="img__form" alt="" />
                    </div>
                    <div className="col-md div__form">
                        <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center formu">
                            <h2 className='text-white mb-4'>Login</h2>
                            <label className='text-white mb-2 ' style={{fontSize:'20px'}}>Usuario</label>
                            <input type="text"
                                className="form-control mb-2"
                                placeholder="Usuario"
                                required
                                name="correo"
                                value={correo}
                                onChange={handleChange}
                            />
                            <label className='text-white mb-2' style={{fontSize:'20px'}}>Contraseña</label>
                            <input type="password"
                                className="form-control mb-4"
                                placeholder="Contraseña"
                                required
                                name="password"
                                onChange={handleChange}
                                value={password}
                            />
                           
                        <button type="submit" className="btn btn-warning text-white mb-5">Ingresar</button>
                               
                        <p className='text-white text-center'>No tienes un cuenta? <NavLink to='/registroCliente'  style={{textDecoration:'none',color:'white'}}>Regístrate</NavLink></p>
                        </form>
                    </div>
                </div>
            </main>



        </>
    )
}

export default LoginCliente


