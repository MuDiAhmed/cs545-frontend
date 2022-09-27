import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function RequestPopup({ show, handleClose, id }) {
  

    const [request, setRequest] = useState('default');

    const onRequestChanged = (e) =>{
        setRequest(e.target.value);
        console.log((e.target.value));
        //TODO save the request
    }
    const onSaveRequest = () => {
        //TODO axios post to list of request
        console.log("save change");
        console.log(id);
        setRequest('default');
        // console.log(id);
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
