import React from "react";
import {
  Container,
  Navbar,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";
// import Divider from '../divider'

const Header = () => {
  return (
    <header>
      <Navbar variant="dark" collapseOnSelect expand="lg" className="fixed-top justify-content-center p-3" style={{backgroundColor:"#262626"}} >
        <Container>
          <Navbar.Brand href="/">V360° Studio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-2">
                <Nav.Link href='#services'>
                <i className="fa-solid fa-screwdriver-wrench"></i>Services
                </Nav.Link>
                <Nav.Link href=''>
                  <Link to='/about' style={{color:"#FFFFFF8C", textDecoration:"none"}}>
                <i className="fas fa-user"></i> About
                </Link>
                </Nav.Link>
                <Nav.Link href='#contact'>
                  <i className="fa-solid fa-phone"></i> Contact
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div>
      <Divider/>
      </div> */}
    </header>
  );
};

export default Header;