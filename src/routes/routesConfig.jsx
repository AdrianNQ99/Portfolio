import Contacto from "../pages/contacto.jsx";
import Home from "../pages/Inicio.jsx";
import Proyectos from "../pages/proyectos.jsx";

const routesConfig = [
  {
    name: "Inicio",
    path: "/",
    component: <Home />,
  },
  {
    name: "Proyectos",
    path: "/proyectos",
    component: <Proyectos />,
  },
  {
    name: "Contacto",
    path: "/contacto",
    component: <Contacto   />,
  },];

export default routesConfig;