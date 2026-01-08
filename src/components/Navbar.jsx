import routesConfig from "../routes/routesConfig";

export default function Navbar() {

  return (
   <nav aria-label="Navegación principal" className="max-w-7xl mx-auto rounded-full">
  <ul className="flex gap-6 items-center">
    {routesConfig.map((route) => (
      <li key={route.name}>
        <a
          href={route.path}
          className=" flex items-center gap-2 hover:text-blue-600 transition-colors duration-300"
        >
          {route.icon} {route.name}
        </a>
      </li>
    ))}
  </ul>
</nav>
  );
}
