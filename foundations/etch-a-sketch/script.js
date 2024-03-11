function createGrid(gridSizeChoice) {
    container.innerHTML = '';
  
    let boxSize = 500 / gridSizeChoice;
  
    for (let row = 0; row < gridSizeChoice; row++) {
      const gridRow = document.createElement("div");
      gridRow.classList.add('gridRow');
      container.appendChild(gridRow);
  
      for (let column = 0; column < gridSizeChoice; column++) {
        const gridColumn = document.createElement("div");
        gridColumn.classList.add('gridColumn');
        gridColumn.style.width = `${boxSize}px`;
        gridColumn.style.height = `${boxSize}px`;
  
        gridColumn.addEventListener('mouseenter', (event) => {
          event.target.style.backgroundColor = 'black';
        });
        gridRow.appendChild(gridColumn);
      }
    }
  }
function promptForGridSize() {
    let userGridChoice = parseInt(prompt("What size grid would you like? (1-100)"), 10);
    while (isNaN(userGridChoice) || userGridChoice < 1 || userGridChoice > 100) {
        userGridChoice = parseInt(prompt("Invalid input. Please enter a number between 1 and 100."), 10);
    }
    createGrid(userGridChoice);
}

const gridSizeButton = document.getElementById("grid-size-button")
gridSizeButton.addEventListener('click', promptForGridSize);

createGrid(16);
