import { useState } from "react";
import "./skills.css";
import sinon from "../../assets/sinon.png";
import chai from "../../assets/chai.png";

const Skills = () => {
  const [PLclassName, PLsetClassName] = useState("selectedskill");
  const [FEclassName, FEsetClassName] = useState("skill");
  const [BEclassName, BEsetClassName] = useState("skill");
  const [OclassName, OsetClassName] = useState("skill");

  const Pskills = [
    {
      name: "C",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
      proficiency: "80%",
    },
    {
      name: "C++",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      proficiency: "95%",
    },
    {
      name: "Java",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      proficiency: "60%",
    },
    {
      name: "Python",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      proficiency: "75%",
    },
    {
      name: "JavaScript",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      proficiency: "85%",
    },
    {
      name: "TypeScript",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      proficiency: "80%",
    },
    {
      name: "Dart",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original-wordmark.svg",
      proficiency: "60%",
    },
  ];
  const FEskills = [
    {
      name: "Html",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      proficiency: "90%",
    },
    {
      name: "CSS",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      proficiency: "80%",
    },
    {
      name: "Sass",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
      proficiency: "80%",
    },
    {
      name: "BootStrap",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      proficiency: "75%",
    },
    {
      name: "React JS",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      proficiency: "80%",
    },
    {
      name: "Framer",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
      proficiency: "60%",
    },
    {
      name: "Figma",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      proficiency: "70%",
    },
    {
      name: "Axios",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
      proficiency: "60%",
    },
  ];
  const BEskills = [
    {
      name: "Node",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
      proficiency: "80%",
    },
    {
      name: "Express",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      proficiency: "80%",
    },
    {
      name: "SQL",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
      proficiency: "90%",
    },
    {
      name: "MongoDB",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      proficiency: "90%",
    },
    {
      name: "Dynamo",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg",
      proficiency: "55%",
    },
    {
      name: "JEST",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
      proficiency: "70%",
    },
    {
      name: "Mocha",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mocha/mocha-original.svg",
      proficiency: "85%",
    },
    {
      name: "Sinon",
      imageUrl: sinon,
      proficiency: "85%",
    },
    {
      name: "Chai",
      imageUrl: chai,
      proficiency: "85%",
    },
    {
      name: "Django",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
      proficiency: "60%",
    },
    {
      name: "Swagger",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
      proficiency: "80%",
    },
  ];

  const Oskills = [
    {
      name: "Git",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      proficiency: "70%",
    },
    {
      name: "Github",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      proficiency: "70%",
    },
    {
      name: "VS code",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
      proficiency: "90%",
    },
    {
      name: "Jira",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
      proficiency: "80%",
    },
    {
      name: "Postman",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
      proficiency: "80%",
    },
    {
      name: "TensorFlow",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
      proficiency: "60%",
    },
    {
      name: "Pandas",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
      proficiency: "60%",
    },
    {
      name: "Numpy",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
      proficiency: "80%",
    },
    {
      name: "BitBucket",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bitbucket/bitbucket-original.svg",
      proficiency: "80%",
    },
    {
      name: "Canva",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
      proficiency: "90%",
    },
    {
      name: "premierepro",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-plain.svg",
      proficiency: "80%",
    },
  ];

  function PLpressed() {
    PLsetClassName("selectedskill");
    FEsetClassName("skill");
    BEsetClassName("skill");
    OsetClassName("skill");
  }

  function FEpressed() {
    PLsetClassName("skill");
    FEsetClassName("selectedskill");
    BEsetClassName("skill");
    OsetClassName("skill");
  }

  function BEpressed() {
    PLsetClassName("skill");
    FEsetClassName("skill");
    BEsetClassName("selectedskill");
    OsetClassName("skill");
  }

  function Opressed() {
    PLsetClassName("skill");
    FEsetClassName("skill");
    BEsetClassName("skill");
    OsetClassName("selectedskill");
  }

  return (
    <div className="skills">
      <div className="lapview">
        <div className="titlediv">
          <div className="title">Skills</div>
          <div className="design">
            <div className="dot"></div>
            <div className="underscore4"></div>
            <div className="dot"></div>
          </div>
        </div>

        <div className="content">
          <div className="skillstitle">
            <div className={PLclassName} onClick={PLpressed}>
              Programming Languages
            </div>
            <div className={FEclassName} onClick={FEpressed}>
              Front End
            </div>
            <div className={BEclassName} onClick={BEpressed}>
              Back End
            </div>
            <div className={OclassName} onClick={Opressed}>
              Others
            </div>
          </div>
          {PLclassName === "selectedskill" ? (
            <div className="skillcards">
              {Pskills.map((skills, i) => (
                <div className="cardz">
                  <div>
                    <div className="cardzimage">
                      <img
                        src={skills.imageUrl}
                        alt={skills.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="mt-3 text-center">{skills.name}</div>
                    <div className="loader">
                      <div
                        className="load"
                        style={{ width: skills.proficiency }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
          {FEclassName === "selectedskill" ? (
            <div className="skillcards">
              {FEskills.map((skills, i) => (
                <div className="cardz">
                  <div>
                    <div className="cardzimage">
                      <img
                        src={skills.imageUrl}
                        alt={skills.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="mt-3 text-center">{skills.name}</div>
                    <div className="loader">
                      <div
                        className="load"
                        style={{ width: skills.proficiency }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
          {BEclassName === "selectedskill" ? (
            <div className="skillcards">
              {BEskills.map((skills, i) => (
                <div className="cardz">
                  <div>
                    <div className="cardzimage">
                      <img
                        src={skills.imageUrl}
                        alt={skills.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="mt-3 text-center">{skills.name}</div>
                    <div className="loader">
                      <div
                        className="load"
                        style={{ width: skills.proficiency }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
          {OclassName === "selectedskill" ? (
            <div className="skillcards">
              {Oskills.map((skills, i) => (
                <div className="cardz">
                  <div>
                    <div className="cardzimage">
                      <img
                        src={skills.imageUrl}
                        alt={skills.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="mt-3 text-center">{skills.name}</div>
                    <div className="loader">
                      <div
                        className="load"
                        style={{ width: skills.proficiency }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <div className="mview">
        <div className="titlediv">
          <div className="mtitle">Skills</div>
          <div className="design">
            <div className="dot"></div>
            <div className="underscore4"></div>
            <div className="dot"></div>
          </div>
        </div>
        <div className="scontent">
          <div className="mskills">
            <div className="mskilltitle">Programming Languages</div>
            <div className="container">
              <div className="row">
                {Pskills.map((skills, index) => (
                  <div className="col-4 col-sm-1" key={index}>
                    <div className="mcardz">
                      <div className="mcardzimage">
                        <img
                          src={skills.imageUrl}
                          alt={skills.name}
                          height="50%"
                          width="50%"
                        />
                      </div>
                      <div className="mt-3 text-center">{skills.name}</div>
                      <div className="mloader">
                        <div
                          className="load"
                          style={{ width: skills.proficiency }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mskills">
            <div className="mskilltitle">FrontEnd Development</div>
            <div className="container">
              <div className="row">
                {FEskills.map((skills, index) => (
                  <div className="col-4 col-sm-1" key={index}>
                    <div className="mcardz">
                      <div className="mcardzimage">
                        <img
                          src={skills.imageUrl}
                          alt={skills.name}
                          height="50%"
                          width="50%"
                        />
                      </div>
                      <div className="mt-3 text-center">{skills.name}</div>
                      <div className="mloader">
                        <div
                          className="load"
                          style={{ width: skills.proficiency }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mskills">
            <div className="mskilltitle">BackEnd Development</div>
            <div className="container">
              <div className="row">
                {BEskills.map((skills, index) => (
                  <div className="col-4 col-sm-1" key={index}>
                    <div className="mcardz">
                      <div className="mcardzimage">
                        <img
                          src={skills.imageUrl}
                          alt={skills.name}
                          height="50%"
                          width="50%"
                        />
                      </div>
                      <div className="mt-3 text-center">{skills.name}</div>
                      <div className="mloader">
                        <div
                          className="load"
                          style={{ width: skills.proficiency }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mskills">
            <div className="mskilltitle">Others</div>
            <div className="container">
              <div className="row">
                {Oskills.map((skills, index) => (
                  <div className="col-4 col-sm-1" key={index}>
                    <div className="mcardz">
                      <div className="mcardzimage">
                        <img
                          src={skills.imageUrl}
                          alt={skills.name}
                          height="50%"
                          width="50%"
                        />
                      </div>
                      <div className="mt-3 text-center">{skills.name}</div>
                      <div className="mloader">
                        <div
                          className="load"
                          style={{ width: skills.proficiency }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
