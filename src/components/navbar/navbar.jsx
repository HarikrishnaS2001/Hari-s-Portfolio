import "./navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";

const CustomNavbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleMouseMove = (event) => {
    if (event.clientY <= 50) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      <Navbar expand="lg" className={`lnavbar ${showNavbar ? "" : "hidden"}`}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto menu">
            <a href="#home" className="menuitem home">
              Home
            </a>
            <a href="#education" className="menuitem eap">
              Education
            </a>
            <a href="#skills" className="menuitem eap">
              Skills
            </a>
            <a href="#experience" className="menuitem eap">
              knowme
            </a>
            <a href="#contactme" className="menuitem eap">
              Contact Me
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Navbar expand="lg" className="mnavbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto menu">
            <a href="#home" className="menuitem home">
              Home
            </a>
            <a href="#education" className="menuitem eap">
              Education
            </a>
            <a href="#skills" className="menuitem eap">
              Skills
            </a>
            <a href="#experience" className="menuitem eap">
              knowme
            </a>
            <a href="#contactme" className="menuitem eap">
              Contact Me
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
