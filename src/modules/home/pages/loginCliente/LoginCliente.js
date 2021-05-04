import React, { useState, useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../../../../context/authContext'
import { useHistory } from 'react-router-dom'
import { getClientes } from '../../../../services/homeService'
import imagenLogin from './../../../../assets/img/flexiones.jpg'
import Swal from 'sweetalert2'

const LoginCliente = () => {


    const [formulario, setFormulario] = useState({
        correo: '',
        password: ''
    })
    const [cargandoLogin, setCargandoLogin] = useState(false)
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
        setCargandoLogin(true)
        if (clientes) {
            const LogueoExitoso = clientes.find((cliente) => (cliente.contrasena === formulario.password && cliente.correo === formulario.correo))
            if (LogueoExitoso) {
                history.push('/cliente/logueado')
                iniciarSesionClienteContext(LogueoExitoso)
                setCargandoLogin(false)
                console.log('estas logueado felicitaciones');
            } else {
                Swal.fire(
                    'Lo sentimos :C',
                    'Correo o contraseña incorrecto(s)',
                    'error'
                )
                setCargandoLogin(false)
            }
        }
    }


    return (
      
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
                        {
                            cargandoLogin?<div className="progress  m-5">
                            <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width:'100%'}} ></div>
                          </div>:null
                        }  
                        </form>
                    </div>
                </div>
            </main>
       
    )
}

export default LoginCliente


