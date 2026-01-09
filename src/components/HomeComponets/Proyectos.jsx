const Proyectos = () => {
  return (
    <main>
      <section id="proyectos" className="proyectos-section flex flex-col ">
        <h3 className="text-4xl font-bold mb-8 text-center">Proyectos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Proyecto 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/images/proyecto1.png"
              alt="Proyecto 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">Proyecto 1</h3>
              <p className="text-gray-600 mb-4">
                Descripción breve del proyecto 1. Tecnologías usadas: React,
                Node.js.
              </p>
              <a href="#" className="text-blue-500 hover:underline">
                Ver más
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Proyectos;
