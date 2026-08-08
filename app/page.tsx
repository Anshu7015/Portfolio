import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Experience } from "@/components/home/experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
      </main>
    </>
  );
}
