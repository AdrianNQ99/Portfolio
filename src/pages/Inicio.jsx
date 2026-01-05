import { ProyectCard } from "../components/ProyectCard.jsx";
import { projects } from "../data/projects.js";

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

          <nav aria-label="Redes sociales" className="socials">
            <ul>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sección de Proyectos */}
      <section id="projects" aria-label="Proyectos">
        <div className="container">
          <h2>Proyectos Destacados</h2>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-secondary)",
              marginBottom: "3rem",
              fontSize: "1.05rem",
            }}
          >
            Algunos de los proyectos en los que he trabajado recientemente
          </p>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProyectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tech={project.tech}
                image={project.image}
                github={project.github}
                demo={project.demo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sección de About - Habilidades */}
      <section id="about" style={{ background: "rgba(30, 41, 59, 0.3)" }}>
        <div className="container">
          <h2>Mis Habilidades</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              marginTop: "3rem",
            }}
          >
            <div
              style={{
                background: "rgba(30, 41, 59, 0.5)",
                padding: "2rem",
                borderRadius: "0.75rem",
                border: "1px solid var(--border)",
              }}
            >
              <h3 style={{ color: "var(--accent)", marginBottom: "1rem" }}>
                Frontend
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  color: "var(--text-secondary)",
                }}
              >
                <li>✓ React & React Hooks</li>
                <li>✓ JavaScript/ES6+</li>
                <li>✓ HTML5 & CSS3</li>
                <li>✓ Tailwind CSS</li>
                <li>✓ Responsive Design</li>
                <li>✓ Accesibilidad (A11y)</li>
              </ul>
            </div>

            <div
              style={{
                background: "rgba(30, 41, 59, 0.5)",
                padding: "2rem",
                borderRadius: "0.75rem",
                border: "1px solid var(--border)",
              }}
            >
              <h3 style={{ color: "var(--accent)", marginBottom: "1rem" }}>
                Backend
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  color: "var(--text-secondary)",
                }}
              >
                <li>✓ Python & FastAPI</li>
                <li>✓ PostgreSQL</li>
                <li>✓ JWT Authentication</li>
                <li>✓ RESTful APIs</li>
                <li>✓ Docker</li>
                <li>✓ Testing (Pytest)</li>
              </ul>
            </div>

            <div
              style={{
                background: "rgba(30, 41, 59, 0.5)",
                padding: "2rem",
                borderRadius: "0.75rem",
                border: "1px solid var(--border)",
              }}
            >
              <h3 style={{ color: "var(--accent)", marginBottom: "1rem" }}>
                Herramientas
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  color: "var(--text-secondary)",
                }}
              >
                <li>✓ Git & GitHub</li>
                <li>✓ VS Code</li>
                <li>✓ Vite</li>
                <li>✓ npm/yarn</li>
                <li>✓ ESLint</li>
                <li>✓ Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
