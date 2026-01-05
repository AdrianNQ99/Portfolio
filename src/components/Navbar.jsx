import React, { useState } from "react";
import routesConfig from "../routes/routesConfig";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
