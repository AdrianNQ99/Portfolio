import proyectosData from "../data/protectosData.js";

const Proyectos = () => {
  return (
    <main>
      {proyectosData.map((project) => (
        <section
          key={project.id}
          id={project.id}
          aria-label={project.title}
          className="project-section"
        >
          <div className="container">
            <h2>{project.title}</h2>
            <p
              style={{
                textAlign: "center",
                color: "var(--text-secondary)",
                marginBottom: "1.5rem",
                fontSize: "1.05rem",
              }}
            >
              {project.description}
            </p>
            <div className="project-tech">
              {project.tech.map((tech, index) => (
                <span key={index} className="tech-item">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Ver Código
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Ver Demo
                </a>
              )}
            </div>
            <div className="project-image">
              <img
                src={project.image}
                alt={`Imagen del proyecto ${project.title}`}
              />
            </div>
          </div>
        </section>
      ))}
    </main>
  );
};
export default Proyectos;
