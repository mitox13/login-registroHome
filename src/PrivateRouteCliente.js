import React,{useContext} from 'react'
import {Redirect, Route } from 'react-router-dom' 
import AuthContext from './context/authContext'

const PrivateRouteCliente = (props) => {
  
    const {autenticado,cargando} = useContext(AuthContext)
    return (
       
      !cargando?  
        autenticado ? 
       <Route path={props.path}>
           {props.children}
       </Route>
       :
        <Redirect to='/' />:
        <div>cargando. . .</div>
    )
}

export default PrivateRouteCliente
