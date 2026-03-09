import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 py-12 md:py-20 md:px-8 mt-20 md:mt-24 lg:my-2">
      <div className="max-w-2xl text-center md:text-left w-full px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hola, soy Adrián
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-medium mb-4 text-blue-400">
          Full-Stack Developer | Python · Django · React
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-300">
          Desarrollo aplicaciones web completas y APIs utilizando Python y
          JavaScript. Trabajo tanto en backend como en frontend, construyendo
          soluciones funcionales desde la idea inicial hasta el despliegue.
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
            href="./public/ADRIÁN_NEUVILLE_Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg border border-blue-400 px-4 py-2 text-sm font-medium text-blue-400 hover:bg-blue-400/10 transition-colors duration-300"
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
