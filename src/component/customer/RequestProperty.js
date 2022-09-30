import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

export default function RequestProperty({ show, handleClose, id }) {
  

    const [request, setRequest] = useState('default');

    const onRequestChanged = (e) =>{
        setRequest(e.target.value);
        console.log((e.target.value));
        //TODO save the request
    }
    const userId = 0;
    const onSaveRequest = () => {
        //TODO axios post to list of request
        console.log("save change");

        const requestBody ={
            userId:userId,
            propertyId : id
        }
        console.log(id);
        setRequest('default');
        // axsios post request.
        axios.post(("http://localhost:8080/user/request", requestBody))
        //TODO change the button to cancel request

    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Request form</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Body>
                    <form>
                        <input
                            type='text'
                            value={request}
                            onChange={onRequestChanged }
                            style={{ width: "300px" }}
                        />
                    </form>
                </Modal.Body>
                <Modal.Body></Modal.Body>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={ () => {onSaveRequest(); handleClose();}}>

                        Submit Request
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
