import React, { useState, useEffect } from 'react'
import { getClientes,postCliente } from './../../../services/clienteService'
import imagenRegistro from './../../../../imagenes/pexels-ketut-subiyanto-5039659.jpg'
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'

const RegistroCliente = () => {

    const [formulario, setFormulario] = useState({
        dni: "",
        primerNombre: "",
        segundoNombre: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        foto: "",
        correo: "",
        celular: "",
        direccion: "",
        contrasena: ""
    });

    const [error, setError] = useState(false);
    const [cargando, setCargando] = useState(false)

    let { dni, primerNombre, segundoNombre, apellidoPaterno, apellidoMaterno, foto, correo, celular, direccion, contrasena } = formulario
    const history = useHistory();

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    };

    //traer mockapi clientes para validar correos repetidos
    const [clientes, setClientes] = useState([])
    useEffect(() => {
        getClientes().then((rpta) => {
            setClientes(rpta.data);
        })
    }, [])

    //Cuando le den click al boton registrar
    const handleSubmit = (e) => {
        e.preventDefault();
        setCargando(true)
        // if (
        //     dni.trim() === "" ||
        //     primerNombre.trim() === "" ||
        //     segundoNombre.trim() === "" ||
        //     apellidoPaterno.trim() === "" ||
        //     apellidoMaterno.trim() === "" ||
        //     foto.trim() === "" ||
        //     correo.trim() === "" ||
        //     celular.trim() === "" ||
        //     direccion === "" ||
        //     contrasena === ""
        // ) {
        //     // setError(true);
        //     setCargando(false)
        //     Swal.fire(
        //         '',
        //         'Todos los campos deben ser rellenados',
        //         'warning'
        //     )
        //     return;
        // }

        if (clientes) {
            let contador = 0
            clientes.find((cliente) => {
                if (cliente.correo === formulario.correo) {
                    Swal.fire(
                        'Error',
                        'El correo ingresado ya existe',
                        'error'
                    )
                    contador++
                    setCargando(false)
                }
            })
            if (contador === 0) {
                postCliente(formulario).then((rpta) => {
                    console.log(formulario);
                    if (rpta.status === 201) {
                        console.log('REGISTRADO');
                        Swal.fire(
                            'Registrado correctamente!',
                            'Bienvenido a MYFITTEAM ',
                            'success'
                        )
                        setCargando(false)
                        history.push('/loginCliente')
                    } else {
                        Swal.fire(
                            'Error',
                            'Se produjo un error:Intentelo nuevamente',
                            'error'
                        )
                        setCargando(false)
                    }

                });
            }
        }

    };


    return (

        <main className="container-fluid">
            <div className="row row__imgform">
                <div className="col col__img">
                    <img src={imagenRegistro} className="img__form" alt="" />
                </div>
                <div className="col-md div__form">

                    {/* {error ? (
                        <div className="alert alert-warning mt-2">
                            Todos los campos deben ser rellenados
                        </div>
                    ) : null} */}

                    <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center formu">
                        <h2>Registrarse</h2>

                        <input
                            type="number"
                            className="form-control form-control-sm mb-2"
                            id="colFormLabelSm"
                            placeholder="Ingrese su DNI"
                            required           
                            name="dni"
                            value={dni}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            className="form-control form-control-sm mb-2"
                            id="colFormLabelSm"
                            placeholder="Ingrese su 1er Nombre"
                            required
                            title="oe k "
                            name="primerNombre"
                            value={primerNombre}
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            className="form-control form-control-sm mb-2"
                            id="colFormLabelSm"
                            placeholder="Ingrese su 2do Nombre (Omitir si no tuviera)"
                            name="segundoNombre"
                            value={segundoNombre}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            className="form-control form-control-sm mb-2"
                            id="colFormLabelSm"
                            placeholder="Ingrese su apellido Paterno"
                            required
                            name="apellidoPaterno"
                            value={apellidoPaterno}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            className="form-control form-control-sm mb-2"
                            id="colFormLabelSm"
                            placeholder="Ingrese su apellido Materno"
                            required
                            name="apellidoMaterno"
                            value={apellidoMaterno}
                            onChange={handleChange}
                        />

                        <div>
                            <textarea
                                name="foto"
                                value={foto}
                                onChange={handleChange}
                                placeholder="Ingrese el link de su foto"
                                required
                                cols="30"
                                rows="2"
                                className="form-control mb-2"
                            ></textarea>
                        </div>

                        <input
                            type="email"
                            className="form-control form-control-sm mb-2"
                            id="colFormLabelSm"
                            placeholder="Ingrese su correo"
                            required
                            name="correo"
                            value={correo}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            className="form-control form-control-sm mb-2"
                            id="colFormLabelSm"
                            placeholder="Ingrese su celular"
                            required
                            name="celular"
                            value={celular}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            className="form-control form-control-sm mb-2"
                            id="colFormLabelSm"
                            placeholder="Ingrese su direccion"
                            required
                            name="direccion"
                            value={direccion}
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            className="form-control form-control-sm mb-2"
                            id="colFormLabelSm"
                            placeholder="Ingrese una contraseña"
                            required
                            name="contrasena"
                            value={contrasena}
                            onChange={handleChange}
                        />
                        <div className="d-flex justify-content-center div__btn">
                            <button type="submit" className="btn btn-warning btn__canceenviar">Registrar</button>
                        </div>
                        {cargando ?
                            (
                                <div className="alert alert-warning mt-2">
                                    Consultando registro . . .
                                </div>
                            ):null
                        }

                    </form>
                </div>
            </div>
        </main>

    )
}

export default RegistroCliente

