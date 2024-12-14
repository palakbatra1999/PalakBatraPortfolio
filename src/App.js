import './App.css';
import Projects from './Components/Projects';
import Blog from './Components/Blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Workex from './Components/Workex'

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/projects" element={<Projects />} /> {/* Projects route */}
          <Route path="/blog" element={<Blog />} /> {/* About route */}
          <Route path="/Workexperience" element={<Workex/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
