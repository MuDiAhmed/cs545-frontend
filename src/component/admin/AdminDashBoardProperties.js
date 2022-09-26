import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function AdminDashBoardProperties() {
  const data = [
    {
      image: "https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      price: 138.580,
      numberOfRoom: 3,
      yearOfBuild: 234,
      size: 2333
    },
  ];
  return (
    <Row xs={1} md={5} className="g-4">
      {Array.from({ length: 10 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src= "https://images.unsplash.com/photo-1628745277862-bc0b2d68c50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"/>
            <Card.Body>
              <Card.Title style={{fontSize:"20px", fontWeight:"bold"}}>{data[0].price}</Card.Title>
              <Card.Text style={{fontSize:"12px"}}>
                Number of Rooms: {data.numberOfRoom}  , Year of Build: , Size: sqft
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default AdminDashBoardProperties;