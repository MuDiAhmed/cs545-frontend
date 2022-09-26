import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
export default function Footer() {
    return (
        <Navbar className="AdminFooterPanel">
        <Container>
             <Navbar.Brand style={{color:"white"}}>All rights Reserved - Follow us on: </Navbar.Brand>
             <Navbar.Toggle />
       </Container>
       </Navbar>
    );
}