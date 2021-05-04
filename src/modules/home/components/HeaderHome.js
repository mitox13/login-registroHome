import React from 'react'
import {NavLink} from 'react-router-dom'

const HeaderHome = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light text-white navbar__princi sticky-top d-flex justify-content-end ">
        <NavLink className="navbar-brand text-white" to='/'>My<span className="text-warning">MFT H4L</span> </NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse div__main" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto d-flex ul__princi">
                <li className="nav-item">
                    <NavLink className="nav-link text-white btn p-2" exact   activeClassName="active bg-warning" 
                    to="/">INICIO </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-white btn p-2" exact activeClassName="active bg-warning" to='/nosotros'>NOSOTROS</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-white btn p-2" exact activeClassName="active bg-warning" to='/nuestros-Profesionales'>ENTRENADORES</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-white btn p-2" exact activeClassName="active bg-warning" to='/loginCliente'>INGRESAR</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-white btn p-2" exact  activeClassName="active bg-warning"  to='/registroCliente'>REGISTRARSE</NavLink>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default HeaderHome

