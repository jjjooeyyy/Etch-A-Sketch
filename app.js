const defaultGridSize = 16;

const colorPicker = document.getElementById('colorPicker');
const eraser = document.getElementById('eraser');
const reset = document.getElementById('reset');
let gridSquare = document.querySelector(".gridSquare");

reset.onclick = () => clearGrid();

// Set up grid size, and the drawing function
function gridSize(size) {
gridSquare.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
gridSquare.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for(let i=0;i<256;i++) {   // 256 = 16*16
 let square = document.createElement("div");
 square.style.backgroundColor = "white";
 gridSquare.insertAdjacentElement("beforeend",square);
 square.classList.add("cell"); // the border for each square
 square.addEventListener('mouseover', function(event) { // everytime when mouse over the grid, color will be changed
 event.target.style.backgroundColor = "black"; // the default color will be black
 })
}
}

gridSize(16);

// Reset Function 
function clearGrid() {
   gridSquare.innerHTML = ''; // clear color and grid
   gridSize(defaultGridSize); // set up the grid template again
}

