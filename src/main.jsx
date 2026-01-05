import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/globals.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Inicio.jsx";
import routesConfig from "./routes/routesConfig.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {routesConfig.map((route) => (
          <Route key={route.name} path={route.path} element={route.component} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
