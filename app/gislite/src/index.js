// Importing react
import React from 'react';
import ReactDOM from 'react-dom';

// Adding CSS libraries
import '../node_modules/leaflet/dist/leaflet.css';
import '../node_modules/uikit/dist/css/uikit.css';
import '../node_modules/uikit/dist/js/uikit.js';

// React app writing
import MainBody from './react-components/MainBody.jsx'

// ========================================
ReactDOM.render(
    <MainBody />,
    document.getElementById('root')
);


