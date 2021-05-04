import React from 'react'
import { NavLink } from 'react-router-dom'
import logoPrincipal from '../../../../assets/img/logo.png'
import nosotrosImagen from '../../../../assets/img/imagenNosotros.jpg'
const NosotrosHome = () => {
    return (
        <main className='container-fluid   '>

            <div className="row nosotros__container pt-3 ml-2 mr-2 d-flex align-items-start">
                <section className=" col-xl-6 col-md-5 presentacion__myfitteam p-4">
                    <figure className='text-center imagen__logo'>
                        <img src={logoPrincipal} alt="logo" height='200' />
                    </figure>
                   
                    <p className='text-white'>
                    Descubre las OFERTAS de los mejores partners y obtén sesiones personalizadas en nutrición & entrenamiento Físico. Encuentra el balance perfecto para ti estés donde estés.   
                    <br/>
                    <p className='pt-3'>Conoce sobre nuestras ofertas. Solo debes registrarte</p>
                        </p>
                    <div className='d-flex justify-content-around'>
                        <NavLink to='/nuestros-Profesionales' className='btn btn-outline-warning'>Ver profesionales</NavLink>
                        <NavLink to='/registroCliente' className='btn btn-outline-warning'>Registrate</NavLink>
                    </div>

                </section>
                <figure className=" col-xl-6 col-md-7 contenedorimagen__myfitteam " >
                    <img src={nosotrosImagen}  alt="" className='imagenNosotros__myfitteam' />
                </figure>

            </div>
        </main>
    )
}

export default NosotrosHome
