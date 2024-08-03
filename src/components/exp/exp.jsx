import React from "react";
import "./exp.css";

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
    time: "2023 JULY - 2024 MAY",
    title: "Frontend At Bounteous",
    description: "Frontend developer at OrderBoard",
    color: "#00a8f6",
  },
  {
    time: "2021",
    title: "Social Media",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt",
    color: "#ff3e80",
  },
  {
    time: "2022",
    title: "Results",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt",
    color: "#7335bb",
  },
  {
    time: "2023",
    title: "Literelly me",
    description: "Denus na, ryan gosling bro",
    color: "#bcc200",
  },
];

const Exp = () => {
  return (
    <div className="experience">
      <div className="lapview">
        <div className="titlediv">
          <div className="title">Experience</div>
          <div className="design">
            <div className="dot"></div>
            <div className="underscore5"></div>
            <div className="dot"></div>
          </div>
        </div>
        <div className="content">
          <div className="expcards">
            {timelineData.map((exp, i) =>
              i % 2 === 0 ? (
                <div className="expseg" style={{ right: i * 10 + "px" }}>
                  <div className="needle">
                    <div className="empty"></div>
                    <div className="dot1"></div>
                    <div className="line"></div>
                  </div>
                  <div className="w-100 d-flex flex-column justify-content-center">
                    <div className="timeyear1">{exp.time}</div>
                    <div
                      className="midline"
                      style={{ backgroundColor: exp.color }}
                    ></div>
                    <div className="h-100 d-flex align-items-end">
                      <div className="work1">
                        <div className="worktitle">{exp.title}</div>
                        <div className="workdescription">{exp.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="expseg" style={{ right: i * 10 + "px" }}>
                  <div className="needle">
                    <div className="line"></div>
                    <div className="dot2"></div>
                    <div className="empty1"></div>
                  </div>
                  <div className="w-100 d-flex flex-column justify-content-center">
                    <div className="h-100 d-flex align-items-start">
                      <div className="work2">
                        <div className="worktitle">{exp.title}</div>
                        <div className="workdescription">{exp.description}</div>
                      </div>
                    </div>
                    <div
                      className="midline"
                      style={{ backgroundColor: exp.color }}
                    ></div>
                    <div className="timeyear2">{exp.time}</div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <div className="mview">
        <div className="titlediv">
          <div className="mtitle">Experience</div>
          <div className="design">
            <div className="dot"></div>
            <div className="underscore5"></div>
            <div className="dot"></div>
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
                    <div className="mneedle">
                      <div className="mempty"></div>
                      <div className="mdot1"></div>
                      <div className="mline"></div>
                    </div>

                    <div className="d-flex flex-row w-100">
                      <div className="mtimeyear1">
                        <div style={{ paddingRight: "1rem" }}>
                          {getWordsFromString(exp.time).map((word) => (
                            <div className="text-center">{word}</div>
                          ))}
                        </div>
                      </div>
                      <div
                        className="mmidline"
                        style={{ backgroundColor: exp.color }}
                      ></div>
                      <div className="w-100 d-flex justify-content-center align-items-start">
                        <div className="mwork1">
                          <div className="mworktitle">{exp.title}</div>
                          <div className="mworkdescription">
                            {exp.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="mexpseg"
                    style={{ position: "relative", bottom: i * 10 + "px" }}
                  >
                    <div className="mneedle">
                      <div style={{ width: "10%" }}></div>
                      <div className="mline"></div>
                      <div className="mdot2"></div>
                      <div className="mempty"></div>
                    </div>

                    <div className="d-flex flex-row justify-content-center w-100">
                      <div className="w-100 d-flex justify-content-center align-items-start">
                        <div className="mwork2">
                          <div className="mworktitle">{exp.title}</div>
                          <div className="mworkdescription">
                            {exp.description}
                          </div>
                        </div>
                      </div>
                      <div
                        className="mmidline"
                        style={{ backgroundColor: exp.color }}
                      ></div>
                      <div className="mtimeyear2">
                        <div style={{ paddingLeft: "1rem" }}>
                          {getWordsFromString(exp.time).map((word, i) => (
                            <div className="text-center">{word}</div>
                          ))}
                        </div>
                      </div>
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
    </div>
  );
};

export default Exp;
