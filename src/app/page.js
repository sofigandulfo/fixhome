import Contacto from "./components/Contacto";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Servicios from "./components/Servicios";
import Trabajos from "./components/Trabajos";


export default function Home() {
  return (
    <main className="main-container">
      <Hero />
      <Servicios />
      <Nosotros />
      <Trabajos />
      <Contacto />
    </main>
  )
}
