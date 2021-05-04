import React from 'react'

const Profesional = ({ profesional }) => {
    return (
        <div className="card card__profesional">
            <img src={profesional.linkFoto} alt=""
                height="350"
                className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{profesional.primerNombre} - {profesional.apellidoPaterno}</h5>
                <br />
                <h4 className="card-title">Profesion</h4>
                <p className="card-text">{profesional.profesion}</p>
                <h4 className="card-title">Distrito</h4>
                <p className="card-text">{profesional.distrito}</p>
                <div className='text-center'>

                    <button
                        className=' btn btn-warning'
                    // onClick={clickDetalles}
                    >Ver más detalles</button>

                </div>

                <div className="modal" tabindex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary">Save changes</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profesional
