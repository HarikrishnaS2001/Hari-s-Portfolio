import "./App.css";
import Intro from "./components/intro/intro";
import Navbar from "./components/navbar/navbar";
import Education from "./components/education/education";
import Skills from "./components/skills/skills";

function App() {
  return (
    <div className="App">
      <div className="home">
        <Navbar />
        <Intro />
      </div>
      <div className="education">
        <Education />
      </div>
      <div className="skills">
        <Skills />
      </div>
    </div>
  );
}

export default App;
