import "./App.css";
import Intro from "./components/intro/intro";
import Navbar from "./components/navbar/navbar";
import Education from "./components/education/education";
import Skills from "./components/skills/skills";
import Exp from "./components/exp/exp";
import Me from "./components/knowme/me";
import Contactme from "./components/contactme/contactme";
import TitleCard from "./components/ThalivarTitleCard/TitleCard";
import { useState } from "react";

function App() {
  const [Title, setTitle] = useState(true);
  setTimeout(() => setTitle(false), 11500);

  return (
    <div className="App">
      {Title ? (
        <TitleCard />
      ) : (
        <div className="classsec">
          <Navbar />
          <section className="home" id="home">
            <Intro />
          </section>
          <section className="education" id="education">
            <Education />
          </section>
          <section className="skills" id="skills">
            <Skills />
          </section>
          <section className="experience" id="experience">
            <Exp />
          </section>
          <section className="knowme" id="knowme">
            <Me />
          </section>
          <section className="contactme" id="contactme">
            <Contactme />
          </section>
        </div>
      )}
    </div>
      
  );
}

export default App;
