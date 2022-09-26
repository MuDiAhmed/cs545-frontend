import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
 

import logo from "../../img/logo.svg"

function Header() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container fluid style={{border: "2px   "}}>
        
        <Nav.Item style={{border: "2px   "}}> <Image src={logo}/></Nav.Item>
        <Nav.Item style={{border: "2px   "}}></Nav.Item>
        <Nav.Item>Sign In</Nav.Item>

      </Container>

    </Navbar>
    </>
  );

}

export default Header;