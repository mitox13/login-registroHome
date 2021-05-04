import React from 'react'
import { NavLink } from 'react-router-dom'
import logoPrincipal from '../../../../assets/img/logo.png'
import nosotrosImagen from '../../../../assets/img/imagenNosotros.jpg'
const NosotrosHome = () => {
    return (
        <main className='container-fluid   '>

            <div className="row nosotros__container pt-3 ml-2 mr-2 d-flex align-items-center">
                <section className=" col-xl-6 col-md-5 presentacion__myfitteam p-4">
                    <figure className='text-center imagen__logo'>
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
                <figure className=" col-xl-6 col-md-7 contenedorimagen__myfitteam " >
                    <img src={nosotrosImagen}  alt="" className='imagenNosotros__myfitteam' />
                </figure>

            </div>
        </main>
    )
}

export default NosotrosHome
