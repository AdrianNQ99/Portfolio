function ProjectCard({ title, description, image, tech }) {
  return (
    <article className="group relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl transition hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden rounded-t-3xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>
      <div className="p-6 flex flex-col">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>

        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          {description}
        </p>
        <div className="mt-auto flex flex-wrap gap-2">
          {tech.map((item, i) => (
            <span
              key={i}
              className="rounded-lg bg-black/40 border border-white/10 px-3 py-1 text-xs text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
export default ProjectCard;
