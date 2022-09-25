import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AdminLeftPanel from './AdminLeftPanel';
import './../../Style.css';

export default function Admin(){
    return (
        <div className="container">
            
                <Navbar className="AdminHeaderPanel">
                 <Container>
                      <Navbar.Brand style={{color:"white"}} href="#home">Property Managment Portal (Admin Panel)</Navbar.Brand>
                      <Navbar.Toggle />
                         <Navbar.Collapse className="justify-content-end">
                        <NavDropdown title="Mark Otto" id="basic-nav-dropdown">
                     <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Edit Profile</NavDropdown.Item>
                     </NavDropdown>
                     </Navbar.Collapse>
                </Container>
                </Navbar>
            <hr />
            <AdminLeftPanel />
        </div>
    )
}