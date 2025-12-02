// Navbar component
export default function Navbar() {
  return (
    <nav aria-label="Navegación principal" className="navbar">
      <ul>
        <li>logo</li>
        <li>
          <a href="#home">Sobre Mi</a>
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
