import React from "react";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

export default function OwnerSingleProperty (props) {

    console.log(props);
    const value = props.property;
const onClickEdit = () => {
    console.log("edit");
}
const onClickDelete = () => {
        console.log("Delete");
    }
    const onClickDetails = () => {
        console.log("Details");
    }
    return(
        <div >
            <Card border="primary" style={{ width: '95rem', padding:"9px", marginLeft:"110px"}}>

                <Card.Body>
                    {/*<Card.Title>Primary Card Title</Card.Title>*/}
                    <Card.Text>

                        <div className="d-flex justify-content-start">

                            <div className="container text-center">
                                <div className="row">
                                    <div className="col">
                                        <div style={{
                                            fontSize: "18px",
                                            textAlign: "left",
                                            fontWeight: "bold"
                                        }}>NumberOfBathrooms:{value.type}</div>
                                        <div style={{
                                            fontSize: "18px",
                                            textAlign: "left",
                                            fontWeight: "bold"
                                        }}>NumberOfBathrooms:{value.location}</div>
                                        <div style={{
                                            fontSize: "18px",
                                            textAlign: "left",
                                            fontWeight: "bold"
                                        }}>NumberOfBathrooms:{value.numberOfBathrooms}</div>
                                        <div style={{
                                            fontSize: "18px",
                                            textAlign: "left",
                                            fontWeight: "bold"
                                        }}>NumberOfBathrooms: {value.numberOfRooms}</div>
                                        <div style={{
                                            fontSize: "18px",
                                            textAlign: "left",
                                            fontWeight: "bold"
                                        }}>Views: {value.views}</div>

                                        <br/>
                                    </div>

                                    <div className="col">
                                        <div style={{
                                            fontSize: "18px",
                                            textAlign: "left",
                                            fontWeight: "bold"
                                        }}>Price {value.price}</div>
                                        <div style={{fontSize: "18px", textAlign: "left", fontWeight: "bold"}}>Size
                                            : {value.size}</div>
                                    </div>
                                    <div className="col">
                                        <img
                                            className="img1"
                                            src={value.picture}
                                            alt="Property1"
                                            width="450"
                                            height="250"
                                        />
                                    </div>
                                </div>

                            </div>
                            <div>
                            </div>
                            <br/>
                        </div>
                        <div>
                            <div style={{padding: "9px", textAlign:"left", marginLeft:"250px" }}>
                                <div>
                                    <Button style={{padding: "9px",  }} variant="primary" onClick={onClickEdit}>
                                        Edit Property</Button>

                                    <Button style={{padding: "9px"}} variant="primary" onClick={onClickDelete}>
                                        Delete Property</Button>

                                    <Button style={{padding: "9px"}} variant="primary" onClick={onClickDetails}>
                                        More Details</Button>

                                </div>


                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>





        </div>
    )
}


/*
<Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
* */