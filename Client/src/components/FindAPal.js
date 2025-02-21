import React, { useState } from 'react';
import { Button, Modal, Form, ListGroup } from 'react-bootstrap';
import axios from 'axios';

const FindAPal = () => {
  const [show, setShow] = useState(false);
  const [zipCode, setZipCode] = useState('');
  const [pets, setPets] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.petfinder.com/v2/animals?location=${zipCode}`, {
        headers: { 'Authorization': `Bearer ${process.env.REACT_APP_PETFINDER_API_KEY}` } // Add API key to .env
      });
      setPets(response.data.animals);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  return (
    <div className="bg-info text-center py-3" style={{ backgroundColor: '#add8e6' }}>
      <Button variant="primary" size="lg" onClick={handleShow}>
        Find a Pal!
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Find Pets Near You</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSearch}>
            <Form.Group controlId="formZipCode">
              <Form.Label>Enter Zip Code</Form.Label>
              <Form.Control
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Enter zip code"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
          <ListGroup className="mt-3">
            {pets.map(pet => (
              <ListGroup.Item key={pet.id}>
                {pet.name} - {pet.breeds.primary} (Age: {pet.age})
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FindAPal;