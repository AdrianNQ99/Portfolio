// Card del proyecto
export function ProyectCard({ title, description, link }) {
  return (
    <article className="proyect-card">
      <img src={image} alt={`Imagen del proyecto ${title}`} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="btn-primary">
        Ver proyecto
      </a>
      <p>Badges de tecnología</p>
      <button>Ver más</button>
    </article>
  );
}
