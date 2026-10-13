import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <footer className="py-8 text-center text-xs text-neutral-600 border-t border-neutral-900">
        © {new Date().getFullYear()} Yogesh Gahlawat. All rights reserved.
      </footer>
    </div>
  );
}
