function ProjectCard({ title, description, image, tech, github, demo }) {
  return (
    <article className="group relative flex flex-col rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl transition hover:-translate-y-1 hover:shadow-2xl h-full">
      <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-3xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="flex flex-col flex-1 p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>

        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4 sm:mb-6">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          {tech.map((item, i) => (
            <span
              key={i}
              className="rounded-lg bg-black/40 border border-white/10 px-2 sm:px-3 py-1 text-xs text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            onClick={() => window.open(github, "_blank")}
            className="flex-1 rounded-lg bg-cyan-500/90 px-4 py-2 text-xs sm:text-sm font-medium text-black hover:bg-cyan-400 transition"
          >
            Ver código
          </button>

          {demo && (
            <button
              onClick={() => window.open(demo, "_blank")}
              className="flex-1 rounded-lg bg-gray-400/90 px-4 py-2 text-xs sm:text-sm font-medium text-black hover:bg-gray-400 transition"
            >
              Ver demo
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
