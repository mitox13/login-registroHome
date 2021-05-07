import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthLoginClienteState from './context/authLoginClienteState'
import ClienteRouter from './modules/cliente/ClienteRouter';
import HomeRouter from './modules/home/HomeRouter'
import PrivateRouteCliente from './PrivateRouteCliente';
import './styles/homeStyle.css'
import './styles/clienteStyle1.css'

const App = () => {
  return (

    <AuthLoginClienteState>
      <Router>

        <Switch>

          {/* <PrivateRoute path="/admin">
    <AdminRouter />
  </PrivateRoute>
  <PrivateRoute path="/profesional">
    <ProfesionalRouter />
  </PrivateRoute> */}
          <PrivateRouteCliente path="/cliente">
            <ClienteRouter />
          </PrivateRouteCliente>
          <Route path="/" >
            <HomeRouter />
          </Route>

        </Switch>

      </Router>
    </AuthLoginClienteState>



  )
}

export default App
