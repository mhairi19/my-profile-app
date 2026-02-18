import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your custom global styles
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // THE BOOTSTRAP IMPORT

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);