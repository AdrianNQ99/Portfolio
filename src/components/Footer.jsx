export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer aria-label="Pie de página" className="footer">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {/* Links rápidos */}
          <div>
            <h4 style={{ marginBottom: "1rem", color: "var(--accent)" }}>
              Navegación
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <li>
                <a
                  href="#home"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                  }}
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                  }}
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                  }}
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                  }}
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 style={{ marginBottom: "1rem", color: "var(--accent)" }}>
              Sígueme
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                  }}
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                  }}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                  }}
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Tecnologías */}
          <div>
            <h4 style={{ marginBottom: "1rem", color: "var(--accent)" }}>
              Tech Stack
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <li style={{ color: "var(--text-secondary)" }}>React 19</li>
              <li style={{ color: "var(--text-secondary)" }}>Vite</li>
              <li style={{ color: "var(--text-secondary)" }}>Tailwind CSS</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
