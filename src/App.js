import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import ParticleBackground from "./components/UI/ParticleBackground";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <Navbar />
      <Home />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
