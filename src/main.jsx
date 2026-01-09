import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/globals.css";
import Navbar from "./components/GenericComponents/Navbar.jsx";
import Footer from "./components/GenericComponents/Footer.jsx";
import Home from "./pages/Inicio.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Home />
    <Footer />
  </StrictMode>
);
