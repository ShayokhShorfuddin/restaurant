// JavaScript
import { FastAverageColor } from 'fast-average-color';

const fac = new FastAverageColor();

// Select all divs with the class "glow-on-hover"
const imageContainers = document.querySelectorAll('.glow-on-hover');

console.log(imageContainers);

// Process each image container
for (const container of imageContainers) {
    const img = container.querySelector('img');

    // Get average color when image loads
    fac.getColorAsync(img)
        .then(color => {
            // Add hover event listener
            container.addEventListener('mouseenter', () => {
                container.style.boxShadow = `0 5px 20px ${color.rgba}`;
            });

            container.addEventListener('mouseleave', () => {
                container.style.boxShadow = 'none';
            });
        })
        .catch(error => {
            console.error('Error getting average color:', error);
        });
};