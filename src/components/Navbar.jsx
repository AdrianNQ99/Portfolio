import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav aria-label="Navegación principal" className="navbar">
      <ul>
        <li>
          <a href="#home">Inicio</a>
        </li>
        <li>
          <a href="#projects">Proyectos</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}
