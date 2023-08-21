import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import First_form from './components/First_form';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setDarkMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#210353";
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <Router>

        <Navbar title="first_app" mode={mode} toggleMode={toggleMode} />
          <div className='container my-4'>
          <Routes>
    <Route exact path="/" element={<First_form/>}/>
    <Route exact path="/about" element={<About/>}/>
    
  </Routes>
          </div>
      </Router>

  );
}

export default App;
