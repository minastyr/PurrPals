import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../src/app';

// Load Google Fonts (Roboto)
import './index.css'; 

console.log("Hello from index.js");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);