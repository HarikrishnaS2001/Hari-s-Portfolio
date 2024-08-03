import "./education.css";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import sav from "../../assets/sav.png";
import sastra from "../../assets/sastra.png";
import srivv from "../../assets/srivv.png";

const Education = () => {
  return (
    <div className="education">
      <div className="titlediv">
        <div className="title">Education</div>
        <div className="mtitle">Education</div>
        <div className="design">
          <div className="dot"></div>
          <div className="underscore"></div>
          <div className="dot"></div>
        </div>
      </div>

      <div className="content">
        <div
          className="d-flex flex-column align-items-center"
          style={{ width: "90%" }}
        >
          <div className="row w-100" style={{ marginTop: "5%" }}>
            <div className="custom-col"></div>
            <p className="icon">&#10004;</p>
            <div className="underscore2"></div>
            <p className="icon">&#10004;</p>
            <div className="underscore2"></div>
            <p className="icon">&#10004;</p>
            <div className="custom-col"></div>
          </div>
          <div className="schools row">
            <div className="col-12 col-lg-3 col-md-3">
              <div className="d-flex justify-content-center flex-column">
                <div className="year">2017</div>
                <Card>
                  <div
                    className="d-flex justify-content-center"
                    style={{ background: "rgb(30, 30, 30)" }}
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
                  </div>

                  <CardContent
                    sx={{
                      background: "rgb(30, 30, 30);",
                      color: "white",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      className="text-center"
                      component="div"
                    >
                      Sri Akilandeswari vidhyalaya
                    </Typography>
                    <Typography
                      color="white"
                      className="text-center"
                      variant="body2"
                    >
                      A school where I had more fun and friends than focus on
                      academics.
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-3">
              <div className="d-flex flex-column">
                <div className="year">2019</div>
                <Card>
                  <div
                    className="d-flex justify-content-center"
                    style={{ background: "rgb(30, 30, 30)" }}
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
                  </div>
                  <CardContent
                    sx={{
                      background: "rgb(30, 30, 30);",
                      height: "100%",
                      color: "white",
                    }}
                  >
                    <Typography
                      className="text-center"
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Sri Vageesha Vidhyashram
                    </Typography>
                    <Typography className="text-center" variant="body2">
                      More studies and less fun phase. Still wasn't mehhh
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-md-3">
              <div className="d-flex justify-content-center flex-column">
                <div className="year">2023</div>
                <Card>
                  <div
                    className="d-flex justify-content-center"
                    style={{ background: "rgb(30, 30, 30)" }}
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
                  </div>
                  <CardContent
                    sx={{
                      background: "rgb(30, 30, 30);",
                      color: "white",
                    }}
                  >
                    <Typography
                      className="text-center"
                      gutterBottom
                      variant="h6"
                      component="div"
                    >
                      SASTRA DEEMED UNIVERSITY
                    </Typography>
                    <Typography className="text-center" variant="body2">
                      A college experience that felt 75% like what you see in
                      the movies.
                    </Typography>
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
            <div className="underscore3"></div>
            <p className="icon">&#10004;</p>
            <div className="underscore3"></div>
            <p className="icon">&#10004;</p>
          </div>
          <div className="mschools">
            <div className="d-flex flex-row align-items-center">
              <div className="year">2017</div>
              <div className="mcontain">
                <div className="d-flex align-items-center justify-content-center">
                  <img src={sav} alt="sav" height="70%" width="70%" />
                </div>
                <div className="msname">SAV</div>
              </div>

              <div className="mtext">
                A school where I had more fun and friends than focus on
                academics.
              </div>
            </div>
            <div className="d-flex flex-row align-items-center srivv">
              <div className="year">2019</div>
              <div className="mcontain">
                <div className="d-flex align-items-center justify-content-center">
                  <img src={srivv} alt="sav" height="70%" width="70%"/>
                </div>
                <div className="msname">SVV</div>
              </div>

              <div className="mtext">
                More studies and less fun phase. Still wasn't mehhh
              </div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <div className="year">2023</div>
              <div className="mcontain">
                <div className="d-flex align-items-center justify-content-center">
                  <img src={sastra} alt="sav" height="70%" width="70%" />
                </div>
                <div className="msname">SASTRA</div>
              </div>

              <div className="mtext">
                A college experience that felt 75% like what you see in the
                movies.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
