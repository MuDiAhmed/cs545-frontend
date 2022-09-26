import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from "../../img/logo.svg"

function Header() {
  return (
  <Navbar style={{backgroundColor: "#1872F0",textAlign: "left",borderRadius: "5px",color:"white"}}>
        <Navbar.Brand style={{ color: "white" }} href="#home">Property Managment Portal (Admin Panel)</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title="Mark Otto" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Edit Profile</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>

    <Navbar bg="light" expand="lg">
      <Container fluid style={{border: "2px   "}}>
        
        <Nav.Item style={{border: "2px   "}}>Home</Nav.Item>
        <Nav.Item style={{border: "2px   "}}><Image src={logo}/></Nav.Item>
        <Nav.Item>Sign In</Nav.Item>

      </Container>

    </Navbar>
  );
}

export default Header;