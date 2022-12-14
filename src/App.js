import "./style.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Hero />

      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
