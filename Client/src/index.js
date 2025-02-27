import React from 'react';
import { createRoot } from "react-dom/client";
// import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app';


// Load Google Fonts (Roboto)
import './index.css'; 


/* const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />); */


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
