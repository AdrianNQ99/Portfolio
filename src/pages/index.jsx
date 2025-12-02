export default function Home() {
  return (
    <main>
      {/* Sección principal del landing (estructura básica) */}
      <header
        id="home"
        className="hero"
        role="banner"
        aria-label="Página de inicio"
      >
        <div className="container">
          <p className="eyebrow">Hola, soy</p>
          <h1 className="title">Adrian NQ</h1>
          <p className="lead">
            Desarrollador frontend — construyo interfaces accesibles y rápidas
            con React.
          </p>

          <div className="actions">
            <a href="#contact" className="btn-primary">
              Contáctame
            </a>
            <a href="#projects" className="btn-secondary">
              Ver proyectos
            </a>
          </div>

          <nav aria-label="Redes sociales" className="socials">
            <ul>
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Secciones de ejemplo que puedes completar */}
      <section id="projects" aria-label="Proyectos">
        <div className="container">
          <h2>Proyectos</h2>
        </div>
      </section>

      <section id="contact" aria-label="Contacto">
        <div className="container">
          <h2>Contacto</h2>
        </div>
      </section>
    </main>
  );
}
