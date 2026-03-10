import ParallaxProvider from "@/components/ParallaxProvider";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import SkillsArsenal from "@/components/SkillsArsenal";
import Projects from "@/components/Projects";
import RaceStats from "@/components/RaceStats";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <ParallaxProvider>
      <main className="flex min-h-screen flex-col">
        <Hero />
        <About />
        <Experience />
        <SkillsArsenal />
        <Projects />
        <RaceStats />
        <Contact />
      </main>
    </ParallaxProvider>
  );
}
