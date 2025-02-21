import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';

const SavedPets = () => {
  const [savedPets, setSavedPets] = useState([]);

  useEffect(() => {
    fetchSavedPets();
  }, []);

  const fetchSavedPets = async () => {
    try {
      const response = await axios.get(`/api/saved-pets/${userId}`, { // Replace with authenticated userId
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } // JWT authentication
      });
      setSavedPets(response.data);
    } catch (error) {
      console.error('Error fetching saved pets:', error);
    }
  };

  return (
    <div className="bg-primary text-center py-5" style={{ backgroundColor: '#0000ff' }}>
      <h2 className="text-white">Pictures of Pets the User Has Saved</h2>
      <Carousel>
        {savedPets.map(pet => (
          <Carousel.Item key={pet.id}>
            <img
              className="d-block w-100"
              src={pet.imageUrl}
              alt={pet.name}
              style={{ maxHeight: '400px', objectFit: 'contain', backgroundColor: '#d3d3d3' }}
              onClick={() => window.open(pet.shelterId, '_blank')} // Link to shelter info
            />
            <Carousel.Caption>
              <h3>{pet.name}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SavedPets;