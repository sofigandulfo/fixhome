import Image from "next/image"
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer ">
      <div className="footer-container wrapper">
        <div className="footer-logo">
          <Image src="/fixhome.jpg" alt="Logo de FixHome Control de Plagas" width={150} height={150} priority />
        </div>

        <nav className="footer-nav">
          <h2 className="footer-nav-title">NAVEGACIÓN</h2>
          <ul className="footer-nav-list">
            <li className="footer-nav-item"><a href="#inicio">Inicio</a></li>
            <li className="footer-nav-item"><a href="#servicios">Servicios</a></li>
            <li className="footer-nav-item"><a href="#nosotros">Nosotros</a></li>
            <li className="footer-nav-item"><a href="#trabajos">Trabajos</a></li>
            <li className="footer-nav-item"><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>

        <div className="footer-contact">
          <h2 className="footer-contact-title">CONTACTANOS</h2>
          <a className="footer-contact-text">
            <Image src="/Phone.svg" alt="Icono de teléfono" width={20} height={20} />
            +54 266 501-5101
          </a>
          <a className="footer-contact-text" href="mailto:consultasfixhome@gmail.com">
            <Image src="/Mail.svg" alt="Icono de correo" width={20} height={20} />
            consultasfixhome@gmail.com
          </a>
          <a className="footer-contact-text" href="https://www.instagram.com/fixhomesanluis/" rel="noopener noreferrer" target="_blank">
            <Image src="/Instagram.svg" alt="Icono de Instagram" width={20} height={20} />
            @fixhomesanluis
          </a>
          <a className="footer-contact-text" href="https://www.facebook.com/fixhomesanluis/" rel="noopener noreferrer" target="_blank">
            <Image src="/Facebook.svg" alt="Icono de Facebook" width={20} height={20} />
            Fix Home
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer