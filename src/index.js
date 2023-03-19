import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Original position for the top and bottom fields for each of the photos
const original_values = [[50, 0], [50, 100], [50, 200], [50, 300],
    [150, 0], [150, 100], [150, 200], [150, 300],
    [250, 0], [250, 100], [250, 200], [250, 300],
    [350, 0], [350, 100], [350, 200], [350, 300],
    [450, 0], [450, 100], [450, 200], [450, 300],
    [550, 0], [550, 100], [550, 200], [550, 300]
]

// Random factors for how each image fragment will move, direction (positive or negative) and distance
const difference_factors = [0, 1.5, -3.5, 2.2, 1, -2, -3, 2.5, 3, -2, 3.2, 1, -2.6, -1.5, 4.2, 3.5, -2, -4.5, 3, 5, -3, -2, 3.5, -3]

const detectMouseMove = (event) => {
    // Center of the screen
    let center_x = window.innerWidth / 2
    let center_y = window.innerHeight / 2
    // Where the mouse is
    let mouse_x = event.screenX
    let mouse_y = event.screenY
    // Distance factor from mouse to center of screen
    const diff = Math.floor((Math.abs((center_x - mouse_x)) + Math.abs((center_y - mouse_y))) / 30)
    let component_style
    for ( let i = 0; i < 24; i++) {
        component_style = document.getElementById(`piece-${i+1}`).style
        // Change the original value for top and left by a factor of diff and the arbitrary difference factor
        component_style.top = original_values[i][0] - difference_factors[i] * Math.floor(diff) + "px"
        component_style.left = original_values[i][1] - difference_factors[i] * Math.floor(diff) + "px"

    }
}

window.addEventListener("mousemove", detectMouseMove)
