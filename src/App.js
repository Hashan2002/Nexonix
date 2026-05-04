import './App.css';
import Navbar from './components/Navbar/Navbar';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';  


function App() {
  return (
    <div className="App">
      <Navbar />
      <Services />
      <Contact />
      <About />
   
    </div>

  );
}

export default App;