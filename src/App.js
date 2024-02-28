import './App.css';
import Landing from './components/Landing/Landing';
import Projects from './components/projects/Projects'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <div >
      <Navbar />
      <Landing />
      <Projects 
      />
      <Footer />
    </div>
  );
}

export default App;
