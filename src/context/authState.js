import React,{ useEffect, useState} from 'react'
import AuthContext from './authContext'


const AuthState = (props) => {
    
    const [state, setState] = useState({
        autenticado:false,
        clientelogueado:[],
        cargando:true
    })
    
    const iniciarSesionClienteContext = (clientelogueado)=>{
        localStorage.setItem('user', JSON.stringify(clientelogueado))
        console.log(clientelogueado);
        setState({
           autenticado:true,
           clientelogueado:clientelogueado,
           cargando:false
       })
    }
    const iniciarSesionConLocalStorage = ()=>{
        if(localStorage.getItem('user')){
            iniciarSesionClienteContext(JSON.parse(localStorage.getItem('user')))
            console.log(JSON.parse(localStorage.getItem('user')));
            setState({
                autenticado:true,
                clientelogueado:JSON.parse(localStorage.getItem('user'))
            })
        }else{
            setState({
                cargando:false
            })
        }
    }
    useEffect(()=>{
        iniciarSesionConLocalStorage ();
    },[])

    return (
        <AuthContext.Provider value={{...state,iniciarSesionClienteContext}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState
