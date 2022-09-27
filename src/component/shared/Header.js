import {Button, Image} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../img/logo.svg"
import {useDispatch, useSelector} from "react-redux";
// import login from "../auth/Login";
import {logout, login, fetchUser} from "../../store/userSlicer";
import {useEffect} from "react";
import {UserManger} from "../auth/config";

function Header() {
    const {user} = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser())
    },[])
    UserManger.events.addUserLoaded((user) => {
        dispatch(fetchUser())
    });
    const onSignOut = () => {
        dispatch(logout());
    }
    const onSignIn = () => {
        dispatch(login());
    }
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid style={{border: "2px   "}}>
        
        <Nav.Item style={{border: "2px   "}}>Home</Nav.Item>
        <Nav.Item style={{border: "2px   "}}><Image src={logo}/></Nav.Item>
          {Object.keys(user).length === 0 ?
              <Nav.Item><Button onClick={onSignIn}>Sign in</Button></Nav.Item>
              : <Nav.Item><Button onClick={onSignOut}>Sign out</Button></Nav.Item>}

      </Container>
    </Navbar>
  );
}

export default Header;