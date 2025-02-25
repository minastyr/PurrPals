import React, { useState } from 'react';
import { Button, Modal, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const BreedInfo = () => {
  const [show, setShow] = useState(false);
  const [breeds, setBreeds] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    fetchBreeds();
  };

  const fetchBreeds = async () => {
    try {
      const response = await axios.get('https://api.thedogapi.com/v1/breeds', {
        headers: { 'x-api-key': process.env.REACT_APP_DOG_API_KEY }
      });
      setBreeds(response.data);
    } catch (error) {
      console.error('Error fetching breeds:', error);
    }
  };

  return (
    <div className="text-center py-4 shadow-sm" style={{ backgroundColor: '#F5F7FA', borderBottom: '1px solid #E0E0E0' }}>
      <Button variant="secondary" size="lg" onClick={handleShow} className="rounded-pill" style={{ backgroundColor: '#757575', borderColor: '#757575', color: '#FFFFFF' }}>
        Breed Info
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton style={{ backgroundColor: '#F5F7FA' }}>
          <Modal.Title style={{ color: '#4A90E2', fontFamily: 'Roboto, sans-serif' }}>Dog Breed Information</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#FFFFFF', borderRadius: '0 0 8px 8px' }}>
          <ListGroup>
            {breeds.map(breed => (
              <ListGroup.Item key={breed.id} style={{ backgroundColor: '#FFFFFF', color: '#757575', borderColor: '#E0E0E0' }}>
                {breed.name} - {breed.temperament || 'No temperament info'}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default BreedInfo;