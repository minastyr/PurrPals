import React, { useState } from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import axios from 'axios';

const LoginModal = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    zipCode: '',
    password: '', // Added password field for authentication
  });
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleClose = () => {
    setShow(false);
    setError('');
    setSuccess('');
    setFormData({ firstName: '', lastName: '', userName: '', zipCode: '', password: '' });
  };

  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      let response;
      if (isLogin) {
        // Login endpoint
        response = await axios.post('http://localhost:5000/api/users/login', {
          userName: formData.userName,
          password: formData.password,
        });
        setSuccess('Logged in successfully!');
      } else {
        // Register endpoint
        response = await axios.post('http://localhost:5000/api/users/register', {
          firstName: formData.firstName,
          lastName: formData.lastName,
          userName: formData.userName,
          zipCode: formData.zipCode,
          password: formData.password,
        });
        setSuccess('Registered successfully! You can now log in.');
      }

      // Store authentication data in localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.userId);

      handleClose(); // Close modal after success
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
    setSuccess('');
  };

  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>
        Login/Register
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isLogin ? 'Login' : 'Register'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {success && <Alert variant="success">{success}</Alert>}
          <Form onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <Form.Group controlId="formBasicName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter name"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicLastName" className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                    required
                  />
                </Form.Group>
              </>
            )}
            <Form.Group controlId="formBasicUserName" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="Enter username"
                required
              />
            </Form.Group>
            {!isLogin && (
              <Form.Group controlId="formBasicZipCode" className="mb-3">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="Enter zip code"
                  required
                />
              </Form.Group>
            )}
            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {isLogin ? 'Login' : 'Register'}
            </Button>
            <Button variant="link" onClick={toggleForm} className="mt-2">
              {isLogin ? 'Need to register?' : 'Already have an account? Login'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default LoginModal;