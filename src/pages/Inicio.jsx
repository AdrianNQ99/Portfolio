export default function Home() {
  return (
    <main>
      {/* Sección Hero */}
      <header
        id="home"
        className="hero"
        role="banner"
        aria-label="Página de inicio"
      >
        <div className="container">
          <p className="eyebrow">Bienvenido a mi portafolio</p>
          <h1 className="title">Adrian Neuville</h1>
          <p className="lead">
            Desarrollador Full-Stack en crecimiento, con base sólida en Python,
            Flask, SQLAlchemy y PostgreSQL, capaz de diseñar APIs REST fiables,
            modelar bases de datos limpias y conectar servicios frontend-backend
            con lógica bien estructurada. Experiencia práctica construyendo
            plataformas reales (viajes y restauración), integrando autenticación
            JWT, servicios externos (Cloudinary, Google Maps) y gestionando
            despliegues con Git/GitHub.
          </p>

          <div className="actions">
            <a href="#projects" className="btn-primary">
              Ver mis proyectos
            </a>
            <a href="#contact" className="btn-secondary">
              Contáctame
            </a>
          </div>
        </div>
      </header>

    </main>
  );
}
