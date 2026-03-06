// Lista de los proyectos
const proyectosData = [
  {
    id: "taskflow",
    title: "TaskFlow - Gestor de tareas Kanban",
    description:
        "Aplicación web full-stack para gestión de proyectos y tareas con tablero Kanban, drag & drop nativo, edición en modal y modo demo funcional sin backend.",
    tech: [
        "React",
        "Vite",
        "Django",
        "Python",
        "REST API",
        "JWT",
        "SQLite",
        "Tailwind CSS",
    ],
    image: "/images/TaskFlow.png",
    github: "https://github.com/AdrianNQ/taskflow",
    demo: "taskflow-pi-swart.vercel.app",
},
  {
    id: "restaurant-management",
    title: "Web de contacto y reservas para restaurante",
    description:
      "App completa con API REST Django y React para la gestión de reservas y contacto de un restaurante.",
    tech: ["React", "Django", "Django REST Framework", "Tailwind CSS", "Vite"],
    image: "/images/ElPieCastillo.jpg",
    github: "https://github.com/AdrianNQ99/El-Pie-Castillo",
    demo: "https://el-pie-castillo.vercel.app",
  },
  {
    id: "portfolio",
    title: "Portfolio Personal",
    description:
      "Portfolio web personal construido con React, Vite y TailwindCSS. Incluye secciones de proyectos, contacto y navegación dinámica.",
    tech: ["React", "Vite", "TailwindCSS", "JavaScript", "HTML", "CSS"],
    image: "/images/Portfolio.png",
    github: "https://github.com/AdrianNQ99/Portfolio",
    demo: "",
  },
];
export default proyectosData;
