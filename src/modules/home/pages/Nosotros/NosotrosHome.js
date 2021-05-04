import React from 'react'
import { NavLink } from 'react-router-dom'
import logoPrincipal from '../../../../assets/img/logo.png'
import nosotrosImagen from '../../../../assets/img/nosotrosImagen.png'
const NosotrosHome = () => {
    return (
        <main className='container-fluid nosotros__container  '>

            <div className="row pt-3">
                <section className="col-md-6 presentacion__myfitteam">
                    <figure className='text-center'>
                        <img src={logoPrincipal} alt="logo" height='200' />
                    </figure>
                    
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit vitae repellat blanditiis minus ratione veritatis qui eligendi, quibusdam quaerat eius, consequatur rem earum rerum! Accusamus magni voluptates obcaecati doloribus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores natus veniam praesentium, quisquam et blanditiis corrupti id hic atque consequuntur accusantium magni enim deserunt, omnis at similique doloremque assumenda amet.
                        </p>
                    <div className='d-flex justify-content-around'>
                        <NavLink to='/nuestros-Profesionales' className='btn btn-outline-warning'>Ver profesionales</NavLink>
                        <NavLink to='/registroCliente' className='btn btn-outline-warning'>Registrate</NavLink>
                    </div>

                </section>
                <figure className="col-md-6 contenedorimagen__myfitteam " >
                    <img src={nosotrosImagen} alt="" className='imagenNosotros__myfitteam' />
                </figure>

            </div>
        </main>
    )
}

export default NosotrosHome
