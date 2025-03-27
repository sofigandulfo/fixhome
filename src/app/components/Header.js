"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import "./Header.css";
import { Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.querySelector("body").classList.add("hidden-scroll");
    } else {
      document.querySelector("body").classList.remove("hidden-scroll");
    }
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false); // Cierra el menú al hacer clic en cualquier enlace
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna la apertura/cierre del menú
  };

  return (
    <header id="inicio">
      <nav className="headder-nav">
        <a href="#">
          <Image
            className="logo"
            src="/fixhome.jpg"
            alt="Logo de FixHome Control de Plagas"
            width={70}
            height={70}
            priority
          />
        </a>
        {/* Para escritorio, siempre mostrar el menú */}
        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#inicio" onClick={handleLinkClick}>Inicio</a>
          </li>
          <li>
            <a href="#servicios" onClick={handleLinkClick}>Servicios</a>
          </li>
          <li>
            <a href="#nosotros" onClick={handleLinkClick}>Nosotros</a>
          </li>
          <li>
            <a href="#trabajos" onClick={handleLinkClick}>Trabajos</a>
          </li>
          <li>
            <a href="#contacto" onClick={handleLinkClick}>Contacto</a>
          </li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <X /> : <Menu />}
        </div>
      </nav>

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
}

export default Header;
