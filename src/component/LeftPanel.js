import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import AdminDashBoard from './AdminDashBoard';
import Cards from './Cards';

// import Sonnet from '../../components/Sonnet';

function LeftPannel() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Properties</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Owners</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth">Customers</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="dashboard">
            <AdminDashBoard />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div>Properties</div>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
            <Cards />
            <Cards />
            <Cards />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">

            </Tab.Pane>
            <Tab.Pane eventKey="fifth">

            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default LeftPannel;