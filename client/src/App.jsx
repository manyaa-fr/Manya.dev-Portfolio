import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { color } from "framer-motion";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section id="about" className="min-h-screen bg-white flex items-center justify-center">
      <About />
      </section>
      <section id="projects" className="min-h-screen bg-pink-50 flex items-center justify-center">
        <Projects />
      </section>
      <section id="contact" className="min-h-screen bg-white flex items-center justify-center">
      <Contact />
      </section>
      <footer style={{ color: "black" }}>© 2025 Manya • Built with React + Tailwind</footer>
    </div>
  );
}

export default App;
