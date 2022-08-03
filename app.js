function drawingBoard(size) {
let gridSquare = document.querySelector(".gridSquare");
gridSquare.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
gridSquare.style.gridTemplateRows = `repeat(${size}, 1fr)`;

for(let i=0;i<256;i++) {   // 256 = 16*16
 let square = document.createElement("div");
 square.style.backgroundColor = "white";
 gridSquare.insertAdjacentElement("beforeend",square);
 square.classList.add("cell"); // the border for each square
 square.addEventListener('mouseover', function(event) { // everytime when mouse over the grid, color will be changed
    event.target.style.backgroundColor = "black";
 })
}
}

drawingBoard(16);

