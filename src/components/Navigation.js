import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-scroll";
import React from "react";

function CollapsibleExample() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => setMenuOpen(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", function () {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  return (
    <Navbar expand="lg" sticky="top" collapseOnSelect variant="dark">
      <Container fluid>
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
        <Navbar.Toggle
          aria-controls="offcanvasNavbar-expand-lg"
          onClick={toggleMenu}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbar-expand-lg"
          placement="end"
          restoreFocus={false}
          show={menuOpen}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto">
              <Link
                className="scroll-link"
                to="/about"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                onClick={windowWidth < 992 && toggleMenu}
              >
                About
              </Link>

              <Link
                className="scroll-link"
                to="/projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={windowWidth < 992 && toggleMenu}
              >
                Projects
              </Link>

              <Link
                className="scroll-link"
                to="/contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                onClick={windowWidth < 992 && toggleMenu}
              >
                Contact
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
