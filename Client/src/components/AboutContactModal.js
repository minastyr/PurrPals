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

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton style={{ backgroundColor: '#F5F7FA' }}>
          <Modal.Title style={{ color: '#4A90E2', fontFamily: 'Roboto, sans-serif' }}>About/Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#FFFFFF', borderRadius: '0 0 8px 8px' }}>
          <p style={{ color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
            A website helping people find their furrever friends!
          </p>
          <p style={{ color: '#4A90E2', fontFamily: 'Roboto, sans-serif' }}>
            Contact Information: <a href="mailto:support@purrpals.com">support@purrpals.com</a>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AboutContactModal;