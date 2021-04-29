import React from 'react'
import { Switch, Route } from "react-router-dom"
import PantallaPrincipalClienteLogueado from './pages/PantallaPricincipalClienteLogueado/PantallaPrincipalClienteLogueado'
import HeaderCliente  from './components/HeaderCliente'
import FotterCliente from './components/FotterCliente'
import {} from './components/FotterCliente'

const ClienteRouter = () => {
    return (
        <>

            <HeaderCliente />

            <Switch>

                {/* <Route path={'/cliente/detalle'}>
                <Detalle/>
            </Route>
            <Route path={'/cliente/elegirProfesional'}>
                <ElegirProfesional/>
            </Route> */}
                <Route path={'/cliente/logueado'}>
                    <PantallaPrincipalClienteLogueado />
                </Route>
            </Switch>

            
            <FotterCliente />
        </>
    )
}

export default ClienteRouter
