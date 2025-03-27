import Image from "next/image";
import Button from "./Button";
import "./Contacto.css";

function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <div className="container wrapper">
        <h2 className="contacto-title">CONTÁCTANOS</h2>
        <div className="contacto-container">
          <div className="contacto-info">
            <h3 className="contacto-subtitle">¡Estamos aquí para ayudarte!</h3>
            <p className="contacto-desc">
              Si tenés dudas o necesitas un presupuesto, ¡no dudes en
              contactarnos! Te atenderemos con gusto y rapidez.
            </p>
            <div className="contacto-wpp-mobile">
              <Image
                src="/Whatsapp-logo.svg"
                alt="WhatsApp"
                width={100}
                height={100}
              />
              <Button
                text={"Enviar Whatsapp"}
                showImage={false}
                phoneNumber="5492665017919"
                message="Hola, quiero solicitar más información sobre los servicios."
              />
            </div>
            <div className="contacto-info-div">
              <div className="contacto-info-container">
                <p className="contacto-text">
                  📞 <strong>Teléfono:</strong> +54 266 501-5101
                </p>
                <p className="contacto-text">
                  📍 <strong> Ubicación:</strong> San Luis, Argentina
                </p>
                <p className="contacto-text">
                  ⏳ <strong>Horario:</strong> Lunes a viernes | 9:00 a 17:00
                </p>
              </div>
            </div>
          </div>
          <div className="contacto-wpp">
            <Image
              src="/WhatsApp.png"
              alt="WhatsApp"
              width={100}
              height={100}
            />
            <Button
              text={"Enviar Whatsapp"}
              showImage={false}
              phoneNumber="5492665017919"
              message="Hola, quiero solicitar más información sobre los servicios."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
