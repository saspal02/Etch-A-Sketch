const container = document.querySelector(".grid-container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function() {
  let gridSize;
  do {
    gridSize = prompt("Input a grid size up to 100", 16);
  } while (gridSize <= 0 || gridSize > 100);
  deleteGrid();
  createGrid(gridSize);
    
});

function createGrid(gridSize) {
   
  for (let row = 0; row < gridSize; row++) {
        
    const newRow = document.createElement("div");
      newRow.classList.add("grid-row");

  
        for (let square = 0; square < gridSize; square++) {
            
          const newSquare = document.createElement("div");
          newSquare.classList.add("grid-square");
          newSquare.addEventListener("mouseover",function(event) {
            event.target.style.backgroundColor = randomRGB();
          });
           
          newRow.appendChild(newSquare);
        }

        
      container.appendChild(newRow);
    }

}

function deleteGrid() {
  container.innerHTML = "";

}

function randomRGB() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
  return RGBColor;
};

    





