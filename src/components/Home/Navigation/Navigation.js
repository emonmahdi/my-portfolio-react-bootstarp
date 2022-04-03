import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">Developer Emon</Navbar.Brand>
          <Navbar.Toggle  aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="#about-section">About</Nav.Link>
              <Nav.Link href="#education-section">Education</Nav.Link>
              <Nav.Link href="#portfolio-section">Portfolio</Nav.Link>
              <Nav.Link href="#blog-section">Blog</Nav.Link>
              <Nav.Link href="#contact-section">Contact</Nav.Link> 
            </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
