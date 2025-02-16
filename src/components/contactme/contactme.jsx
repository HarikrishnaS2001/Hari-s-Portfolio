import React from "react";
import "./contactme.css";
import MovingIcon from "@mui/icons-material/Moving";
import resume from "../../assets/HariResume.pdf";
import telephone from "../../assets/telephone.png";
import github from "../../assets/github-sign.png";
import insta from "../../assets/instagram.png";
import whatsapp from "../../assets/whatsapp.png";
import mail from "../../assets/email.png";
import linkedin from "../../assets/linkedin-logo.png";
import { Download } from "@mui/icons-material";
import Title from "../title/Title";
import { motion } from "framer-motion";

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
          <Title title="Contact Me" underscore="underscore6" />
          <div
            className="d-flex flex-column justify-content-around align-items-center w-100 flex-sm-row"
            style={{ height: "80%" }}
          >
            <div className=" p-3 text-center d-flex flex-column justify-content-center">
              <motion.div
                initial={{ y: 200 }}
                whileInView={{ y: 0 }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                  bounce: 0.2,
                  delay: 0.1,
                }}
                className="res"
              >
                Resume
              </motion.div>
              <div
                className="d-flex flex-column justify-content-between"
                style={{ height: "100px" }}
              >
                <motion.div
                  initial={{ y: 100 }}
                  whileInView={{ y: 0 }}
                  transition={{
                    duration: 0.2,
                    type: "spring",
                    bounce: 0.2,
                    delay: 0.2,
                  }}
                  className="download cursor-pointer"
                >
                  <a
                    className="text-white"
                    download
                    target="_blank"
                    href={resume}
                    rel="noreferrer"
                    style={{ fontFamily: "Zilla Slab" }}
                  >
                    Download CV <Download />
                  </a>
                </motion.div>
                <motion.div
                  initial={{ y: 100 }}
                  whileInView={{ y: 0 }}
                  transition={{
                    duration: 0.2,
                    type: "spring",
                    bounce: 0.2,
                    delay: 0.3,
                  }}
                  className="view text-white cursor-pointer"
                >
                  <a
                    className="td-none text-white t-field "
                    target="_blank"
                    href={resume}
                    rel="noreferrer"
                    style={{ fontFamily: "Zilla Slab" }}
                  >
                    View CV &nbsp; <MovingIcon className="socio" />
                  </a>
                </motion.div>
              </div>
            </div>
            <div className="social">
              <div className="res">Feel free to reach out to me at</div>
              <div className="d-flex flex-row justify-content-around h-100 w-100">
                {SocialData.map((socio, i) => (
                  <a href={socio.link} target="_blank" rel="noreferrer">
                    <motion.div
                      initial={{ y: 50 }}
                      whileInView={{ y: 0 }}
                      transition={{
                        duration: 0.5,
                        type: "spring",
                        bounce: 0.3,
                        delay: 0.1 * i,
                      }}
                      className="socialicon"
                    >
                      {socio.png}
                    </motion.div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="d-flex flex-column align-items-center w-100 copyright">
            <p>© 2024, Built with React By Hari.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
