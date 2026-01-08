import routesConfig from "../routes/routesConfig";

export default function Navbar() {

  return (
   <nav aria-label="Navegación principal" className="text-white px-6 py-4">
  <ul className="flex gap-6 items-center font-inter">
    {routesConfig.map((route) => (
      <li key={route.name}>
        <a
          href={route.path}
          className="hover:text-accent transition-colors"
        >
          {route.name}
        </a>
      </li>
    ))}
  </ul>
</nav>
  );
}
