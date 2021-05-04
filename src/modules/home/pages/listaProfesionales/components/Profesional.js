import React,{useState} from 'react'

const Profesional = ({ profesional }) => {

    console.log(profesional);
    const [modalClick, setModalClick] = useState(false)

    const abrirModal = () => {
        setModalClick(true)
    }
    const cerrarModal = ()=>{
        setModalClick(false)
    }
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


                <button type="button"
                    style={{ fontWeight: 'bold' }}
                    onClick={abrirModal}
                    className="btn btn-outline-warning" data-toggle="modal"
                    data-target=".bd-example-modal-lg"
                >Ver más Detalles
                </button>

                {
                    modalClick ? <div className="modal fade bd-example-modal-lg text-secondary" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4>Información :</h4>
                                    <button type="button" onClick={cerrarModal} className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" style={{ fontSize: '30px' }}>&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="row d-flex flex-wrap">
                                        <div className="col-xl-4 col-md-6 col-sm-12">
                                            <figure>
                                                <img src="http://placehold.it/200X300" alt="" />
                                                <p>Video Demostrativo</p>
                                            </figure>
                                        </div>
                                        <div className="col-xl-8 col-md-6 col-sm-12 text-left">
                                            <h2>{profesional.primerNombre}{profesional.apellidoPaterno}</h2>
                                            <p> <strong> Profesión :</strong> {profesional.profesion}</p>
                                            <h4 style={{ fontWeight: 'bold' }}> Descripción</h4>
                                            <p>{profesional.descripcion}</p>
                                            <h4 style={{ fontWeight: 'bold' }}> Contacto</h4>
                                            <p>  <i className="fas fa-phone    "></i> Celular : {profesional.celular}</p>
                                            <p>  <i className="fas fa-envelope"></i> Correo : {profesional.correo}</p>
                                            <p>  <i className="fas fa-map-marker-alt"></i> Distrito : {profesional.distrito}</p>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div> : null
                }


            </div>
        </div>
    )
}

export default Profesional
