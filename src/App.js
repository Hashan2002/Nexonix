import './App.css';
import Navbar from './components/Navbar/Navbar';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Services />
      <Contact />
   
    </div>

  );
}

export default App;