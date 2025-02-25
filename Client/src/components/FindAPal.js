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
        headers: { 'Authorization': `Bearer ${process.env.REACT_APP_PETFINDER_API_KEY}` }
      });
      setPets(response.data.animals);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  return (
    <div className="text-center py-4 shadow-sm" style={{ backgroundColor: '#F5F7FA', borderBottom: '1px solid #E0E0E0' }}>
      <Button variant="primary" size="lg" onClick={handleShow} className="rounded-pill" style={{ backgroundColor: '#4A90E2', borderColor: '#4A90E2' }}>
        Find a Pal!
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton style={{ backgroundColor: '#F5F7FA' }}>
          <Modal.Title style={{ color: '#4A90E2', fontFamily: 'Roboto, sans-serif' }}>Find Pets Near You</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#FFFFFF', borderRadius: '0 0 8px 8px' }}>
          <Form onSubmit={handleSearch}>
            <Form.Group controlId="formZipCode" className="mb-3">
              <Form.Label style={{ color: '#757575', fontFamily: 'Roboto, sans-serif' }}>Enter Zip Code</Form.Label>
              <Form.Control
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="Enter zip code"
                style={{ borderColor: '#E0E0E0' }}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="rounded-pill" style={{ backgroundColor: '#4A90E2', borderColor: '#4A90E2' }}>
              Search
            </Button>
          </Form>
          <ListGroup className="mt-3">
            {pets.map(pet => (
              <ListGroup.Item key={pet.id} style={{ backgroundColor: '#FFFFFF', color: '#757575', borderColor: '#E0E0E0' }}>
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