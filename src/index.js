import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ContextComponent } from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextComponent>
    <App />
  </ContextComponent>
);