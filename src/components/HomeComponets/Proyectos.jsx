import proyectosData from "../../data/protectosData";
import ProjectCard from "../GenericComponents/ProyectCard";

const Proyectos = () => {
  return (
    <section id="proyectos" className="relative min-h-screen text-gray-200 flex items-center justify-center px-6 py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-4xl font-bold text-cyan-400 mb-16">
          Proyectos
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {proyectosData.map((project, index,  ) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Proyectos;
