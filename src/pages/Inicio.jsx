import About from "../components/HomeComponets/About";
import Hero from "../components/HomeComponets/Hero";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Hero />
      <About />
      {/*Añadir Cards con los proyectos*/}
    </main>
  );
}
