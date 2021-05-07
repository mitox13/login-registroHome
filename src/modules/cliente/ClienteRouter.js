import React from 'react'
import { Switch, Route } from "react-router-dom"
import HeaderCliente from './components/HeaderCliente'
import FotterCliente from './components/FotterCliente'
import PantallaPrincipalClienteLogueado from './pages/PantallaPricincipalClienteLogueado/PantallaPrincipalClienteLogueado'

const ClienteRouter = () => {
    return (
        <>

            <HeaderCliente />

            <Switch>

                <Route path={'/cliente/home'}>
                    <PantallaPrincipalClienteLogueado />
                </Route>
            </Switch>


            <FotterCliente />
        </>
    )
}

export default ClienteRouter
