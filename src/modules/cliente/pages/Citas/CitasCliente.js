import React, { useContext } from 'react'
import AuthContext from '../../../../context/authContext'

const CitasCliente = () => {
    
    const { clientelogueado } = useContext(AuthContext)

    return (
        <div className="wrapper">

            <section className="wrapper__clienteInfo">
                <h2 className="title__cliente">Cliente My<span>MFT H4L</span></h2>
                <figure className="imagen__cliente">
                    <img src={clientelogueado.foto} alt="" />
                </figure>
                <div className="cliente__info">
                 
                    <u> NOM<span>BRE</span></u>
                </div>
                <p>{clientelogueado.primerNombre + '    '+clientelogueado.segundoNombre}</p>
                <div className="cliente__info">
              
                    <u><span> APEL</span>LIDO</u>
                </div>
                <p>{clientelogueado.apellidoPaterno + '   ' +clientelogueado.apellidoMaterno}</p>
                <div className="cliente__info">
              
                    <u>COR<span>REO</span> </u>
                </div>
                <p>{clientelogueado.correo}</p>
            </section>

            <section className="wrapper__citasCliente">
                <h2 className="title__citas"> CI<span>TAS</span> </h2>
                <div className="date__info">
                    <div className="legend">
                        <div className="legend__info">
                            <h3>Filtros</h3>
                            <p> Nutricionistas</p>
                            <p> Entrenadores</p>
                        </div>
                    </div>
                    <div className="calendario">
                        <div className="jzdbox1 jzdbasf jzdcal">

                            <div className="jzdcalt">Abril 2021</div>

                            <span>Su</span>
                            <span>Mo</span>
                            <span>Tu</span>
                            <span>We</span>
                            <span>Th</span>
                            <span>Fr</span>
                            <span>Sa</span>


                            <span className="jzdb">

                            </span>
                            <span className="jzdb">

                            </span>
                            <span className="jzdb">

                            </span>
                            <span className="jzdb">

                            </span>
                            <span className="jzdb">

                            </span>
                            <span className="jzdb">

                            </span>
                            <span>1</span>
                            <span className="circle" data-title="Cita con el Entrenador Físico">2</span>
                            <span>3</span>
                            <span>4</span>
                            <span className="circle" data-title="Cita con el entrenador físico">5</span>
                            <span>6</span>
                            <span className="circle nutricionista-circle" data-title="Cita con el Nutricionista">7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                            <span>11</span>
                            <span className="circle" data-title="Cita con el entrenador físico">12</span>
                            <span>13</span>
                            <span>14</span>
                            <span className="circle nutricionista-circle" data-title="Cita con el Nutricionista" >15</span>
                            <span>16</span>
                            <span>17</span>
                            <span>18</span>
                            <span>19</span>
                            <span className="circle nutricionista-circle" data-title="Cita con el Nutricionista">20</span>
                            <span>21</span>
                            <span className="circle" data-title="Cita con el entrenador físico">22</span>
                            <span>23</span>
                            <span>24</span>
                            <span>25</span>
                            <span>26</span>
                            <span>27</span>
                            <span>28</span>
                            <span>29</span>
                            <span className="circle nutricionista-circle" data-title="Cita con el Nutricionista">30</span>
                            <span className="jzdb">

                            </span>
                            <span className="jzdb">

                            </span>
                            <span className="jzdb">

                            </span>
                            <span className="jzdb">

                            </span>
                            <span className="jzdb">

                            </span>
                            <span className="jzdb">

                            </span>
                        </div>
                    </div>
                </div>
                <div className="botones__cita">
                    <button> Confirmar</button>
                    <button> Cancelar</button>
                    <button> Reprogramar</button>
                </div>
            </section>

        </div>
    )
}

export default CitasCliente
