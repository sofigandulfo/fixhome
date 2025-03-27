"use client"
import Image from "next/image";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./Servicios.css";

function Servicios() {

  return (
    <section className="servicios wrapper" id="servicios">
      <div className="servicio-cucarachas">
        <div className="servicio-info">
          <div className="servicio-texto">
            <h2 className="servicio-title">Control de cucarachas</h2>
            <div className="servicio-imagen imagen-cucaracha-mobile">
          <Image
            src="/control-cucarachas.png"
            alt="Cucaracha"
            width={260}
            height={364}
          />
        </div>
            <p className="servicio-desc">
              Eliminación rápida y eficaz de cucarachas, con productos y métodos
              especializados, ideales para grandes superficies como
              supermercados, restaurantes y edificios completos
            </p>
            <h3 className="servicio-subtitle">¿Por qué elegirnos?</h3>
            <ul className="servicio-lista">
              <li className="servicio-item">
                <Image
                  src="/Checkmark.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                />
                <p>
                  <strong>Productos de alta eficacia:</strong> Usamos tecnología
                  avanzada para eliminar cucarachas sin olores ni residuos
                  tóxicos.
                </p>
              </li>
              <li className="servicio-item">
                <Image
                  src="/Checkmark.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                />
                <p>
                  <strong>Control preventivo:</strong> Mantenemos tus espacios
                  libres de infestaciones con tratamiento preventivo.
                </p>
              </li>
              <li className="servicio-item">
                <Image
                  src="/Checkmark.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                />
                <p>
                  <strong>Ideal para todo tipo de comercios:</strong>{" "}
                  Restaurantes, supermercados, depósitos y edificios completos.
                </p>
              </li>
            </ul>
          </div>
          <div className="servicio-btn">
            <Button text={"Consultar ahora"} phoneNumber="5492665017919" message="Hola, quiero solicitar más información sobre el control de cucarachas." />
          </div>
        </div>
        <div className="servicio-imagen imagen-cucaracha">
          <Image
            src="/control-cucarachas.png"
            alt="Cucaracha"
            width={400}
            height={560}
          />
        </div>
      </div>
      <div className="servicio-roedores">
        <div className="servicio-imagen imagen-roedores">
          <Image
            src="/control-roedores.png"
            alt="Cucaracha"
            width={400}
            height={254}
          />
        </div>
        <div className="servicio-info">
          <div className="servicio-texto">
            <h2 className="servicio-title">Control de Roedores</h2>
            <div className="servicio-imagen imagen-roedores-mobile">
          <Image
            src="/control-roedores.png"
            alt="Cucaracha"
            width={260}
            height={173}
          />
        </div>
            <p className="servicio-desc">
              Tratamiento especializado para el control y eliminación de
              roedores en tu negocio, ideal para supermercados, depósitos y
              edificios completos
            </p>
            <h3 className="servicio-subtitle">Ventajas de nuestro servicio</h3>
            <ul className="servicio-lista">
              <li className="servicio-item">
                <Image
                  src="/Checkmark.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                />
                <p>
                  <strong>Solución segura para tu negocio: </strong> Utilizamos
                  métodos ecológicos y seguros para eliminar roedores,
                  garantizando la seguridad de tus productos y clientes
                </p>
              </li>
              <li className="servicio-item">
                <Image
                  src="/Checkmark.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                />
                <p>
                  <strong>Rápida intervención:</strong> Contamos con un equipo
                  especializado que realiza tratamientos de control de roedores
                  de manera rápida.
                </p>
              </li>
              <li className="servicio-item">
                <Image
                  src="/Checkmark.svg"
                  alt="Checkmark"
                  width={20}
                  height={20}
                />
                <p>
                  <strong>Inspección continua: </strong> Realizamos seguimientos
                  periódicos para asegurarnos de que tu negocio mantenga un
                  ambiente libre de roedores y otros vectores.
                </p>
              </li>
            </ul>
          </div>
          <div className="servicio-btn">
            <Button text={"Consultar ahora"} phoneNumber="5492665017919" message="Hola, quiero solicitar más información sobre el control de roedores."/>
          </div>
        </div>
      </div>

      <div className="otros-servicios">
      <h2 className="otros-title">OTROS SERVICIOS</h2>
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }} 
        modules={[Pagination]} 
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2},
          968: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <div className="card">
            <div className="card-icono">
              <Image src="/mosquito.svg" alt="Mosquito" width={50} height={50} />
            </div>
            <div className="card-texto">
              <h3 className="card-title">Fumigación contra insectos</h3>
              <p className="card-desc">
                Eliminamos y prevenimos infestaciones de cucarachas, mosquitos, hormigas y otros insectos con productos seguros y efectivos.
              </p>
            </div>
            <div className="card-boton">
            <Button text={"Enviar Whatsapp"} phoneNumber="5492665017919" message="Hola, quiero solicitar más información sobre el servicio de fumigación contra insectos."/>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card">
            <div className="card-icono">
              <Image src="/spider.svg" alt="Araña" width={50} height={50} />
            </div>
            <div className="card-texto">
              <h3 className="card-title">Eliminación de arañas y alacranes</h3>
              <p className="card-desc">
                Protegé tu casa o empresa de picaduras peligrosas con tratamientos específicos para zonas de riesgo.
              </p>
            </div>
            <div className="card-boton">
            <Button text={"Enviar Whatsapp"} phoneNumber="5492665017919" message="Hola, quiero solicitar más información sobre el servicio de eliminación de arañas y alacranes."/>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card">
            <div className="card-icono">
              <Image src="/bat.svg" alt="Murcielago" width={50} height={50} />
            </div>
            <div className="card-texto">
              <h3 className="card-title">Control y ahuyentamiento de murciélagos</h3>
              <p className="card-desc">
                Ahuyentamos murciélagos de techos y entretechos con métodos seguros y ecológicos.
              </p>
            </div>
            <div className="card-boton">
            <Button text={"Enviar Whatsapp"} phoneNumber="5492665017919" message="Hola, quiero solicitar más información sobre el servicio de control y ahuyentamiento de murciélagos."/>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </section>
  );
}

export default Servicios;
