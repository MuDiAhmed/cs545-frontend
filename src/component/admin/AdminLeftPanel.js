import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import AdminDashBoard from './AdminDashBoard';
import AdminPassResButton from './AdminPassReset';
import "./../../Style.css";

function AdminLeftPanel() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="dashboard">
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="properties">Properties</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Owners</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">Customers</Nav.Link>
            </Nav.Item>
          </Nav>
    </Tab.Container>
  );
}

export default AdminLeftPanel;