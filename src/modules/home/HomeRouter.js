import React from 'react'
import { Switch, Route } from "react-router-dom"
import FotterCliente from '../cliente/components/FotterCliente'
import HeaderHome from './components/HeaderHome'
import Inicio from './pages/inicio/Inicio'
import LoginCliente from './pages/loginCliente/LoginCliente'
import RegistroCliente from './pages/registroCliente/RegistroCliente'

const HomeRouter = () => {
    return (
        <>

            <HeaderHome />

            <Switch>
                <Route path='/loginCliente'>
                    <LoginCliente/>
                </Route>
                <Route path='/registroCliente'>
                    <RegistroCliente/>
                </Route>
                <Route path='/'>
                    <Inicio />
                </Route>
            </Switch>

            <FotterCliente />

        </>
    )
}

export default HomeRouter
