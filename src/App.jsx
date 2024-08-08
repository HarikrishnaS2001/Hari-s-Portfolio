import "./App.css";
import Intro from "./components/intro/intro";
import Navbar from "./components/navbar/navbar";
import Education from "./components/education/education";
import Skills from "./components/skills/skills";
import Exp from "./components/exp/exp";
import Me from "./components/knowme/me";
import Contactme from "./components/contactme/contactme";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div className="classsec">
        <section className="home">
          <Intro />
        </section>
        <section className="education">
          <Education />
        </section>
        <section className="skills">
          <Skills />
        </section>
        <section className="experience">
          <Exp />
        </section>
        <section className="knowme">
          <Me />
        </section>
        <section className="contactme">
          <Contactme />
        </section>
      </div>
    </div>
  );
}

export default App;
