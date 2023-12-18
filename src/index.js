import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ContextFunction } from './context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextFunction>
        <App />
    </ContextFunction>
);