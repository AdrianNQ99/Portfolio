import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 py-12 md:py-20 px-4 md:px-8 mt-20 md:mt-24 lg:mt-20">
      <div className="max-w-2xl text-center md:text-left w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Bienvenido a mi Portfolio
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-300">
          Soy Adrian Neuville, un desarrollador apasionado por crear soluciones
          web innovadoras y eficientes. Explora mis proyectos y habilidades.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-6">
          <div className="flex gap-4">
            <a
              href="https://github.com/AdrianNQ99"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a mi perfil de GitHub"
              className="text-2xl sm:text-3xl hover:text-blue-400 transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/adrianneuville"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enlace a mi perfil de LinkedIn"
              className="text-2xl sm:text-3xl hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
          <a
            href="./public/AdrianNeuvilleResume.pdf"
            download
            className="inline-block px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-colors duration-300 text-sm sm:text-base font-medium"
          >
            Descargar CV
          </a>
        </div>
      </div>
      <img
        src="./images/AN.png"
        alt="Foto de Adrian Neuville"
        className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl"
        loading="lazy"
      />
    </section>
  );
};

export default Hero;
