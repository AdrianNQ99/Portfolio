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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Sobre Mí</h2>
        <p className="leading-relaxed text-base sm:text-lg md:text-xl max-w-3xl mx-auto md:mx-0 text-gray-300">
          Soy un desarrollador Full-Stack que está siempre aprendiendo algo nuevo. 
          Me siento cómodo trabajando tanto en el backend con Python, Flask y PostgreSQL, 
          como en el frontend con React. He trabajado en proyectos reales donde he 
          integrado autenticación, APIs externas como Google Maps y Cloudinary, y he 
          manejado todo el flujo desde el código hasta el despliegue. Me gusta resolver 
          problemas y escribir código limpio que otros puedan entender.
        </p>
      </div>

      <div className="mt-12 md:mt-16">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">Skills</h3>
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
