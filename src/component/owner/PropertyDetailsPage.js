import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllOwnersProperty} from "../../store/ownerPropertySlicer";

export default function PropertyDetailsPage({ show, handleClose,id }) {

    const value = useSelector((state) => state.ownersProperty);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllOwnersProperty());
    },[]);
    const ownerProperties =value.properties
    console.log('my',ownerProperties);

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

                                        hgujg

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