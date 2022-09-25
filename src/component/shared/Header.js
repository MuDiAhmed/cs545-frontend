
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Property Managment Portal (Admin Page)</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title="Mark Otto" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Edit Profile</NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
}

export default Header;