import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Experience } from "@/components/home/experience";
import { Projects } from "@/components/projects/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
    </>
  );
}
