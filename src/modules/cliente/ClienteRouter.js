import React from 'react'
import { Switch, Route } from "react-router-dom"
import PantallaPrincipalClienteLogueado from './pages/PantallaPricincipalClienteLogueado/PantallaPrincipalClienteLogueado'
import HeaderCliente from './components/HeaderCliente'
import FotterCliente from './components/FotterCliente'
import { } from './components/FotterCliente'
import CitasCliente from './pages/Citas/CitasCliente'
import CarritoCliente from './pages/Carrito/CarritoCliente'

const ClienteRouter = () => {
    return (
        <>

            <HeaderCliente />

            <Switch>

                <Route path={'/cliente/citas'}>
                    <CitasCliente/>
                </Route>
                <Route path={'/cliente/carrito'}>
                   <CarritoCliente/>
                </Route>
                
                <Route path={'/cliente/logueado'}>
                    <PantallaPrincipalClienteLogueado />
                </Route>
            </Switch>


            <FotterCliente />
        </>
    )
}

export default ClienteRouter
