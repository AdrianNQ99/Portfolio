import Contact from "../components/HomeComponets/Contact";
import About from "../components/HomeComponets/About";
import Hero from "../components/HomeComponets/Hero";
import Proyectos from "../components/HomeComponets/Proyectos";

export default function Home() {
  return (
    <main id="home" className="container mx-auto space-y-16 md:space-y-24">
      <Hero />
      <About />
      <Proyectos />
      <Contact />
    </main>
  );
}
