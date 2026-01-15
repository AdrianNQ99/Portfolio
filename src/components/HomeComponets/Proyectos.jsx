import proyectosData from "../../data/protectosData";
import ProjectCard from "../GenericComponents/ProyectCard";

const Proyectos = () => {
  return (
    <section id="proyectos" className="relative min-h-screen text-gray-200 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-20 my- md:my-16 lg:my-0 overflow-hidden">
      <div className="relative max-w-7xl mx-auto w-full">
        {/* Title */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-16">
          Proyectos
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {proyectosData.map((project, index,  ) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Proyectos;
