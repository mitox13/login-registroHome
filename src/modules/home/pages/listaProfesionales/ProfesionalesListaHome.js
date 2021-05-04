import React, { useState, useEffect } from 'react'
import { getEmpleados } from '../../../../services/homeService'
import Profesionales from './components/Profesionales'


const ProfesionalesListaHome = () => {

    const [profesionales, setProfesionales] = useState([])
    const [cargando, setCargando] = useState(true)
    useEffect(() => {
        getEmpleados().then((rpta) => {
            setProfesionales(rpta.data);
            setCargando(false)
        })

    }, [])


    return (

        cargando ?
            <div   style={{height:'100vh'}}>
                <div className="progress  m-5 "  >
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning " role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: '100%' }} ></div>
                </div>
            </div>
            :
            <main className='pt-3 container-fluid '>
                <h1 className='text-white text-center'>NUESTROS PROFESIONALES</h1>
                <div className="row">
                    <div className="col-md-12">
                        <Profesionales profesionales={profesionales} />
                    </div>
                </div>
            </main>
    )
}

export default ProfesionalesListaHome
