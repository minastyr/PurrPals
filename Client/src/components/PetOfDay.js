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
        headers: { 'x-api-key': process.env.REACT_APP_DOG_API_KEY } // Add API key to .env
      });
      setPetImage(response.data[0].url);
    } catch (error) {
      console.error('Error fetching pet of the day:', error);
    }
  };

  return (
    <div className="bg-danger text-center py-5" style={{ backgroundColor: '#ff6347' }}>
      <h2 className="text-white">Pet of the Day</h2>
      {petImage && <img src={petImage} alt="Pet of the Day" className="img-fluid" style={{ maxWidth: '300px' }} />}
    </div>
  );
};

export default PetOfDay;