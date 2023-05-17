import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
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
import Nick from "./components/Nick";


const App  =() => {
  return (
<>
<Router>
  <GlobalStyles />
<div>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
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
            <Route path="/Nick" element={<Nick/>} />












          </Routes>
          </div>
      </Router>

</>
  );
}

export default App;
