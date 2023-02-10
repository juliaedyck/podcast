import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Episodes from "./components/Episodes";
import './App.css';
import EpisodePage from "./components/EpisodePage";
import SkinTone from "./components/SkinTone";
import Andrea from "./components/Andrea";
import Backxwash from "./components/Backxwash";
import Jamilah from "./components/Jamilah";
import Jann from "./components/Jann";
import Olivia from "./components/Olivia";
import Rebecca from "./components/Rebecca";
import Sarah from "./components/Sarah";
import GlobalStyles from "./components/GlobalStyles";

const App  =() => {
  return (
<>
<Router>
  <GlobalStyles />
<div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Episodes" element={<Episodes />} />
            <Route path="/EpisodePage" element={<EpisodePage />} />
            <Route path="/SkinTone" element={<SkinTone/>} />
            <Route path="/Andrea" element={<Andrea/>} />
            <Route path="/Backxwash" element={<Backxwash/>} />
            <Route path="/Jamilah" element={<Jamilah/>} />
            <Route path="/Jann" element={<Jann/>} />
            <Route path="/Olivia" element={<Olivia/>} />
            <Route path="/Rebecca" element={<Rebecca/>} />
            <Route path="/Sarah" element={<Sarah/>} />











          </Routes>
          </div>
      </Router>

</>
  );
}

export default App;
