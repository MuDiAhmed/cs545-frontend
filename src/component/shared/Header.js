import {Navbar, NavDropdown } from "react-bootstrap";


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
    </Navbar>
  );
}

export default Header;