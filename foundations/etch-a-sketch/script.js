
const container = document.getElementById("container");

for (let row = 0; row < 16; row++) {
    const gridRow = document.createElement("div");
    container.appendChild(gridRow);
    for (let column = 0 ; column < 16; column++) {
        const gridColumn = document.createElement("div");
        gridRow.appendChild(gridColumn);
    }
}
