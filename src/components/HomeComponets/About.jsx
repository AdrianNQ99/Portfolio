const logos = [
  { src: "/logos/html-logo.png", alt: "HTML5" },
  { src: "/logos/css-logo.png", alt: "CSS3" },
  { src: "/logos/javascript-logo.png", alt: "JavaScript" },
  { src: "/logos/bootstrap-logo.png", alt: "Bootstrap" },
  { src: "/logos/react-logo.png", alt: "React" },
  { src: "/logos/logo-react-router.png", alt: "React Router" },
  { src: "/logos/logo-github.png", alt: "GitHub" },
  { src: "/logos/logo-jwt.png", alt: "JWT" },
  { src: "/logos/logo-mysql.png", alt: "MySQL" },
  { src: "logos/python_logo.png", alt: "Python" },
];

const About = () => {
  return (
    <section className="about-section px-4 md:px-8">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Sobre Mí
        </h2>
        <p className="leading-relaxed text-base sm:text-lg md:text-xl max-w-5xl mx-auto md:mx-0 text-gray-300">
          Soy desarrollador Full-Stack especializado en Python, Django y React.
          Me interesa especialmente el desarrollo de aplicaciones web completas,
          donde puedo trabajar tanto en la lógica del backend como en la
          experiencia del usuario en el frontend. He trabajado en proyectos que incluyen:</p>
          <ul className="mt-4 max-w-3xl mx-auto md:mx-0 space-y-2 text-base sm:text-lg md:text-xl">
            {[
              "Desarrollo de APIs REST con Django REST Framework",
              "Autenticación y autorización con JWT",
              "Integración con servicios externos y APIs de terceros",
              "Desarrollo de interfaces dinámicas y responsivas con React",
              "Despliegue de aplicaciones web en plataformas como Heroku y Vercel",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-300">
                <span className="text-blue-400 mt-1 shrink-0">▹</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
      </div>

      <div className="mt-12 md:mt-16">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
          Skills
        </h3>
        <div className="carousel">
          <div className="logos">
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30 object-contain flex-shrink-0"
              />
            ))}
          </div>

          <div className="logos" aria-hidden="true">
            {logos.map((logo) => (
              <img
                key={`${logo.alt}-duplicate`}
                src={logo.src}
                alt=""
                loading="lazy"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30 object-contain flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
