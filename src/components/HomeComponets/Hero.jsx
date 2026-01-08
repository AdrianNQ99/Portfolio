import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero-section flex flex-col md:flex-row items-center justify-between gap-10 py-20">
      <div className="max-w-2xl text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4">Bienvenido a Mi Portfolio</h1>
        <p className="text-xl mb-6">
          Soy Adrian Neuville, un desarrollador apasionado por crear soluciones
          web innovadoras y eficientes. Explora mis proyectos y habilidades.
        </p>
        <div className="flex justify-center md:justify-start gap-3">
          <a
            href="https://github.com/AdrianNQ99"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enlace a mi perfil de GitHub"
            className="text-3xl hover:text-blue-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/adrianneuville"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Enlace a mi perfil de LinkedIn"
            className="text-3xl hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <img
        src="https://placehold.co/400x400"
        alt="Foto de Adrian Neuville"
        className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover"
        loading="lazy"
      />
    </section>
  );
};

export default Hero;
