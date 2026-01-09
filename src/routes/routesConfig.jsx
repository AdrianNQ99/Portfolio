import Home from "../pages/Inicio.jsx";
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
    path: "#proyectos",
  },
  {
    icon: <MdEmail />,
    name: "Contacto",
    path: "#contact",
  },
];

export default routesConfig;
