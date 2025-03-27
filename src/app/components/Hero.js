import Button from "./Button";
import "./Hero.css"

function Hero() {
  return (
    <>
        <section className="hero"> 
            <div className="hero-container wrapper">
                <h1 className="hero-title">Especialistas en el control de cucarachas y roedores</h1>
                <p className="hero-subtitle">Soluciones efectivas para comercios, supermercados, depósitos y edificios completos</p>
                <Button text={"Consultar ahora"} phoneNumber="5492665017919" message="Hola, quiero solicitar más información sobre los servicios."/>
                <p className="hero-pre">Presupuesto sin cargo*</p>
            </div>
        </section>
    </>
  )
}

export default Hero