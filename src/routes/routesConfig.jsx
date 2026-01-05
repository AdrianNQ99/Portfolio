import Home from "../pages/Inicio.jsx";
import Contacto from "../pages/contacto.jsx";

const routesConfig = [
  {
    name: "Inicio",
    path: "/",
    component: <Home />,
  },
  {
    name: "Contacto",
    path: "/contacto",
    component: <Contacto />,
  },];

export default routesConfig;