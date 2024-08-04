import "./navbar.css";
import { Link } from "react-scroll";
import { Navbar, Nav } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto menu">
          <Nav.Link as={Link} to="home" className="menuitem home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="education" className="menuitem eap">
            Education
          </Nav.Link>
          <Nav.Link as={Link} to="skills" className="menuitem eap">
            Skills
          </Nav.Link>
          <Nav.Link as={Link} to="experience" className="menuitem eap">
            Experience
          </Nav.Link>

          <Nav.Link as={Link} to="knowme" className="menuitem eap">
            knowme
          </Nav.Link>
        </Nav>
        <div className="menu ml-auto">
          <div className="contactme">
            <i className="fas fa-comment-alt"></i>
            Contact Me
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
