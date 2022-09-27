import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
function AdminLeftPanel() {
  return (
    <Tab.Container id="left-tabs-example">
      <hr />
      <Row>
          <Nav variant="tabs" justify="true" className="flex-column" style={{fontSize:"20px"}}>
            <Nav.Item>
              <Nav.Link eventKey="dashboard" href="dashboard" >Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="properties" href="properties">Manage Properties</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="customer" href="customers">Manage Customers</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="owners" href="owners">Manage Owners</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="profile" href="profile">Edit Profile</Nav.Link>
            </Nav.Item>
          </Nav>
      </Row>
    </Tab.Container>
  );
}

export default AdminLeftPanel;