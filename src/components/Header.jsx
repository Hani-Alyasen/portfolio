import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary " fixed="top">
      <div className="container-fluid d-flex justify-content-between align-items-center ">
        <Navbar.Brand href="#home" className="text-info">
          Quantum Core
        </Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
