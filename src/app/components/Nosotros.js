import Image from "next/image";
import Button from "./Button";
import "./Nosotros.css";

function Nosotros() {
  return (
    <section className="nosotros" id="nosotros">
      <div className="nosotros-container wrapper">
        <div className="nosotros-texto">
          <h2 className="nosotros-title">
            Expertos en control de plagas: seguros, eficaces y profesionales
          </h2>
          <p className="nosotros-desc">
            Con años de experiencia en el rubro, realizamos control de plagas en
            todo tipo de ambientes, utilizando productos incoloros e inodoros.
            Contamos con un equipo profesional capacitado para garantizar un
            servicio seguro y efectivo. Brindamos prevención, fumigación y
            asesoría. ¡Solicitá tu presupuesto sin cargo!
          </p>
        </div>
        <div className="nosotros-imagen">
          <Image src="/nosotros.webp" alt="Nosotros" width={380} height={380} />
        </div>
      </div>
      <div className="nosotros-cards wrapper">
        <div className="nosotros-card">
          <div className="nosotros-icono">
            <Image
              src="/Calendar.svg"
              alt="Calendario"
              width={50}
              height={50}
            />
          </div>
          <h3 className="nosotros-card-title">Experiencia Comprobada</h3>
          <p className="nosotros-card-desc">
            Más de 5 años brindando soluciones confiables en control de plagas.
          </p>
        </div>
        <div className="nosotros-card">
          <div className="nosotros-icono">
            <Image src="/Protect.svg" alt="Calendario" width={50} height={50} />
          </div>
          <h3 className="nosotros-card-title">Métodos Seguros y Efectivos</h3>
          <p className="nosotros-card-desc">
            Productos certificados, sin olor ni color, aptos para hogares y
            comercios.
          </p>
        </div>
        <div className="nosotros-card">
          <div className="nosotros-icono">
            <Image
              src="/telefono.svg"
              alt="Calendario"
              width={50}
              height={50}
            />
          </div>
          <h3 className="nosotros-card-title">Atención Rápida y Personalizada</h3>
          <p className="nosotros-card-desc">Consultanos por WhatsApp y obtené tu presupuesto gratis.</p>
        </div>
      </div>
        <div className="nosotros-btn">
        <Button text={"Enviar Whatsapp"} phoneNumber="5492665017919" message="Hola, quiero solicitar más información sobre los servicios."/>
        </div>
    </section>
  );
}

export default Nosotros;
