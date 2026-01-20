import './style/App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from './components/Movie';
import Directions from './components/Directions';
import "../index.css"


function App() {
  return (
    <>
      <BrowserRouter basename="/RandoMovie">
      <NavBar />
      <Routes>
        <Route path="/RandoMovie/" element={<Home />} />
        <Route path="/RandoMovie/about" element={<About />} />
        <Route path="/RandoMovie/contact" element={<Contact />} />
        <Route path="/RandoMovie/movies" element={<Movie />} />
        <Route path="/RandoMovie/directions" element={<Directions />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      </BrowserRouter>
      
      {/* <h1>RandoMovie</h1> */}
      {/* <div>
        <Parameters />
      </div> */}
    </>
  )
}

export default App