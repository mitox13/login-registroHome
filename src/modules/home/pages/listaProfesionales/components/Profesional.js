import React,{useState} from 'react'

const Profesional = ({ profesional }) => {

    const [modalClick, setModalClick] = useState(false)

    const abrirModal = () => {
        setModalClick(true)
    }
    const cerrarModal = ()=>{
        setModalClick(false)
    }
    return (
        <div className="card card__profesional ">
            <img src={profesional.linkFoto} alt=""
                height="350"
                className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{profesional.primerNombre} - {profesional.apellidoPaterno}</h5>
                <br />
                <h4 className="card-title">Profesión</h4>
                <p className="card-text">{profesional.profesion}</p>
                <h4 className="card-title">Distrito</h4>
                <p className="card-text">{profesional.distrito}</p>


                <button type="button"
                    style={{ fontWeight: 'bold' }}
                    onClick={abrirModal}
                    className="btn btn-warning" data-toggle="modal"
                    data-target=".bd-example-modal-lg"
                >Ver más Detalles
                </button>

                {
                    modalClick ? <div className="modal fade bd-example-modal-lg text-secondary " tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg ">
                            <div className="modal-content ">
                                <div className="modal-header">
                                    <h4>Profesional  My<span className='text-warning'>MFT H4L</span></h4>
                                    <button type="button" onClick={cerrarModal} className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" style={{ fontSize: '30px' }}>&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <div className="row d-flex flex-wrap">
                                        <div className="col-xl-4 col-md-6 col-sm-12 d-flex align-items-center">
                                            <figure >
                                                <img src={profesional.linkFoto} style={{borderRadius:'16px'}}  height="330" width='100%' alt="" />
                                                
                                            </figure>
                                        </div>
  
                                        <div className="col-xl-8 col-md-6 col-sm-12 text-left">
                                            <h2>{profesional.primerNombre}{profesional.apellidoPaterno}</h2>
                                            <p> <i className="fas fa-graduation-cap"></i> <strong> Profesión :</strong> {profesional.profesion}</p>
                                            <h4 style={{ fontWeight: 'bold',color:'#FEC600' }}> Descripción</h4>
                                            <p>{profesional.descripcion}</p>
                                            <h4 style={{ fontWeight: 'bold',color:'#FEC600' }}> Contacto</h4>
                                            <p>  <i className="fas fa-phone    "></i> <strong>Celular :</strong>  {profesional.celular}</p>
                                            <p>  <i className="fas fa-envelope"></i> <strong> Correo :</strong> {profesional.correo}</p>
                                            <p>  <i className="fas fa-map-marker-alt"></i> <strong>  Distrito :</strong> {profesional.distrito}</p>
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
