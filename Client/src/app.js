import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import PetOfDay from './components/PetOfDay';
import FindAPal from './components/FindAPal';
import BreedInfo from './components/BreedInfo';
import SavedPets from './components/SavedPets';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container-fluid">
          <PetOfDay />
          <FindAPal />
          <BreedInfo />
          <SavedPets />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;