import React from 'react';
import {Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './Content.css';
import './Navdata.css';

const Navdata = () => {
  return (
    <div className='nav__bar'>
    
      <div>
        <h1 className="headding headings">gymnast</h1>
      </div>
      <div>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav__links">
          <Nav.Link href="#home" className="home" >Home</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
            <Nav.Link href="#features">Our Features</Nav.Link>
            <Nav.Link href="#classes">Classes</Nav.Link>
            <NavDropdown title="Pages" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#cantacts">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>  
      </Navbar>
      </div>
    </div>
  )
}

export default Navdata;