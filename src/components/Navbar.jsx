import routesConfig from "../routes/routesConfig";

export default function Navbar() {

  return (
    <nav aria-label="Navegación principal" className="navbar">
      <ul>
        {routesConfig.map((route) => (
          <li key={route.name}>
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
