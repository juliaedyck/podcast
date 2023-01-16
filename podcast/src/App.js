import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Episodes from "./components/Episodes";
import './App.css';
import EpisodePage from "./components/EpisodePage";

const App  =() => {
  return (
<>
<Router>
<div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Episodes" element={<Episodes />} />
            <Route path="/EpisodePage" element={<EpisodePage />} />


          </Routes>
          </div>
      </Router>

</>
  );
}

export default App;
