import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PetOfDay = () => {
  const [petImage, setPetImage] = useState('');

  useEffect(() => {
    fetchPetOfDay();
  }, []);

  const fetchPetOfDay = async () => {
    try {
      const response = await axios.get('https://api.thedogapi.com/v1/images/search', {
        headers: { 'x-api-key': process.env.REACT_APP_DOG_API_KEY }
      });
      setPetImage(response.data[0].url);
    } catch (error) {
      console.error('Error fetching pet of the day:', error);
    }
  };

  return (
    <div className="text-center py-4 shadow-sm" style={{ backgroundColor: '#F5F7FA', borderBottom: '1px solid #E0E0E0' }}>
      <h2 className="text-primary mb-3" style={{ color: '#4A90E2', fontSize: '24px', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>
        Pet of the Day
      </h2>
      {petImage && <img src={petImage} alt="Pet of the Day" className="img-fluid rounded" style={{ maxWidth: '300px', border: '2px solid #FFA500' }} />}
    </div>
  );
};

export default PetOfDay;