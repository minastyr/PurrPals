import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const AboutContactModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>
        About/Contact
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>About/Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Contact Information: example@email.com</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AboutContactModal;