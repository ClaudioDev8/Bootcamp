// Array of predefined colours
const colors = ['red', 'green', 'blue', 'yellow', 'magenta', 'orange', 'pink'];
let currentIndex = 0;

// Function to cycle through predefined colours
function cycleColor() {
    // Get the next colour from the array
    const newColor = colors[currentIndex];
    document.body.style.backgroundColor = newColor;
    document.getElementById('colorDisplay').textContent = `Background Colour: ${newColor}`;
    
    // Update index to the next colour, cycling back to the start if needed
    currentIndex = (currentIndex + 1) % colors.length;
}

// Function to generate a random colour
function randomColor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.body.style.backgroundColor = randomColor;
    document.getElementById('colorDisplay').textContent = `Background Colour: ${randomColor}`;
}

// Event listeners for buttons
document.getElementById('cycleColorButton').addEventListener('click', cycleColor);
document.getElementById('randomColorButton').addEventListener('click', randomColor);
