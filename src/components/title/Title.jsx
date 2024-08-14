import { motion } from "framer-motion";
import "./Title.css";

const Title = (props) => {
  return (
    <div className="titlediv">
      <motion.div
        className="title"
        initial={{ scale: 0, y: 50 }}
        whileInView={{ scale: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.1, delay: 0.1 }}
      >
        {props.title}
      </motion.div>
      <motion.div
        className="mtitle"
        initial={{ scale: 0, y: 50 }}
        whileInView={{ scale: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.1, delay: 0.1 }}
      >
        {props.title}
      </motion.div>
      <div className="design">
        <motion.div
          initial={{ scale: 0, x: 50 }}
          whileInView={{ scale: 1, x: 0 }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.1,
            delay: 0.1,
          }}
          className="dot"
        ></motion.div>
        <motion.div
          initial={{ scale: 0, y: 50 }}
          whileInView={{ scale: 1, y: 0 }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.1,
            delay: 0.1,
          }}
          className={props.underscore}
        ></motion.div>
        <motion.div
          initial={{ scale: 0, x: -50 }}
          whileInView={{ scale: 1, x: 0 }}
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.1,
            delay: 0.1,
          }}
          className="dot"
        ></motion.div>
      </div>
    </div>
  );
};

export default Title;
