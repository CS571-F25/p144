import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Demo from './pages/Demo';
import './App.css';

function App() {
  return (
    <Router basename="/p144">
      <div className="d-flex flex-column min-vh-100">
        <NavigationBar />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/demo" element={<Demo />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
