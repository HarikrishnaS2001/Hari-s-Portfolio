import React, { useState, useEffect } from "react";
import "./navbar.css";
import { motion } from "framer-motion";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const menuVariants = {
    open: {
      height: "100dvh",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleMouseMove = (event) => {
    if (event.clientY <= 50) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 992) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={`navbar ${showNavbar ? "" : "hidden"}`}>
      <div className="sonly">
        <button onClick={toggleNavbar} className="navbar-toggler">
          ☰
        </button>
        <motion.div
          className={`menu ${isOpen ? "open" : "close"}`}
          variants={menuVariants}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
        >
          <a href="#home" className="menuitem" onClick={closeNavbar}>
            Home
          </a>
          <a href="#education" className="menuitem" onClick={closeNavbar}>
            Education
          </a>
          <a href="#skills" className="menuitem" onClick={closeNavbar}>
            Skills
          </a>
          <a href="#experience" className="menuitem" onClick={closeNavbar}>
            Experience
          </a>
          <a href="#knowme" className="menuitem" onClick={closeNavbar}>
            Know Me
          </a>
          <a href="#contactme" className="menuitem" onClick={closeNavbar}>
            Contact Me
          </a>
        </motion.div>
      </div>

      <div className="bsonly">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          href="#home"
          className="menuitem"
          onClick={closeNavbar}
        >
          Home
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          href="#education"
          className="menuitem"
          onClick={closeNavbar}
        >
          Education
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          href="#skills"
          className="menuitem"
          onClick={closeNavbar}
        >
          Skills
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          href="#experience"
          className="menuitem"
          onClick={closeNavbar}
        >
          Experience
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          href="#knowme"
          className="menuitem"
          onClick={closeNavbar}
        >
          Know Me
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          href="#contactme"
          className="menuitem"
          onClick={closeNavbar}
        >
          Contact Me
        </motion.a>
      </div>
    </div>
  );
};

export default CustomNavbar;
