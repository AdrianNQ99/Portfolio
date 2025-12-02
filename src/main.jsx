import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/landing.jsx";
import "./styles/globals.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Home />
    <Footer />
  </StrictMode>
);
