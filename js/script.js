// Select elements
const box = document.getElementById('colorBox');
const button = document.getElementById('changeColorBtn');

// Array of colors to switch between
const colors = ['#0077ff', '#28a745', '#ff5733', '#6f42c1', '#ffcc00'];
let index = 0;

//event listener for button click
button.addEventListener('click', () => {
    index = (index + 1) % colors.length; // cycle colors
    box.style.background = colors[index];
    alert('Hurray you found it!')
});
