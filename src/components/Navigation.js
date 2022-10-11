import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link, animateScroll as scroll } from "react-scroll";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
      <Container className="nav-container">
        <Navbar.Brand className="nav-brand">
          <Link
            className="nav-brand"
            activeClass="active"
            to="/home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            delay={300}
          >
            ES
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav-collapse">
          <Nav className="ms-auto nav-link">
            <Link
              className="scroll-link"
              activeClass="active"
              to="/about"
              spy={true}
              smooth={true}
              offset={-200}
              duration={500}
              delay={300}
            >
              About
            </Link>

            <Link
              className="scroll-link"
              activeClass="active"
              to="/projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              delay={300}
            >
              Projects
            </Link>

            <Link
              className="scroll-link"
              activeClass="active"
              to="/contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              delay={300}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
