import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import PetOfDay from './components/PetOfDay';
import FindAPal from './components/FindAPal';
import BreedInfo from './components/BreedInfo';
import SavedPets from './components/SavedPets';
import Footer from './components/Footer';

function App() {
  // return (
  //   <Router>
  //     <div className="App">
  //       <Header />
  //       <div className="container-fluid py-4" style={{ backgroundColor: '#F5F7FA' }}>
  //         <div className="row justify-content-center">
  //           <div className="col-12 col-md-10">
  //             <PetOfDay />
  //             <FindAPal />
  //             <BreedInfo />
  //             <SavedPets />
  //           </div>
  //         </div>
  //       </div>
  //       <Footer />
  //     </div>
  //   </Router>
  // );
  return (
    <div>
      <h1>Welcome to PurrPals App API!</h1>
    </div>
  );

}

export default App;