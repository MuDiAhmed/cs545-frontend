import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React from "react";

export default function PropertyEditPage({ show, handleClose,id }) {
    return(
        <div>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Favorite List</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Body>
                        <form>
                            <div class="container text-center">
                                <div class="row">
                                    <div class="col-sm-8">

                                    </div>
                                    <div class="col-sm-4">

                                    </div>
                                </div>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}