import Skills from "@/app/components/Section/Skills"
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import CooperationExperience from "./components/CooperationExperience";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <main>
        <About />
        <Experience />
        <CooperationExperience />
        <Services />
        <Resume />
        <Projects />
        <Skills />
        <Blog />
        <Contact />
      </main>
    </>
  );
}
