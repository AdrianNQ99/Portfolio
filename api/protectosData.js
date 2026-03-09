// Lista de los proyectos
const proyectosData = [
  {
    id: "taskflow",
    title: "TaskFlow - Gestor de tareas Kanban",
    subtitle: "Aplicación web full-stack para la gestión de proyectos y tareas mediante un tablero Kanban interactivo.",
    description:
        "La aplicación permite organizar tareas en diferentes columnas y moverlas mediante drag & drop, ofreciendo una experiencia similar a herramientas de gestión de proyectos modernas.",
    tech: [
        "React",
        "Django",
        "Python",
        "REST API",
        "Django REST Framework",
        "JWT",
        "SQLite",
        "Tailwind CSS",
    ],
    image: "/images/TaskFlow.png",
    github: "https://github.com/AdrianNQ99/taskflow",
    demo: "https://taskflow-pi-swart.vercel.app",
},
  {
    id: "restaurant-management",
    title: "Sistema de reservas para restaurante",
    subtitle: "Aplicación web full-stack para la gestión de reservas y contacto de un restaurante.",
    description:
      "Incluye un backend basado en API REST y un frontend que permite a los usuarios enviar solicitudes de reserva de forma sencilla. El sistema también cuenta con una sección de contacto para consultas generales.",
    tech: ["React", "Django", "Django REST Framework", "Tailwind CSS", "Vite"],
    image: "/images/ElPieCastillo.jpg",
    github: "https://github.com/AdrianNQ99/El-Pie-Castillo",
    demo: "https://el-pie-castillo.vercel.app",
  },
  {
    id: "portfolio",
    title: "Portfolio Personal",
    subtitle: "Portfolio web desarrollado para presentar proyectos y experiencia como desarrollador.",
    description:
      "Incluye navegación dinámica, sección de proyectos y formulario de contacto. El diseño es responsive, utilizando React para el frontend y Tailwind CSS para el estilo.",
    tech: ["React", "Vite", "TailwindCSS", "JavaScript", "HTML", "CSS"],
    image: "/images/Portfolio.png",
    github: "https://github.com/AdrianNQ99/Portfolio",
    demo: "",
  },
];
export default proyectosData;
