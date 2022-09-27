import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function RequestPopup({ show, handleClose }) {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);


    const [request, setRequest] = useState('default');

    const onRequestChanged = (e) =>{
        setRequest(e.target.value);
        console.log((e.target.value));
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
                        />
                    </form>
                </Modal.Body>
                <Modal.Body></Modal.Body>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Submit Request
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
