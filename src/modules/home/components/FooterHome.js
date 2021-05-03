import React from 'react'

const FooterHome = () => {
    return (
        <footer className="footer">
        <div className="footer__contacto">
            <p className='text-center'>Contacto</p>
            <p><i className="fa fa-envelope" aria-hidden="true"></i> m4hl@gmail.com</p>
            <p><i className="fas fa-phone    "></i> +51 958478542</p>
        </div>
        <p> MyMFT H4L </p>
         <div className="footer__social">
            <i className="fab fa-facebook  fa-2x  "></i>
            <i className="fab fa-instagram  fa-2x" aria-hidden="true"></i>
            <i className="fab fa-twitter  fa-2x" aria-hidden="true"></i>
            <i className="fab fa-github  fa-2x" aria-hidden="true"></i>
        </div>
    </footer>
    )
}

export default FooterHome
