import React, { useState } from "react";
import "./me.css";
import comic1 from "../../assets/comicimg1.png";
import comic2 from "../../assets/comicimg2.jpeg";
import comic3 from "../../assets/comicimg3.jpeg";
import comic4 from "../../assets/comicimg4.jpeg";
import comic5 from "../../assets/comicimg5.jpeg";
import comic6 from "../../assets/comicimg6.jpeg";
import TypingAnimation from "../TypingAnimation/TypingAnimation";
import { Warning } from "@mui/icons-material";
import { motion } from "framer-motion";

const Me = () => {
  const [knowme, setKnowMe] = useState(false);

  const handleButtonClick = () => {
    setKnowMe(true);
  };

  return knowme ? (
    <div>
      <div className="lapview">
        <div className="d-flex flex-row h-100 w-100">
          <div className="col1">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.1,
                delay: 0.5,
                type: "spring",
                bounce: 0.2,
              }}
              className="alm"
            >
              <div>
                <div className="gochi">All About</div>
                <div className="tborder">ME</div>
              </div>
            </motion.div>
            <div class="dialogue-container">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.2,
                  delay: 0.75,
                  type: "spring",
                  bounce: 0.2,
                }}
                class="dialogue-bubble"
              >
                Hiiiiii! I can communicate fluently in Tamil, Telugu, and
                English, and I have a basic understanding of Hindi and
                Sanskrit., I'm always eager to embrace new challenges and
                opportunities. Nice to meet you!
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.1,
                delay: 1,
                type: "spring",
                bounce: 0.2,
              }}
              className="imagecontainer"
            >
              <img src={comic1} alt="comic1" className="comic1" />
            </motion.div>
          </div>
          <div className="h-100 w-100 d-flex flex-column">
            <div className="row1">
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.1,
                  delay: 3,
                  type: "spring",
                  bounce: 0.2,
                }}
                className="sports gochi"
              >
                <div>Football❤️</div>
                <img
                  src={comic5}
                  className="comic5"
                  alt="comic5"
                  height="90%"
                  width="85%"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 1.25,
                  type: "spring",
                  bounce: 0.2,
                }}
                className="movies"
              >
                <div className="w-100" style={{ height: "90%" }}>
                  <img
                    src={comic2}
                    alt="comic2"
                    className="comic2"
                    height="100%"
                    width="100%"
                    objectFit="cover"
                  />
                </div>
                <div
                  className="d-flex align-items-center justify-content-center w-100"
                  style={{ flexGrow: 1 }}
                >
                  <div
                    className="text-center hanalei"
                    style={{ height: "fit-content" }}
                  >
                    Captivated by the magic of the movies, I love films more
                    than I love myself
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="row1">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.1,
                  delay: 1.75,
                  type: "spring",
                  bounce: 0.2,
                }}
                className="travel h-100 w-50 d-flex flex-row"
              >
                <div
                  className="d-flex flex-column h-100 w-50"
                  style={{ backgroundColor: "black" }}
                >
                  <div
                    className="d-flex justify-content-center align-items-center w-100 h-50"
                    style={{ objectFit: "cover" }}
                  >
                    <img
                      src={comic4}
                      alt="comic4"
                      className="comic4"
                      height="100%"
                      width="100%"
                    />
                  </div>
                  <div
                    className="w-100 h-50 d-flex justify-content-center align-items-center"
                    style={{ objectFit: "cover" }}
                  >
                    <div className="text-center">
                      Travel
                      <i class="fa fa-heart" style={{ color: "white" }}></i>
                    </div>
                  </div>
                </div>
                <div
                  className="w-50 h-100 d-flex justify-content-center align-items-center"
                  style={{ objectFit: "cover" }}
                >
                  <img
                    src={comic3}
                    alt="comic3"
                    className="comic3"
                    height="100%"
                    width="100%"
                  />
                </div>
              </motion.div>
              <div
                className="d-flex flex-column align-items-center h-100 w-25"
                style={{ margin: "0.5rem" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.1,
                    delay: 2.25,
                    type: "spring",
                    bounce: 0.2,
                  }}
                  className="music gochi"
                >
                  <p>
                    A.R. Rahman<i class="fa fa-heart"></i>, Ennio Morricone
                    <i class="fas fa-guitar"></i>, and Hans Zimmer
                    <i class="fas fa-headphones"></i>. From the timeless
                    classics of Ilaiyaraaja
                    <i class="fab fa-spotify"></i>
                    to the modern hits of Anirudh<i class="fas fa-music"></i>
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.1,
                    delay: 3.75,
                    type: "spring",
                    bounce: 0.2,
                  }}
                  className="h-50 w-100 p-3 fw-bold"
                >
                  <TypingAnimation
                    text="I can type at a speed of 75 words per minute or higher."
                    speed={50}
                    delay={2000}
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.1,
                  delay: 3.25,
                  type: "spring",
                  bounce: 0.2,
                }}
                className=" fitness gochi"
              >
                Photography
                <img
                  src={comic6}
                  alt="comic6"
                  className="comic6"
                  height="90%"
                  width="90%"
                ></img>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="mview">
        <div className="scontent">
          <div style={{ margin: "1rem" }}></div>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.1,
              delay: 0.5,
              type: "spring",
              bounce: 0.2,
            }}
            className="malm"
          >
            <div>
              <div className="gochi">All About</div>
              <div className="tborder">ME</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.1,
              delay: 0.5,
              type: "spring",
              bounce: 0.2,
            }}
            class="mdialogue-container"
          >
            <div class="dialogue-bubble">
              Hiiiiii! I can communicate fluently in Tamil, Telugu, and English,
              and I have a basic understanding of Hindi and Sanskrit., I'm
              always eager to embrace new challenges and opportunities. Nice to
              meet you!
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.1,
              delay: 0.5,
              type: "spring",
              bounce: 0.2,
            }}
            className="mimagecontainer"
          >
            <img src={comic1} alt="comic1" className="comic1" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.1,
              delay: 0.5,
              type: "spring",
              bounce: 0.2,
            }}
            className="msports gochi"
          >
            <div>Football❤️</div>
            <img src={comic5} alt="comic5" height="90%" width="85%" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.1,
              delay: 0.5,
              type: "spring",
              bounce: 0.2,
            }}
            className="mmovies"
          >
            <div className="w-100 ">
              <img src={comic2} alt="comic2" className="comic2" />
            </div>
            <div
              className="w-100 text-center hanalei"
              style={{ height: "fit-content" }}
            >
              Captivated by the magic of the movies, I love films more than I
              love myself
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.1,
              delay: 0.5,
              type: "spring",
              bounce: 0.2,
            }}
            className="mtravel d-flex flex-row"
          >
            <div
              className="d-flex flex-column h-100 w-50"
              style={{ backgroundColor: "black" }}
            >
              <div
                className="d-flex justify-content-center align-items-center w-100 h-50"
                style={{ objectFit: "cover" }}
              >
                <img src={comic4} alt="comic4" height="100%" width="100%" />
              </div>
              <div
                className="w-100 h-50 d-flex justify-content-center align-items-center"
                style={{ objectFit: "cover" }}
              >
                <div className="text-center h-100">
                  Travel
                  <i class="fa fa-heart" style={{ color: "white" }}></i>
                </div>
              </div>
            </div>
            <div
              className="w-50 h-100 d-flex justify-content-center align-items-center"
              style={{ objectFit: "cover" }}
            >
              <img src={comic3} alt="comic3" height="100%" width="100%" />
            </div>
            {/* <div
                    className="d-flex flex-column h-100 w-50"
                    style={{ backgroundColor: "black" }}
                  >
                    <div
                      className="d-flex justify-content-center align-items-center w-100 h-50"
                      style={{ objectFit: "cover" }}
                    >
                      <img
                        src={comic8}
                        alt="comic8"
                        height="100%"
                        width="100%"
                      />
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center w-100 h-50"
                      style={{ objectFit: "cover" }}
                    >
                      <img
                        src={comic7}
                        alt="comic7"
                        height="100%"
                        width="100%"
                      />
                    </div>
                    <div
                      className="w-100 h-50 d-flex justify-content-center align-items-center"
                      style={{ objectFit: "cover" }}
                    >
                      <div className="text-center">
                        Travel
                        <i class="fa fa-heart" style={{ color: "white" }}></i>
                      </div>
                    </div>
                  </div> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.1,
              delay: 0.5,
              type: "spring",
              bounce: 0.2,
            }}
            className="h-50 w-100 p-3 fw-bolder"
          >
            <TypingAnimation
              text="Trying to be a better coder and a learner everyday"
              speed={100}
              delay={2000}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.1,
              delay: 0.5,
              type: "spring",
              bounce: 0.2,
            }}
            className="mmusic gochi"
          >
            <div className="d-flex flex-column justify-content-between  align-items-stretch h-100">
              <div className="h-100">
                A.R. Rahman<i class="fa fa-heart"></i>, Ennio Morricone
                <i class="fa fa-heart"></i>, and Hans Zimmer
                <i class="fa fa-heart"></i>. From the timeless classics of
                Ilaiyaraaja
                <i class="fa fa-heart"></i>
                to the modern hits of Anirudh<i class="fa fa-heart"></i>
              </div>
              <div
                className="d-flex justify-content-between align-self-end w-100"
                style={{ height: "fit-content" }}
              >
                <i class="fas fa-guitar"></i>
                <i class="fas fa-headphones"></i>
                <i class="fas fa-play"></i>
                <i class="fas fa-music"></i>
                <i class="fas fa-sliders-h"></i>
                <i class="fas fa-volume-up"></i>
                <i class="fab fa-spotify"></i>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.1,
              delay: 0.5,
              type: "spring",
              bounce: 0.2,
            }}
            className=" mfitness gochi"
          >
            Photography
            <img src={comic6} alt="comic6" height="90%" width="90%"></img>
          </motion.div>
        </div>
      </div>
    </div>
  ) : (
    <div className="home-page">
      <div style={{ width: "80%" }}>
        <h1 style={{ fontFamily: "Karla" }}>HI!</h1>
        <p style={{ fontFamily: "Karla" }}>
          This page doesn't contain any technical information. It's all about
          knowing Hari as a person and his hobbies.
        </p>
        <p style={{ fontFamily: "Karla" }}>
          <Warning />
          Click only if you want to know more about him!
          <Warning />
        </p>
        <button
          onClick={handleButtonClick}
          style={{ fontFamily: "Zilla Slab" }}
        >
          Click here to know More About Me
        </button>
      </div>
    </div>
  );
};

export default Me;
