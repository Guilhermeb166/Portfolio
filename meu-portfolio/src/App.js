
import "./App.css";
import Header from "./Components/Layout/Header";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <section id="Header">
          <Header />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </Router>
    </div>
  );
}

export default App;
