import {NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function ({user, onSignOut}){
    return (
        <NavDropdown title={user.profile.preferred_username} id="nav-dropdown">
            <NavDropdown.Item eventKey="4.2"><Link to="/favoriteList" >Favorite List</Link></NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3" ><Link to="/favoriteList" >Requests</Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.1" onClick={onSignOut}>Sign out</NavDropdown.Item>
        </NavDropdown>
    )
}