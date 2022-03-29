// Importing react
import React from 'react';
import ReactDOM from 'react-dom';

// Adding CSS libraries
import '../node_modules/leaflet/dist/leaflet.css';
import '../node_modules/uikit/dist/css/uikit.css';
import '../node_modules/leaflet-switch-basemap/src/L.switchBasemap.css'

// Adding JS libraries
import '../node_modules/leaflet/dist/leaflet.js';
import '../node_modules/uikit/dist/js/uikit.js';

// React app writing
import GisLite from './react-components/GisLite.jsx'

// ========== Config JSON ===========
var config = {
    // General config on map
    map: {
        init_coords: [14.5965788, 120.9445403],
        init_zoom_lvl: 4,
        bbox: [[-90, -180], [90, 180]],
        min_zoom: 2,
        max_zoom: 20,
    },
    // Addition of background layers
    background_layers: [
        {
            name: 'OSM Base',
            src: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            icon: '/assets/img1.PNG', 
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', 
        },
        {
            name: 'OSM Grey',
            src: 'https://maps.geoapify.com/v1/tile/positron/{z}/{x}/{y}.png?apiKey=2b192eb2767d4af0926ad644aa3dce46',
            icon: '/assets/img0.PNG',
            attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors',
        },
    ],
    // Addition of layers
    layers : []
}

var GisLiteComponent = ReactDOM.render(<GisLite config={config}/>, document.getElementById('root'));
window.GisLiteAPI = GisLiteComponent.API