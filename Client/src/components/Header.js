import React from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';
import LoginModal from './LoginModal';
import AboutContactModal from './AboutContactModal';

const Header = () => {
  return (
    <Navbar bg="success" variant="dark" expand="lg">
      <Navbar.Brand href="#home" className="mx-auto">PurrPals</Navbar.Brand>
      <Nav className="ml-auto">
        <LoginModal />
        <AboutContactModal />
      </Nav>
    </Navbar>
  );
};

export default Header;