import routesConfig from "../../routes/routesConfig";

/*impementar animacion fluida de movimiento al hacer click en los enlaces del navbar*/

export default function Navbar() {
  return (
    <nav
      aria-label="Navegación principal"
      className=" fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full border border-white/10 bg-black/60 backdrop-blur-md px-6 py-3"
    >
      <ul className="flex items-center gap-6">
        {routesConfig.map((route) => (
          <li key={route.name}>
            <a
              href={route.path}
              className="flex items-center gap-1 text-sm text-gray-300 hover:text-sky-400 transition-colors"
            >
              {route.icon}
              {route.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
