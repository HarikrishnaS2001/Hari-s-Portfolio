import React from "react";
import "./contactme.css";
import MovingIcon from "@mui/icons-material/Moving";
import resume from "../../assets/comicimg6.jpeg";
import telephone from "../../assets/telephone.png";
import github from "../../assets/github-sign.png";
import insta from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import mail from "../../assets/email.png";
import linkedin from "../../assets/linkedin-logo.png";
import { Download } from "@mui/icons-material";

const Contactme = () => {
  const SocialData = [
    {
      platform: "Linkedin",
      link: "https://www.linkedin.com/in/hari-k-876a17132/",
      png: <img src={linkedin} alt="linkedin" height="80%" width="80%"></img>,
    },
    {
      platform: "Github",
      link: "https://github.com/HarikrishnaS2001",
      png: <img src={github} alt="github" height="80%" width="80%"></img>,
    },
    {
      platform: "Mail",
      link: "mailto:harikrishna.s2001@gmail.com",
      png: <img src={mail} alt="mail" height="80%" width="80%"></img>,
    },
    {
      platform: "Call",
      link: "tel:9445582495",
      png: <img src={telephone} alt="telephone" height="80%" width="80%"></img>,
    },
    {
      platform: "Whatsapp",
      link: "https://wa.me/+919445592495",
      png: <img src={whatsapp} alt="whatsapp" height="80%" width="80%"></img>,
    },
    {
      platform: "Instagram",
      link: "https://www.instagram.com/haripotter_24/",
      png: <img src={insta} alt="Instagram"></img>,
    },
  ];

  return (
    <div>
      <div className="contact">
        <div className="curve">
          <div className="titlediv">
            <div className="title">Contact Me</div>
            <div className="mtitle">Contact Me</div>
            <div className="design">
              <div className="dot"></div>
              <div className="underscore6"></div>
              <div className="dot"></div>
            </div>
          </div>

          <div
            className="d-flex flex-column justify-content-around align-items-center w-100 flex-sm-row"
            style={{ height: "85%" }}
          >
            <div className=" p-3 text-center d-flex flex-column justify-content-center">
              <div className="res">Resume</div>
              <div
                className="d-flex flex-column justify-content-between"
                style={{ height: "100px" }}
              >
                <div className="download cursor-pointer">
                  <a
                    className="text-white"
                    download
                    target="_blank"
                    href={resume}
                    rel="noreferrer"
                  >
                    Download CV <Download/>
                  </a>
                </div>
                <div className="view text-white cursor-pointer">
                  <a
                    className="td-none text-white t-field "
                    target="_blank"
                    href={resume}
                    rel="noreferrer"
                  >
                    View CV &nbsp; <MovingIcon className="socio" />
                  </a>
                </div>
              </div>
            </div>
            <div className="social">
              <div className="res">Feel free to reach out to me at</div>
              <div className="d-flex flex-row justify-content-around h-100 w-100">
                {SocialData.map((socio) => (
                  <a href={socio.link} target="_blank" rel="noreferrer">
                    <div className="socialicon">{socio.png}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
