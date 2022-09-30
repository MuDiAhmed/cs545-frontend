import axios from "axios";
import { useState,useEffect } from "react";
import { Row, Col, Container, Form, Button, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";

 
import propertyDetails from "../../img";

export default function Home() {
  const [filterData, setFilterData] = useState({});

  useEffect(()=>{

    const fetchData= async ()=>{

    


    }



  },[filterData])
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
     
    setFilterData(data)
    
  };

  return (
    <Container>
      <Row>
        <Col md={{ offset: 4, span: 4 }} xs={{ offset: 4, span: 4 }}>
          Find it. Tour it. Own it.
        </Col>
      </Row>

      <Row>
        <Col md={10}>
          <Container>
          {

            filterData.length>0 ? <h1>results found</h1> :   <Row>
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


          }
          
          </Container>
        </Col>

        <Col md={2}>
          <div className="position-fixed">
            <form style={{ padding: 12 }} onSubmit={handleSubmit(onSubmit)} >
              <h3>Filter by</h3>
              
               
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row>
                  <Col md={3}>
                    <Form.Label>Price</Form.Label>
                  </Col>
                  <Col md={9}>
                    <Form.Control type="number" min="0" placeholder="Price"   {...register("price")}/>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row>
                  <Col md={3}>
                    <Form.Label>Date</Form.Label>
                  </Col>
                  <Col md={9}>
                    <Form.Control type="date"   {...register("date")} />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row>
                  <Col md={3}>
                    <Form.Label>Size</Form.Label>
                  </Col>
                  <Col md={9}>
                    <Form.Control type="number" min="0" placeholder="size"    {...register("size")}/>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Row>
                  <Col md={3}>
                    <Form.Label>Location</Form.Label>
                  </Col>
                  <Col md={9}>
                    <Form.Control type="text"      {...register("location")} />
                  </Col>
                </Row>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </form>

            <div className="position-fixed" style={{ margin: 5 }}>
              <div style={{ padding: 7 }}>
                <h3>About Us</h3>
                <p>
                  {" "}
                  Line 3:8: 'Row' is defined but never used no-unused-vars Line
                  5:8: 'AdminDashBoard' is defined but never used no-unused-vars
                  Line 6:8: 'AdminPassResButton' is defined but never used
                  no-unused-vars src/store/propertySlicer.js
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
