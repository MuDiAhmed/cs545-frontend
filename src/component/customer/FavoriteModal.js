import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {useSelector} from "react-redux";

export default function FavoriteModal({ show, handleClose }) {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  const favoritList = useSelector((state) => state.property);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              list
            </li>
          </ul>
        </Modal.Body>
        <Modal.Body><form>
          <input
              type='text'

          />
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
