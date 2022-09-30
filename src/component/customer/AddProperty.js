import { current } from "@reduxjs/toolkit";
import { useState } from "react";
import { Row, Col, Container, Form, Button, Image } from "react-bootstrap";

const Addproperty = () => {
  const [formData, setFormData] = useState({
    propertyType: "",
    numberOfBedrooms: "",
    dateOfConstraction: "",
    size: "",
    photo: [],
  });

  const [address, setAddressData] = useState({
    state: "",
    city: "",
    street: "",
    zipCode: "",
  });

  const handleTextChange = (e) => {
    e.preventDefault();
    const currentValue = { [e.target.name]: e.target.value };

    if (e.target.name.includes("location")) {
      setFormData({ address: { ...formData.address, ...currentValue } });
    } else {
      setFormData({ ...formData, ...currentValue });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ formData });
    console.log("submit button clicked");

    const payload = {
      ...formData,
      location: address,
    };
  };

  return (
    <div>
      <container>
        <h2>Register new Property</h2>
        <Form style={{ padding: 12 }}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col md={3}>
                <Form.Label>Property Type</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  placeholder="property type"
                  name="propertyType"
                  onChange={handleTextChange}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col md={3}>
                <Form.Label>Number of Bedrooms</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="number"
                  min="0"
                  placeholder="3"
                  name="numberOfBedrooms"
                  onChange={handleTextChange}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col md={3}>
                <Form.Label>Date of Construction</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="date"
                  placeholder="date"
                  name="dateOfConstraction"
                  onChange={handleTextChange}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col md={3}>
                <Form.Label>Size</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="number"
                  min="0"
                  placeholder="size"
                  name="size"
                  onChange={handleTextChange}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <h3>Location</h3>
            <Row>
              <Col md={3}>
                <Form.Label>State</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  placeholder="state"
                  name="location.state"
                  onChange={handleTextChange}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col md={3}>
                <Form.Label>City</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  placeholder="NewYork"
                  name="location.city"
                  onChange={handleTextChange}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col md={3}>
                <Form.Label>Street</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  placeholder="e.g 1000 N 4th st"
                  name="location.street"
                  onChange={handleTextChange}
                />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col md={3}>
                <Form.Label>Zip Code</Form.Label>
              </Col>
              <Col md={9}>
                <Form.Control
                  type="text"
                  placeholder="e.g 52557"
                  name="location.zipcode"
                  onChange={handleTextChange}
                />
              </Col>
            </Row>
          </Form.Group>
          <h3>Upload photo</h3>
          <div class="form-group">
            <label for="exampleFormControlFile1"> </label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form>
      </container>
    </div>
  );
};

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Row>
    <Col md={3}>
      <Form.Label>Address</Form.Label>
    </Col>
    <Col md={9}>
      <Form.Control type="text" placeholder="" />
    </Col>
  </Row>
</Form.Group>;

export default Addproperty;