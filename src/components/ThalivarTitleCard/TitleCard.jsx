import React from "react";
import "./TitleCard.css";
import { motion } from "framer-motion";

const TitleCard = () => {
  const line1 = ["F", "U", "L", "L", "S", "T", "A", "C", "K"];
  const line2 = ["D", "E", "V", "E", "L", "O", "P", "E", "R"];

  return (
    <div className="center">
      <div className="blur1"></div>
      <div className="blur2"></div>
      <motion.div
        className="title-card"
        initial={{ opacity: 0, scale: 1.1, translateX: 0 }}
        animate={{
          opacity: [0, 1, 1, 1, 1, 1, 1],
          scale: [1.1, 1.1, 1.1, 1, 1, 1, 1],
          translateX: [0, 0, 0, 0, 0, "100px", 0],
        }}
        transition={{
          delay: 4,
          duration: 6.3,
          times: [0, 0.315, 0.835, 0.84, 0.98, 0.99, 1],
        }}
      >
        <div className="rowt">
          <div className="dots"></div>
          {line1.map((letter, i) => (
            <div className="dots">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 6 + i * 0.15, duration: 0.2 }}
                className="dots"
              >
                <span>{letter}</span>
              </motion.div>
            </div>
          ))}

          <div className="dots"></div>
        </div>
        <div className="rowt">
          <div className="dots"></div>
          <div className="dots"></div>

          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
        </div>
        <div className="rowt">
          <div className="dots"></div>
          {line2.map((letter, i) => (
            <div className="dots">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 7.5 + i * 0.15, duration: 0.2 }}
                className="dots"
              >
                <span>{letter}</span>
              </motion.div>
            </div>
          ))}
          <div className="dots"></div>
        </div>
        <motion.div
          className="name"
          initial={{
            overflow: "hidden",
            opacity: 0,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            transform: [
              "translate(-50%, -50%)",
              "translate(-50%, -50%)",
              "translate(-50%, -50%)",
              "translate(-50%, -50%)",
            ],

            maxWidth: ["84px", "84px", "84px", "400px"],
            overflow: ["hidden", "hidden", "hidden", "visible"],
            opacity: [0, 1, 1, 1],
          }}
          transition={{
            delay: 8.8,
            ease: "easeIn",
            times: [0, 0.3, 0.9, 1],
            duration: 1.5,
          }}
        >
          <motion.div
            initial={{
              scale: 25,
              rotateY: 180,
              maxWidth: "105px",
              overflow: "hidden",
            }}
            animate={{
              scale: [25, 1, 1, 1],
              rotateY: [180, 0, 0, 0],
              maxWidth: ["84px", "84px", "84px", "400px"],
            }}
            transition={{
              delay: 8.8,
              duration: 1.2,
              ease: "easeIn",
              times: [0, 0.3, 0.9, 1],
            }}
            className="text"
          >
            HARI
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="introducing"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ times: [0, 0.7, 1], duration: 4 }}
      >
        <div>Introducing....</div>
      </motion.div>
      <motion.div
        className="outro"
        initial={{ scale: 0 }}
        animate={{ scale: 100, rotate: -720 }}
        transition={{
          duration: 0.5,
          delay: 11,
        }}
      ></motion.div>
    </div>
  );
};

export default TitleCard;
