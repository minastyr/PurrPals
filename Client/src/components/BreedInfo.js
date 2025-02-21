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
        headers: { 'x-api-key': process.env.REACT_APP_DOG_API_KEY } // Add API key to .env
      });
      setBreeds(response.data);
    } catch (error) {
      console.error('Error fetching breeds:', error);
    }
  };

  return (
    <div className="bg-secondary text-center py-3" style={{ backgroundColor: '#d3d3d3' }}>
      <Button variant="secondary" size="lg" onClick={handleShow}>
        Breed Info
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Dog Breed Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {breeds.map(breed => (
              <ListGroup.Item key={breed.id}>
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