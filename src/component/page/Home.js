import { Row, Col, Container, Form, Button, Image } from "react-bootstrap";

import propertyDetails from "../../img";

export default function Home() {
  return (
    <Container   style={{margin: "   "}}>
      <Row>
        <Col md={{ offset: 4, span: 4 }} xs={{ offset: 4, span: 4 }}>
          Find it. Tour it. Own it.
        </Col>
      </Row>

      <Row  >
        <Col md={10}>
          <Container>
            <Row>
              {propertyDetails.map((property) => {
                return (
                  <Col md={4} style={{ border: "" }}>
                    <Image fluid src={property.image}></Image>
                    <p>{property.location}</p>
                    <p>{property.price}</p>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </Col>

        <Col md={2}>
        <div class="p-3 mb-2 bg-warning text-dark" >
          <Form className="position-fixed" style={{margin: 12}}  >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Row>
                <Col md={3}>
                  <Form.Label>Price</Form.Label>
                </Col>
                <Col md={9}>
                  <Form.Control type="number" placeholder="Price" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Row>
                <Col md={3}>
                  <Form.Label>Date</Form.Label>
                </Col>
                <Col md={9}>
                  <Form.Control type="date" placeholder="Price" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Row>
                <Col md={3}>
                  <Form.Label>Size</Form.Label>
                </Col>
                <Col md={9}>
                  <Form.Control type="number" placeholder="size" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Row>
                <Col md={3}>
                  <Form.Label>Location</Form.Label>
                </Col>
                <Col md={9}>
                  <Form.Control type="text" placeholder="" />
                </Col>
              </Row>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </div>
          <div>
         
          </div>
        </Col>
      </Row>
    </Container>
  );
}
