import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counters from './components/counters';
import 'bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counters />
  </React.StrictMode>
);


