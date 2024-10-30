
import Header from "./Components/Layout/Header";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import {BrowserRouter as Router,} from 'react-router-dom'
import Contacts from "./Components/Contacts/Contacts";

function App() {
  return (
    <div className="App" >
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
        <section id="contacts">
          <Contacts />
        </section>
      </Router>
    </div>
  );
}

export default App;
