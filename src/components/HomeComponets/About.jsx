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
    <section className="about-section">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-6">Sobre Mí</h2>
        <p className="leading-relaxed text-xl max-w-3xl">
          Desarrollador Full-Stack en crecimiento, con base sólida en Python,
          Flask, SQLAlchemy y PostgreSQL, capaz de diseñar APIs REST fiables,
          modelar bases de datos limpias y conectar servicios frontend-backend
          con lógica bien estructurada. Experiencia práctica construyendo
          plataformas reales (viajes y restauración), integrando autenticación
          JWT, servicios externos (Cloudinary, Google Maps) y gestionando
          despliegues con Git/GitHub.
        </p>
      </div>

      <div className="mt-16">
        <h3 className="text-4xl font-bold mb-8 text-center">Skills</h3>
        <div className="carousel">
          <div className="logos">
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="w-30 h-30 object-contain flex-shrink-0"
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
                className="w-30 h-30 object-contain flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
