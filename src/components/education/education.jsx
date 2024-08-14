import "./education.css";
import { Card, CardMedia, CardContent } from "@mui/material";
import sav from "../../assets/sav.png";
import sastra from "../../assets/sastra.png";
import srivv from "../../assets/srivv.png";
import Title from "../title/Title";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="education">
      <Title title="Education" underscore="underscore" />

      <div className="content">
        <div
          className="d-flex flex-column align-items-center"
          style={{ width: "90%" }}
        >
          <div className="row w-100" style={{ marginTop: "5%" }}>
            <div className="custom-col"></div>
            <p className="icon">&#10004;</p>
            <motion.div
              initial={{ scale: 0, x: -100 }}
              whileInView={{ scale: 1, x: 0 }}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 1,
                delay: 0.1,
              }}
              className="underscore2"
            ></motion.div>
            <p className="icon">&#10004;</p>
            <motion.div
              initial={{ scale: 0, x: 100 }}
              whileInView={{ scale: 1, x: 0 }}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 1,
                delay: 0.1,
              }}
              className="underscore2"
            ></motion.div>
            <p className="icon">&#10004;</p>
            <div className="custom-col"></div>
          </div>
          <div className="schools row">
            <div className="col-12 col-lg-3 col-md-3">
              <div className="d-flex justify-content-center flex-column">
                <motion.div
                  initial={{ x: -50, scale: 0 }}
                  whileInView={{ x: 0, scale: 1 }}
                  transition={{
                    delay: 0.05,
                    duration: 0.1,
                  }}
                  className="year"
                >
                  2017
                </motion.div>
                <Card style={{ background: "rgb(30, 30, 30)" }}>
                  <motion.div
                    initial={{ rotatex: -180, y: 100 }}
                    whileInView={{ rotateY: 0, y: 0 }}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.3,
                    }}
                    className="d-flex justify-content-center"
                  >
                    <CardMedia
                      component="img"
                      image={sav}
                      alt="Sample Image"
                      sx={{
                        height: "40%",
                        width: "40%",
                        objectFit: "fill",
                      }}
                    />
                  </motion.div>

                  <CardContent
                    sx={{
                      background: "rgb(30, 30, 30);",
                      color: "white",
                    }}
                  >
                    <motion.div
                      initial={{ rotatex: -180, y: 100, opacity: 0 }}
                      whileInView={{ rotateY: 0, y: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.3,
                        delay: 0.2,
                      }}
                      className="h4 text-center mb-3 font-weight-bold"
                    >
                      Sri Akilandeswari vidhyalaya
                    </motion.div>
                    <motion.div
                      color="white"
                      className="text-center h6 font-weight-normal"
                      initial={{ rotatex: -180, y: 50, opacity: 0 }}
                      whileInView={{ rotateY: 0, y: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.3,
                        delay: 0.5,
                      }}
                    >
                      A school where I had more fun and friends than focus on
                      academics.
                    </motion.div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-3">
              <div className="d-flex flex-column">
                <motion.div
                  className="year"
                  initial={{ y: -100, scale: 0 }}
                  whileInView={{ y: 0, scale: 1 }}
                  transition={{
                    delay: 0.04,
                    duration: 0.1,
                  }}
                >
                  2019
                </motion.div>

                <Card style={{ background: "rgb(30, 30, 30)" }}>
                  <motion.div
                    className="d-flex justify-content-center"
                    initial={{ rotatex: -180, y: 50, opacity: 0 }}
                    whileInView={{ rotateY: 0, y: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.3,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={srivv}
                      alt="Sample Image"
                      sx={{
                        height: "40%",
                        width: "40%",
                        objectFit: "fill",
                      }}
                    />
                  </motion.div>
                  <CardContent
                    sx={{
                      background: "rgb(30, 30, 30);",
                      height: "100%",
                      color: "white",
                    }}
                  >
                    <motion.div
                      initial={{ rotatex: -180, y: 50, opacity: 0 }}
                      whileInView={{ rotateY: 0, y: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.3,
                        delay: 0.2,
                      }}
                      className="h4 text-center mb-3 font-weight-bold"
                    >
                      Sri Vageesha Vidhyashram
                    </motion.div>
                    <motion.div
                      color="white"
                      className="text-center h6 font-weight-normal"
                      initial={{ rotatex: -180, y: 50, opacity: 0 }}
                      whileInView={{ rotateY: 0, y: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.3,
                        delay: 0.5,
                      }}
                    >
                      More studies and less fun phase. Still wasn't mehhh
                    </motion.div>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-3">
              <div className="d-flex justify-content-center flex-column">
                <motion.div
                  className="year"
                  initial={{ x: 100, scale: 0 }}
                  whileInView={{ x: 0, scale: 1 }}
                  transition={{
                    delay: 0.04,
                    duration: 0.1,
                  }}
                >
                  2023
                </motion.div>
                <Card style={{ background: "rgb(30, 30, 30)" }}>
                  <motion.div
                    className="d-flex justify-content-center"
                    initial={{ rotatex: -180, y: 100 }}
                    whileInView={{ rotateY: 0, y: 0 }}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.3,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={sastra}
                      alt="Sample Image"
                      sx={{
                        height: "40%",
                        width: "40%",
                        objectFit: "fill",
                      }}
                    />
                  </motion.div>
                  <CardContent
                    sx={{
                      background: "rgb(30, 30, 30);",
                      color: "white",
                    }}
                  >
                    <motion.div
                      initial={{ rotatex: -180, y: 100, opacity: 0 }}
                      whileInView={{ rotateY: 0, y: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.3,
                        delay: 0.2,
                      }}
                      className="h4 text-center mb-3 font-weight-bold"
                    >
                      SASTRA DEEMED UNIVERSITY
                    </motion.div>
                    <motion.div
                      color="white"
                      className="text-center h6 font-weight-normal"
                      initial={{ rotatex: -180, y: 50, opacity: 0 }}
                      whileInView={{ rotateY: 0, y: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.3,
                        delay: 0.5,
                      }}
                    >
                      A college experience that felt 75% like what you see in
                      the movies.
                    </motion.div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mcontent">
        <div className="d-flex flex-row">
          <div className="timeline">
            <p className="icon">&#10004;</p>
            <motion.div
              initial={{ scale: 0, x: -10 }}
              whileInView={{ scale: 1, x: 0 }}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 1,
              }}
              className="underscore3"
            ></motion.div>
            <p className="icon">&#10004;</p>
            <motion.div
              initial={{ scale: 0, x: -10 }}
              whileInView={{ scale: 1, x: 0 }}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 1,
              }}
              className="underscore3"
            ></motion.div>
            <p className="icon">&#10004;</p>
          </div>
          <div className="mschools">
            <div className="d-flex flex-row align-items-center">
              <motion.div
                className="year"
                initial={{ x: -10, scale: 0 }}
                whileInView={{ x: 0, scale: 1 }}
                transition={{
                  delay: 0.04,
                  duration: 0.1,
                }}
              >
                2017
              </motion.div>
              <motion.div
                className="mcontain"
                initial={{ x: 20, scale: 0 }}
                whileInView={{ x: 0, scale: 1 }}
                transition={{
                  delay: 0.04,
                  duration: 0.1,
                }}
              >
                <motion.div
                  className="d-flex align-items-center justify-content-center"
                  initial={{ rotatex: 180 }}
                  whileInView={{ rotatexx: 0 }}
                  transition={{
                    delay: 0.04,
                    duration: 0.1,
                  }}
                >
                  <img src={sav} alt="sav" height="70%" width="70%" />
                </motion.div>
                <div className="msname">SAV</div>
              </motion.div>

              <motion.div
                className="mtext"
                initial={{ x: 10 }}
                whileInView={{ x: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.1,
                }}
              >
                A school where I had more fun and friends than focus on
                academics.
              </motion.div>
            </div>
            <div className="d-flex flex-row align-items-center srivv">
              <motion.div
                className="year"
                initial={{ x: -10, scale: 0 }}
                whileInView={{ x: 0, scale: 1 }}
                transition={{
                  delay: 0.04,
                  duration: 0.1,
                }}
              >
                2019
              </motion.div>
              <motion.div
                className="mcontain"
                initial={{ x: 20, scale: 0 }}
                whileInView={{ x: 0, scale: 1 }}
                transition={{
                  delay: 0.04,
                  duration: 0.1,
                }}
              >
                <motion.div
                  className="d-flex align-items-center justify-content-center"
                  initial={{ rotatex: 180 }}
                  whileInView={{ rotatexx: 0 }}
                  transition={{
                    delay: 0.04,
                    duration: 0.1,
                  }}
                >
                  <img src={srivv} alt="sav" height="70%" width="70%" />
                </motion.div>
                <div className="msname">SVV</div>
              </motion.div>

              <motion.div
                className="mtext"
                initial={{ x: 10 }}
                whileInView={{ x: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.1,
                }}
              >
                More studies and less fun phase. Still wasn't mehhh
              </motion.div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <motion.div
                className="year"
                initial={{ x: -10, scale: 0 }}
                whileInView={{ x: 0, scale: 1 }}
                transition={{
                  delay: 0.04,
                  duration: 0.1,
                }}
              >
                2023
              </motion.div>
              <motion.div
                className="mcontain"
                initial={{ x: 20, scale: 0 }}
                whileInView={{ x: 0, scale: 1 }}
                transition={{
                  delay: 0.04,
                  duration: 0.1,
                }}
              >
                <motion.div
                  className="d-flex align-items-center justify-content-center"
                  initial={{ rotatex: 180 }}
                  whileInView={{ rotatexx: 0 }}
                  transition={{
                    delay: 0.04,
                    duration: 0.1,
                  }}
                >
                  <img src={sastra} alt="sav" height="70%" width="70%" />
                </motion.div>
                <div className="msname">SASTRA</div>
              </motion.div>

              <motion.div
                className="mtext"
                initial={{ x: 10 }}
                whileInView={{ x: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.1,
                }}
              >
                A college experience that felt 75% like what you see in the
                movies.
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
