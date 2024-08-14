import React from "react";
import "./exp.css";
import Title from "../title/Title";
import { motion } from "framer-motion";

function getWordsFromString(inputString) {
  const wordsArray = inputString.split(" ");
  return wordsArray;
}

const timelineData = [
  {
    time: "2023 JAN - 2023 MAY",
    title: "Internship at Bounteous",
    description:
      "Worked as a fullstack developer in React JS and Springboot techstacks",
    color: "#ff9802",
  },
  {
    time: "2023 JULY - 2024 MAY",
    title: "Backend At Bounteous",
    description:
      "Worked as backend developer in NOMNOM accelerator. NomNom is a digital accelerator technology by Bounteous designed to enhance custom digital experiences for restaurants.",
    color: "#00c6d9",
  },
  {
    time: "2024 MAY - 2024 SEP",
    title: "Frontend At Bounteous",
    description: "Frontend developer at OrderBoard",
    color: "#00a8f6",
  },
  {
    time: "...",
    title: "....",
    description: "Hoping for something great..",
    color: "#ff3e80",
  },
  {
    time: "...",
    title: "....",
    description: "Hoping for something great..",
    color: "#7335bb",
  },
  {
    time: "...",
    title: "....",
    description: "Hoping for something great..",
    color: "#bcc200",
  },
];

const Exp = () => {
  return (
    <div className="experience">
      <Title title="Experience" underscore="underscore5" />

      <div className="content">
        \
        <div className="expcards">
          {timelineData.map((exp, i) =>
            i % 2 === 0 ? (
              <div className="expseg" style={{ right: i * 10 + "px" }}>
                <motion.div
                  initial={{ y: -50 }}
                  whileInView={{ y: 0 }}
                  transition={{
                    duration: 0.2,
                    type: "spring",
                    bounce: 0.2,
                    delay: 0.1,
                  }}
                  className="needle"
                >
                  <div className="empty"></div>
                  <div className="dot1"></div>
                  <div className="line"></div>
                </motion.div>
                <div className="w-100 d-flex flex-column justify-content-center">
                  <motion.div
                    initial={{ y: -50 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="timeyear1"
                  >
                    {exp.time}
                  </motion.div>
                  <div
                    className="midline"
                    style={{ backgroundColor: exp.color }}
                  ></div>
                  <div className="h-100 d-flex align-items-end">
                    <motion.div
                      initial={{ y: 50 }}
                      whileInView={{ y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="work1"
                    >
                      <div className="worktitle">{exp.title}</div>
                      <div className="workdescription">{exp.description}</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="expseg" style={{ right: i * 10 + "px" }}>
                <motion.div
                  initial={{ y: 50 }}
                  whileInView={{ y: 0 }}
                  transition={{
                    duration: 0.2,
                    type: "spring",
                    bounce: 0.2,
                    delay: 0.1,
                  }}
                  className="needle"
                >
                  <div className="line"></div>
                  <div className="dot2"></div>
                  <div className="empty1"></div>
                </motion.div>
                <div className="w-100 d-flex flex-column justify-content-center">
                  <div className="h-100 d-flex align-items-start">
                    <motion.div
                      initial={{ y: -50 }}
                      whileInView={{ y: 0 }}
                      transition={{
                        duration: 0.2,
                        type: "spring",
                        bounce: 0.2,
                        delay: 0.1,
                      }}
                      className="work2"
                    >
                      <div className="worktitle">{exp.title}</div>
                      <div className="workdescription">{exp.description}</div>
                    </motion.div>
                  </div>
                  <div
                    className="midline"
                    style={{ backgroundColor: exp.color }}
                  ></div>
                  <motion.div
                    initial={{ y: -50 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="timeyear2"
                  >
                    {exp.time}
                  </motion.div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="scontent">
        <div className="mtimeline">
          <div className="d-flex justify-content-center flex-column">
            {timelineData.map((exp, i) =>
              i % 2 === 0 ? (
                <div
                  className="mexpseg"
                  style={{ position: "relative", bottom: i * 10 + "px" }}
                >
                  <motion.div
                    initial={{ x: -50 }}
                    whileInView={{ x: 0 }}
                    transition={{
                      duration: 0.2,
                      type: "spring",
                      bounce: 0.2,
                      delay: 0.1,
                    }}
                    className="mneedle"
                  >
                    <div className="mempty"></div>
                    <div className="mdot1"></div>
                    <div className="mline"></div>
                  </motion.div>

                  <div className="d-flex flex-row w-100">
                    <motion.div
                      initial={{ x: -50 }}
                      whileInView={{ x: 0 }}
                      transition={{
                        duration: 0.2,
                        type: "spring",
                        bounce: 0.2,
                        delay: 0.1,
                      }}
                      className="mtimeyear1"
                    >
                      <div style={{ paddingRight: "1rem" }}>
                        {getWordsFromString(exp.time).map((word) => (
                          <div className="text-center">{word}</div>
                        ))}
                      </div>
                    </motion.div>
                    <div
                      className="mmidline"
                      style={{ backgroundColor: exp.color }}
                    ></div>
                    <div className="w-100 d-flex justify-content-center align-items-start">
                      <motion.div
                        initial={{ x: 50 }}
                        whileInView={{ x: 0 }}
                        transition={{
                          duration: 0.2,
                          type: "spring",
                          bounce: 0.2,
                          delay: 0.1,
                        }}
                        className="mwork1"
                      >
                        <div className="mworktitle">{exp.title}</div>
                        <div className="mworkdescription">
                          {exp.description}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="mexpseg"
                  style={{ position: "relative", bottom: i * 10 + "px" }}
                >
                  <motion.div
                    initial={{ x: 50 }}
                    whileInView={{ x: 0 }}
                    transition={{
                      duration: 0.2,
                      type: "spring",
                      bounce: 0.2,
                      delay: 0.1,
                    }}
                    className="mneedle"
                  >
                    <div style={{ width: "10%" }}></div>
                    <div className="mline"></div>
                    <div className="mdot2"></div>
                    <div className="mempty"></div>
                  </motion.div>

                  <div className="d-flex flex-row justify-content-center w-100">
                    <div className="w-100 d-flex justify-content-center align-items-start">
                      <motion.div
                        initial={{ x: 50 }}
                        whileInView={{ x: 0 }}
                        transition={{
                          duration: 0.2,
                          type: "spring",
                          bounce: 0.2,
                          delay: 0.1,
                        }}
                        className="mwork2"
                      >
                        <div className="mworktitle">{exp.title}</div>
                        <div className="mworkdescription">
                          {exp.description}
                        </div>
                      </motion.div>
                    </div>
                    <div
                      className="mmidline"
                      style={{ backgroundColor: exp.color }}
                    ></div>
                    <motion.div
                      initial={{ x: -50 }}
                      whileInView={{ x: 0 }}
                      transition={{
                        duration: 0.2,
                        type: "spring",
                        bounce: 0.2,
                        delay: 0.1,
                      }}
                      className="mtimeyear2"
                    >
                      <div style={{ paddingLeft: "1rem" }}>
                        {getWordsFromString(exp.time).map((word, i) => (
                          <div className="text-center">{word}</div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              )
            )}
            <div className="d-flex justify-content-center">
              <div
                className="end"
                style={{
                  position: "relative",
                  bottom: timelineData.length * 10 - 5 + "px",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exp;
