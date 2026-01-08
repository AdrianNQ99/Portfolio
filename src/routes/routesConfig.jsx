import Contacto from "../pages/contacto.jsx";
import Home from "../pages/Inicio.jsx";
import Proyectos from "../pages/proyectos.jsx";
import { FaHome } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const routesConfig = [
  {
    icon: <FaHome />,
    name: "Inicio",
    path: "/",
    component: <Home />,
  },
  {
    icon: <FaFileCode />,
    name: "Proyectos",
    path: "/proyectos",
    component: <Proyectos />,
  },
  {
    icon: <MdEmail />,
    name: "Contacto",
    path: "/contacto",
    component: <Contacto   />,
  },];

export default routesConfig;
