import React from 'react'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import AuthState from './context/authState'
import ClienteRouter from './modules/cliente/ClienteRouter';
// import ErrorPage from './modules/home/ErrorPage';
import HomeRouter from './modules/home/HomeRouter'
import PrivateRouteCliente from './PrivateRouteCliente';
import './styles/styles.css'
import './styles/styleLoginClie2.css'

const App = () => {
  return (
    <AuthState>

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
          {/* <Route component={ErrorPage} /> */}
        </Switch>

      </Router>

    </AuthState>
  )
}

export default App
