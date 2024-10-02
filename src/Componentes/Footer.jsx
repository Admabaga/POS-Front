import React from 'react';
import { FaFacebookF, FaTwitter} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          {/* Sección de la empresa */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Mi Empresa</h5>
            <p>
                Aplicacion tipo POS para manejar servicios de comercio y logistica de cualquier tipo de negocio.
            </p>
          </div>

          {/* Contacto */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contacto</h5>
            <p>
              <i className="fas fa-home mr-3"></i> Cra 63a #94a - 295
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> admabaga@outlook.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> 321 885 47 56
            </p>
          </div>

          {/* Redes Sociales */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Síguenos</h5>
            <div>
              <a href="#" className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }}>
                <FaFacebookF />
              </a>
              <a href="#" className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee' }}>
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <hr className="mb-4" />
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p>
              © 2024 Derechos reservados:
                <strong className="text-warning" > MiEmpresa.com</strong>
            </p>
          </div>

          {/* Redes Sociales (mobile) */}
          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <a href="#" className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }}>
                <FaFacebookF />
              </a>
              <a href="#" className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee' }}>
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
