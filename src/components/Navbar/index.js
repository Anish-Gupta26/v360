import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Divider from "../divider";
import "../Body/body.css";
// Navbar Component
const Header = () => {
  const image1 = require("../../assets/images/LOGO2.png");
  return (
    <header>
      <div className="navbar-divider">
        <Divider />
      </div>
      <Navbar
        variant="light"
        collapseOnSelect
        expand="lg"
        className="justify-content-center p-3"
      >
        <Container>
          <Navbar.Brand href="/" style={{ color: "black", fontWeight: "600" }}>
            <img
              src={image1}
              alt="V360"
              style={{ height: "60px", paddingBottom: "15px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-2">
              <Nav.Link href="">
                <Link
                  to="/photography"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <i className="fa-solid fa-camera"></i> Photography
                </Link>
              </Nav.Link>

              <Nav.Link href="">
                <Link
                  to="/logistics"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <i className="fas fa-truck"></i> Logistics
                </Link>
              </Nav.Link>

              <Nav.Link href="">
                <Link
                  to="/analytics"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <i className="fa-solid fa-magnifying-glass-chart"></i>{" "}
                  Analytics
                </Link>
              </Nav.Link>

              <Nav.Link href="">
                <Link
                  to="/about"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <i className="fas fa-user"></i> About
                </Link>
              </Nav.Link>

              <Nav.Link href="">
                <Link
                  to="/announcement"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <i className="fas fa-bullhorn"></i> Announcement
                </Link>
              </Nav.Link>

              <Nav.Link href="#contact" style={{ color: "black" }}>
                <i className="fa-solid fa-phone"></i> Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
