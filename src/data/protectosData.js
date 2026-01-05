// Lista de los proyectos
const proyectosData = [
  {
    id: "restaurant-management",
    title: "Sistema de Gestión de Restaurante",
    description:
      "App completa con FastAPI y Next.js: pedidos, mesas, productos, reportes y autenticación JWT.",
    tech: [
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Next.js",
      "Tailwind",
      "Docker",
    ],
    image: "/images/proyecto1.png",
    github: "URL_DEL_REPO",
    demo: "URL_DEMO",
  },
  {
    id: "auth-microservice",
    title: "Servicio de Autenticación",
    description:
      "Microservicio de autenticación JWT con FastAPI, tests Pytest, logs y manejo de errores.",
    tech: ["FastAPI", "JWT", "Pytest", "Docker"],
    image: "/images/proyecto2.png",
    github: "URL_DEL_REPO",
    demo: "",
  },
  {
    id: "utils-library",
    title: "Librería de utilidades",
    description:
      "Pequeña librería de validación y conversión en Python. Proyecto limpio, testeado y documentado.",
    tech: ["Python", "Pytest"],
    image: "/images/proyecto3.png",
    github: "URL_DEL_REPO",
    demo: "",
  },
];
export default proyectosData;