import Contact from "../components/HomeComponets/Contact";
import About from "../components/HomeComponets/About";
import Hero from "../components/HomeComponets/Hero";
import Proyectos from "../components/HomeComponets/Proyectos";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Hero />
      <About />
      <Proyectos />
      <Contact />
    </main>
  );
}
