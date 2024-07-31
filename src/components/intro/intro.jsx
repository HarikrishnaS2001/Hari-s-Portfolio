import "./intro.css";
import hari from "../../assets/Hari.png";

const Intro = () => {
  return (
    <div
      className="intro"
    >
      <div className="introContent">
        <div className="parah1">
          <div>Hiiii</div>
          <div>
            I am <span className="yellow">Hari</span>
          </div>
        </div>
        <div className="parah2">
            I like <span className="yellow">coding</span> and have an
            enthusiasm towards <span className="yellow">tech</span>
        </div>
        <div className="parah3">
            Trying to be a better coder and a learner everyday (typing
            animation)
        </div>
      </div>
      <div className="imageContainer">
        <img src={hari} alt="hari" className="image" />
      </div>
    </div>
  );
};

export default Intro;
