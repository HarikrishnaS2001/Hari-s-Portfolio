import "./intro.css";
import hari from "../../assets/Hari.png";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import { motion } from "framer-motion";

const Intro = () => {
  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  }
  return (
    <div className="intro">
      <div className="introContent">
        <motion.div
          className="parah1"
          initial={{ opacity: 0, scale: 1, x: -40 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          transition={{
            duration: 0.2,
            delay: 0.5,
            type: "tween",
            stiffness: 20,
          }}
        >
          <div>Hiiii</div>
          <div className="d-flex flex-row">
            I am
            <motion.div
              className="yellow"
              style={{ marginLeft: "1.5rem" }}
              initial={{ y: 0 }}
              animate={{ y: [0, 2, 0, -2, 0] }}
              transition={{
                times: [0, 0.25, 0.5, 0.75, 1],
                duration: 1,
                repeat: Infinity,
              }}
            >
              Hari
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="parah2"
          initial={{ opacity: 0, scale: 1, x: 40 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          transition={{
            duration: 0.1,
            delay: 0.7,
            type: "tween",
            stiffness: 20,
          }}
        >
          I like <span className="yellow">coding</span> and have an enthusiasm
          towards <span className="yellow">tech</span>
        </motion.div>
        <motion.div
          className="parah3"
          initial={{ opacity: 0, scale: 1, x: -40 }}
          whileInView={{ scale: 1, opacity: 1, x: 0 }}
          transition={{
            duration: 0.1,
            delay: 0.7,
            type: "tween",
            stiffness: 20,
          }}
        >
          <TypingAnimation
            text="Trying to be a better coder and a learner everyday"
            speed={100}
            delay={4000}
          />
        </motion.div>
      </div>
      <motion.div
        className={`imageContainer ${isIOS() ? "hidden" : ""}`}
        initial={{ opacity: 0, scale: 1, y: 400 }}
        whileInView={{ scale: 1, opacity: 100, y: 0 }}
        transition={{
          duration: 0.1,
          delay: 1.2,
          type: "tween",
          stiffness: 20,
        }}
      >
        <img src={hari} alt="hari" className="image" />
      </motion.div>
    </div>
  );
};

export default Intro;
