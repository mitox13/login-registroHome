import React,{useState,useEffect} from 'react'
import {getEmpleados} from '../../../../services/homeService'
import Profesionales from './components/Profesionales'


const ProfesionalesListaHome = () => {
    
    const [profesionales, setProfesionales] = useState([])
    useEffect(() => {
        getEmpleados().then((rpta) => {
            setProfesionales(rpta.data);
        })
    }, [])
    
    
    return (
        <main className='mt-3 container-fluid'>
            <h1 className='text-white text-center'>NUESTROS PROFESIONALES</h1>
            <div className="row">
                <div className="col-md-12">
                        <Profesionales  profesionales={profesionales}/>
                </div>
            </div>
        </main>
    )
}

export default ProfesionalesListaHome
