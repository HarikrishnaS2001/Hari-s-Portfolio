import { useState } from "react";
import "./skills.css";
import sinon from "../../assets/sinon.png";
import chai from "../../assets/chai.png";
import Title from "../title/Title";
import { motion } from "framer-motion";

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
      name: "Tailwindcss",
      imageUrl:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      proficiency: "70%",
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

  function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }

  return (
    <div className="skills">
      <Title title="Skills" underscore="underscore4" />
      <div className={`content ${isSafari() ? " hidden" : ""}`}>
        <div className="skillstitle">
          <motion.div
            className={PLclassName}
            onClick={PLpressed}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div>Programming Languages</div>
          </motion.div>
          <motion.div
            className={FEclassName}
            onClick={FEpressed}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div>Front End</div>
          </motion.div>
          <motion.div
            className={BEclassName}
            onClick={BEpressed}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div>Back End</div>
          </motion.div>
          <motion.div
            className={OclassName}
            onClick={Opressed}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div>Others</div>
          </motion.div>
        </div>
        {PLclassName === "selectedskill" ? (
          <div className="skillcards">
            {Pskills.map((skills, i) => (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.1, delay: (i % 6) * 0.1 }}
                className="cardz"
              >
                <div>
                  <motion.div
                    initial={{ rotateX: 180 }}
                    whileInView={{ rotateX: 0 }}
                    transition={{ duration: 0.2, delay: (i % 6) * 0.15 }}
                    className="cardzimage"
                  >
                    <img
                      src={skills.imageUrl}
                      alt={skills.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: (i % 6) * 0.1,
                      type: "spring",
                      bounce: 0.3,
                    }}
                    className="mt-3 text-center"
                  >
                    {skills.name}
                  </motion.div>
                  <div className="loader">
                    <motion.div
                      className="load"
                      initial={{ x: -50, opacity: 1 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: (i % 6) * 0.1,
                      }}
                      style={{ width: skills.proficiency }}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
        {FEclassName === "selectedskill" ? (
          <div className="skillcards">
            {FEskills.map((skills, i) => (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.1, delay: (i % 6) * 0.1 }}
                className="cardz"
              >
                <div>
                  <motion.div
                    initial={{ rotateX: 180 }}
                    whileInView={{ rotateX: 0 }}
                    transition={{ duration: 0.2, delay: (i % 6) * 0.15 }}
                    className="cardzimage"
                  >
                    <img
                      src={skills.imageUrl}
                      alt={skills.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: (i % 6) * 0.1,
                      type: "spring",
                      bounce: 0.3,
                    }}
                    className="mt-3 text-center"
                  >
                    {skills.name}
                  </motion.div>{" "}
                  <div className="loader">
                    <motion.div
                      className="load"
                      initial={{ x: -50, opacity: 1 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: (i % 6) * 0.1,
                      }}
                      style={{ width: skills.proficiency }}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
        {BEclassName === "selectedskill" ? (
          <div className="skillcards">
            {BEskills.map((skills, i) => (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.1, delay: (i % 6) * 0.1 }}
                className="cardz"
              >
                <div>
                  <motion.div
                    initial={{ rotateX: 180 }}
                    whileInView={{ rotateX: 0 }}
                    transition={{ duration: 0.2, delay: (i % 6) * 0.15 }}
                    className="cardzimage"
                  >
                    <img
                      src={skills.imageUrl}
                      alt={skills.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: (i % 6) * 0.1,
                      type: "spring",
                      bounce: 0.3,
                    }}
                    className="mt-3 text-center"
                  >
                    {skills.name}
                  </motion.div>
                  <div className="loader">
                    <motion.div
                      className="load"
                      initial={{ x: -50, opacity: 1 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: (i % 6) * 0.1,
                      }}
                      style={{ width: skills.proficiency }}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
        {OclassName === "selectedskill" ? (
          <div className="skillcards">
            {Oskills.map((skills, i) => (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.1, delay: (i % 6) * 0.1 }}
                className="cardz"
              >
                <div>
                  <motion.div
                    initial={{ rotateX: 180 }}
                    whileInView={{ rotateX: 0 }}
                    transition={{ duration: 0.2, delay: (i % 6) * 0.15 }}
                    className="cardzimage"
                  >
                    <img
                      src={skills.imageUrl}
                      alt={skills.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: (i % 6) * 0.1,
                      type: "spring",
                      bounce: 0.3,
                    }}
                    className="mt-3 text-center"
                  >
                    {skills.name}
                  </motion.div>
                  <div className="loader">
                    <motion.div
                      className="load"
                      initial={{ x: -50, opacity: 1 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: (i % 6) * 0.1,
                      }}
                      style={{ width: skills.proficiency }}
                    ></motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className={`content ${isSafari() ? "" : " hidden"}`}>
        <div className="skillstitle">
          <motion.div
            className={PLclassName}
            onClick={PLpressed}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div>Programming Languages</div>
          </motion.div>
          <motion.div
            className={FEclassName}
            onClick={FEpressed}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div>Front End</div>
          </motion.div>
          <motion.div
            className={BEclassName}
            onClick={BEpressed}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div>Back End</div>
          </motion.div>
          <motion.div
            className={OclassName}
            onClick={Opressed}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div>Others</div>
          </motion.div>
        </div>
        {PLclassName === "selectedskill" ? (
          <div className="skillcards">
            {Pskills.map((skills, i) => (
              <div
                className="cardz"
              >
                <div>
                  <motion.div
                    initial={{ rotateX: 180 }}
                    whileInView={{ rotateX: 0 }}
                    transition={{ duration: 0.2, delay: (i % 6) * 0.15 }}
                    className="cardzimage"
                  >
                    <img
                      src={skills.imageUrl}
                      alt={skills.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: (i % 6) * 0.1,
                      type: "spring",
                      bounce: 0.3,
                    }}
                    className="mt-3 text-center"
                  >
                    {skills.name}
                  </motion.div>
                  <div className="loader">
                    <motion.div
                      className="load"
                      initial={{ x: -50, opacity: 1 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: (i % 6) * 0.1,
                      }}
                      style={{ width: skills.proficiency }}
                    ></motion.div>
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
              <div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.1, delay: (i % 6) * 0.1 }}
                className="cardz"
              >
                <div>
                  <motion.div
                    initial={{ rotateX: 180 }}
                    whileInView={{ rotateX: 0 }}
                    transition={{ duration: 0.2, delay: (i % 6) * 0.15 }}
                    className="cardzimage"
                  >
                    <img
                      src={skills.imageUrl}
                      alt={skills.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: (i % 6) * 0.1,
                      type: "spring",
                      bounce: 0.3,
                    }}
                    className="mt-3 text-center"
                  >
                    {skills.name}
                  </motion.div>{" "}
                  <div className="loader">
                    <motion.div
                      className="load"
                      initial={{ x: -50, opacity: 1 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: (i % 6) * 0.1,
                      }}
                      style={{ width: skills.proficiency }}
                    ></motion.div>
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
              <div
                className="cardz"
              >
                <div>
                  <motion.div
                    initial={{ rotateX: 180 }}
                    whileInView={{ rotateX: 0 }}
                    transition={{ duration: 0.2, delay: (i % 6) * 0.15 }}
                    className="cardzimage"
                  >
                    <img
                      src={skills.imageUrl}
                      alt={skills.name}
                      style={{
                        width: "128px",
                        height: "96px",
                        objectFit: "contain",
                      }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: (i % 6) * 0.1,
                      type: "spring",
                      bounce: 0.3,
                    }}
                    className="mt-3 text-center"
                  >
                    {skills.name}
                  </motion.div>
                  <div className="loader">
                    <motion.div
                      className="load"
                      initial={{ x: -50, opacity: 1 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: (i % 6) * 0.1,
                      }}
                      style={{ width: skills.proficiency }}
                    ></motion.div>
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
              <div
                className="cardz"
              >
                <div>
                  <motion.div
                    initial={{ rotateX: 180 }}
                    whileInView={{ rotateX: 0 }}
                    transition={{ duration: 0.2, delay: (i % 6) * 0.15 }}
                    className="cardzimage"
                  >
                    <img
                      src={skills.imageUrl}
                      alt={skills.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: (i % 6) * 0.1,
                      type: "spring",
                      bounce: 0.3,
                    }}
                    className="mt-3 text-center"
                  >
                    {skills.name}
                  </motion.div>
                  <div className="loader">
                    <motion.div
                      className="load"
                      initial={{ x: -50, opacity: 1 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: (i % 6) * 0.1,
                      }}
                      style={{ width: skills.proficiency }}
                    ></motion.div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div className="scontent">
        <div className="mskills">
          <div className="mskilltitle">Programming Languages</div>
          <div className="container">
            <div className="row">
              {Pskills.map((skills, index) => (
                <div className="col-4 col-sm-1" key={index}>
                  <div className="mcardz">
                    <motion.div
                      initial={{ rotateX: 180 }}
                      whileInView={{ rotateX: 0 }}
                      transition={{ duration: 0.2, delay: 0.15 }}
                      className="mcardzimage"
                    >
                      <img
                        src={skills.imageUrl}
                        alt={skills.name}
                        height="50%"
                        width="50%"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 0.1,
                        type: "spring",
                        bounce: 0.3,
                      }}
                      className="mt-3 text-center"
                    >
                      {skills.name}
                    </motion.div>{" "}
                    <div className="mloader">
                      <motion.div
                        className="load"
                        initial={{ x: -30, opacity: 1 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0.1,
                        }}
                        style={{ width: skills.proficiency }}
                      ></motion.div>
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
                    <motion.div
                      initial={{ rotateX: 180 }}
                      whileInView={{ rotateX: 0 }}
                      transition={{ duration: 0.2, delay: 0.15 }}
                      className="mcardzimage"
                    >
                      <img
                        src={skills.imageUrl}
                        alt={skills.name}
                        height="50%"
                        width="50%"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 0.1,
                        type: "spring",
                        bounce: 0.3,
                      }}
                      className="mt-3 text-center"
                    >
                      {skills.name}
                    </motion.div>{" "}
                    <div className="mloader">
                      <motion.div
                        className="load"
                        initial={{ x: -30, opacity: 1 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0.1,
                        }}
                        style={{ width: skills.proficiency }}
                      ></motion.div>
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
                    <motion.div
                      initial={{ rotateX: 180 }}
                      whileInView={{ rotateX: 0 }}
                      transition={{ duration: 0.2, delay: 0.15 }}
                      className="mcardzimage"
                    >
                      <img
                        src={skills.imageUrl}
                        alt={skills.name}
                        height="50%"
                        width="50%"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 0.1,
                        type: "spring",
                        bounce: 0.3,
                      }}
                      className="mt-3 text-center"
                    >
                      {skills.name}
                    </motion.div>{" "}
                    <div className="mloader">
                      <motion.div
                        className="load"
                        initial={{ x: -30, opacity: 1 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0.1,
                        }}
                        style={{ width: skills.proficiency }}
                      ></motion.div>
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
                    <motion.div
                      initial={{ rotateX: 180 }}
                      whileInView={{ rotateX: 0 }}
                      transition={{ duration: 0.2, delay: 0.15 }}
                      className="mcardzimage"
                    >
                      <img
                        src={skills.imageUrl}
                        alt={skills.name}
                        height="50%"
                        width="50%"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 1,
                        delay: 0.1,
                        type: "spring",
                        bounce: 0.3,
                      }}
                      className="mt-3 text-center"
                    >
                      {skills.name}
                    </motion.div>{" "}
                    <div className="mloader">
                      <motion.div
                        className="load"
                        initial={{ x: -20, opacity: 1 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{
                          duration: 1,
                          delay: 0.1,
                        }}
                        style={{ width: skills.proficiency }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
