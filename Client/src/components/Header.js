import React from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import LoginModal from './LoginModal';
import AboutContactModal from './AboutContactModal';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="py-2 shadow-sm" style={{ backgroundColor: '#4A90E2' }}>
      <Navbar.Brand href="#home" className="mx-auto text-white" style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'Roboto, sans-serif' }}>
        PurrPals
      </Navbar.Brand>
      <Nav className="ml-auto">
        <LoginModal />
        <AboutContactModal />
      </Nav>
    </Navbar>
  );
};

export default Header;