import React, { useState, useEffect } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import axios from 'axios';

const SavedPets = () => {
  const [savedPets, setSavedPets] = useState([]);
  const userId = localStorage.getItem('userId'); // Assume stored after login

  useEffect(() => {
    fetchSavedPets();
  }, []);

  const fetchSavedPets = async () => {
    try {
      const token = localStorage.getItem('token'); // JWT token
      const response = await axios.get(`/api/saved-pets/${userId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setSavedPets(response.data);
    } catch (error) {
      console.error('Error fetching saved pets:', error);
    }
  };

  const savePet = async (petData) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('/api/saved-pets', petData, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchSavedPets(); // Refresh list
    } catch (error) {
      console.error('Error saving pet:', error);
    }
  };

  const removePet = async (petId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/api/saved-pets/${petId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      fetchSavedPets(); // Refresh list
    } catch (error) {
      console.error('Error removing pet:', error);
    }
  };

  return (
    <div className="text-center py-4 shadow-sm" style={{ backgroundColor: '#F5F7FA', borderBottom: '1px solid #E0E0E0' }}>
      <h2 className="text-primary mb-3" style={{ color: '#4A90E2', fontSize: '24px', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>
        Pictures of Pets the User Has Saved
      </h2>
      <Carousel>
        {savedPets.map(pet => (
          <Carousel.Item key={pet.id}>
            <img
              className="d-block w-100"
              src={pet.imageUrl}
              alt={pet.name}
              style={{ maxHeight: '400px', objectFit: 'contain', backgroundColor: '#d3d3d3', border: '2px solid #FFA500', borderRadius: '8px' }}
              onClick={() => window.open(pet.shelterId, '_blank')} // Link to shelter info
            />
            <Carousel.Caption>
              <h3 style={{ color: '#333333', fontFamily: 'Roboto, sans-serif' }}>{pet.name}</h3>
              <Button variant="danger" onClick={() => removePet(pet.id)} className="rounded-pill" style={{ backgroundColor: '#FFA500', borderColor: '#FFA500' }}>
                Remove
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <Button
        variant="success"
        onClick={() => savePet({ name: 'Sample Pet', breed: 'Dog', age: 2, imageUrl: 'https://example.com/pet.jpg', shelterId: 'shelter-link', userId })}
        className="mt-3 rounded-pill"
        style={{ backgroundColor: '#4A90E2', borderColor: '#4A90E2' }}
      >
        Save Sample Pet
      </Button>
    </div>
  );
};

export default SavedPets;