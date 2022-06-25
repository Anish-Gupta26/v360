import React from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Divider from '../divider'
import '../Body/body.css'

const Header = () => {
  return (
    <header>
      <Navbar variant="light" collapseOnSelect expand="lg" className="justify-content-center p-3" >
        <Container>
          <Navbar.Brand href="/" style={{color:"black", fontWeight:"600"}}>V360° Studio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-2">
                <NavDropdown title="Services" id="collasible-nav-dropdown">
                {/* <i className="fa-solid fa-screwdriver-wrench"></i> */}
                  <NavDropdown.Item href="/photography">Photography</NavDropdown.Item>
                  <NavDropdown.Item href="/logistis">Logistics</NavDropdown.Item>
                  <NavDropdown.Item href="/analytics">Analytics</NavDropdown.Item>
                </NavDropdown> 
                <Nav.Link href=''>
                  <Link to='/about' style={{color:"black", textDecoration:"none"}}>
                <i className="fas fa-user"></i> About
                </Link>
                </Nav.Link>
                <Nav.Link href='#contact' style={{color:"black"}}>
                  <i className="fa-solid fa-phone"></i> Contact
                </Nav.Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="navbar-divider">
      <Divider/>
      </div>
    </header>
  );
};

export default Header;