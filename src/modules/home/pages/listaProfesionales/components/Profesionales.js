import React from 'react'
import Profesional from './Profesional'

const Profesionales = ({ profesionales }) => {
    return (
        <div className="row mb-3">
            {
                profesionales.map((profesional,i) => (
                    <div className="col-xl-3 col-lg-4 col-md-6 mt-4" key={i}>
                        <Profesional profesional={profesional} />
                    </div>)
                )
            }
        </div>
    )
}

export default Profesionales
