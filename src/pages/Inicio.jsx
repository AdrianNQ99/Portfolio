import Contact from "../components/HomeComponets/Contact";
import About from "../components/HomeComponets/About";
import Hero from "../components/HomeComponets/Hero";
import Proyectos from "../components/HomeComponets/Proyectos";

export default function Home() {
  return (
    <main id="home" className="container mx-auto px-4 py-8">
      <div className="min-h-screen flex flex-col justify-center">
        <Hero />
        <About />
      </div>
      <Proyectos />
      <Contact />
    </main>
  );
}
