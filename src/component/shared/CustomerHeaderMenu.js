import {NavDropdown} from "react-bootstrap";

export default function ({user, onSignOut}){
    return (
        <NavDropdown title={user.profile.preferred_username} id="nav-dropdown">
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.1" onClick={onSignOut}>Sign out</NavDropdown.Item>
        </NavDropdown>
    )
}