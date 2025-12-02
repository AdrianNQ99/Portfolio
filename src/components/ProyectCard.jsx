export function ProyectCard({
  title,
  description,
  tech = [],
  image,
  github,
  demo,
}) {
  return (
    <article className="project-card">
      <div className="project-image">
        {image ? (
          <img src={image} alt={`Imagen del proyecto ${title}`} />
        ) : (
          <span>💼</span>
        )}
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        {tech.length > 0 && (
          <div className="project-tech">
            {tech.map((t, idx) => (
              <span key={idx} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
        )}
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
