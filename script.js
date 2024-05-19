const container = document.querySelector(".grid-container");
const btn = document.querySelector(".btn");

btn.onclick = () => {
  let gridSize;
  do {
    gridSize = prompt("Input a grid size up to 100", 16);
  } while (gridSize <= 0 || gridSize > 100);
  deleteGrid();
  createGrid(gridSize);
}

function createGrid(gridSize) {
  for (let rows = 0; rows < gridSize; rows++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");
    

    for (let squares = 0; squares < gridSize; squares++) {
      const square = document.createElement("div");
      square.classList.add("grid-square");
      square.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = randomRGB();
      })
      row.appendChild(square);

    }
    container.appendChild(row);
  }

};

const deleteGrid = () => {
  container.replaceChildren();
};

function randomRGB() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var RGBColor = "rgb(" + x + "," + y + "," + z + ")";  
  return RGBColor;
};

createGrid(16);


