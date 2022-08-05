const defaultGridSize = 16;

const colorPicker = document.getElementById('colorPicker');
const eraser = document.getElementById('eraser');
const reset = document.getElementById('reset');
let gridSquare = document.querySelector(".gridSquare");
const rgb = document.getElementById('rgb');
const black = document.getElementById('black');
const changeNumberOfGrid = document.getElementById('sizeSlider');
const screenGrids = document.querySelector('.current');


reset.onclick = () => clearGrid();
eraser.onclick = () => erase();
colorPicker.onclick = () => customiseColor(); 
changeNumberOfGrid.addEventListener('input', () => changeSize());


// Set up grid size, and the drawing function
function setUpGrid(size) {
gridSquare.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
gridSquare.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for(let i=0;i<size*size;i++) {   // 256 = 16*16
 let square = document.createElement("div");
 gridSquare.appendChild(square);
 square.classList.add("cell"); // the border for each square
 square.addEventListener('mouseover', function(event) { // everytime when mouse over the grid, color will be changed
   event.target.style.backgroundColor = "black"; // the default color will be black
   })
 square.addEventListener('touchstart',function(e){
   e.target.style.backgroundColor = "black";
   e.preventDefault();
 })
}
}


// Change Grid Number using slider
function changeSize(value) {
let newSize = document.getElementById('sizeSlider').value; // get slider value
screenGrids.textContent = newSize; // The HTML content will show current slide value
gridSquare.innerHTML = ''; // clear drawing and the grid template
setUpGrid(newSize); //set up the grid size according to the slide value
}

// Reset Grid
function clearGrid() {
   gridSquare.innerHTML = ''; // clear drawing and the grid template
   setUpGrid(defaultGridSize); // then setup the grid again
   screenGrids.textContent = defaultGridSize; // the HTML content will back to 16 (default) 
   document.getElementById('sizeSlider').value = 16; // the range bar will back to 16 (default) 
}

// Erase 
function erase() {
  let currentGridSize = document.getElementById('sizeSlider').value; // Get the current grid size
  let cell = gridSquare.children; // want to access the color of the cell
  for(let i=0;i<currentGridSize*currentGridSize;i++) {
     cell[i].addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'white'; // change color to white, erase 
     })
     cell[i].addEventListener('touchstart',function(e){
      e.target.style.backgroundColor = "white";
      e.preventDefault();
    })
  }
}

//Generate Random color code 
function getRandomColor() {
   let randomCode = '0123456789ABCDEF'; // choices to form a color code
   let color = '#'; // the color code starts with #
   // i< 6 because the color code consist of 6 digits only
   for (let i=0;i<6;i++) {
   color += randomCode[Math.floor(Math.random()*16)]; // Generate random number from randomCode and add to the color variable
   }
   return color; // return the color code 
}

// RGB Color 
rgb.addEventListener('click', function() {
   let currentGridSize = document.getElementById('sizeSlider').value; // Get the current grid size
   let cell = gridSquare.children; // the color of the cell will be changed
   for(let i=0;i<currentGridSize*currentGridSize;i++) {
      cell[i].addEventListener('mouseover', function(event) {
         event.target.style.backgroundColor = getRandomColor();
      })
      cell[i].addEventListener('touchstart', function(event) {
         event.target.style.backgroundColor = getRandomColor();
      })
   }
})

// Black Color
black.addEventListener('click',function() {
   let currentGridSize = document.getElementById('sizeSlider').value;
   let cell = gridSquare.children;
   for(let i=0;i<currentGridSize*currentGridSize;i++) {
      cell[i].addEventListener('mouseover', function(event) {
         event.target.style.backgroundColor = 'black';
      })
      cell[i].addEventListener('touchstart', function(event) {
         event.target.style.backgroundColor = 'black';
   })
}
})

// Access customise color
function customiseColor() {
   colorPicker.addEventListener('input',function() { 
   let newColor = document.getElementById('colorPicker').value; // Get value from the colorPicker input each time 
   let currentGridSize = document.getElementById('sizeSlider').value;
   let cell = gridSquare.children;
   for(let i=0;i<currentGridSize*currentGridSize;i++) {
      cell[i].addEventListener('mouseover', function(event) {
         event.target.style.backgroundColor = newColor;
      })
      cell[i].addEventListener('touchstart', function(event) {
         event.target.style.backgroundColor = newColor;
      })
}
})
}

// Start
window.onload = () => {
   setUpGrid(defaultGridSize);
   screenGrids.textContent = defaultGridSize; // the HTML content will back to 16 (default) 
   document.getElementById('sizeSlider').value = 16; // the range bar will back to 16 (default) 
}


