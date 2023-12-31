import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './index.css';
import Context from './Context/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Context> 
        <App />
    </Context>
</BrowserRouter>
);
