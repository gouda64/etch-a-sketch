let gridSize = 16;

let display = document.querySelector(".display");
let slider = document.querySelector(".slider");
slider.oninput = (event) => {
    gridSize = event.target.value;
    event.target.parentElement.firstChild.textContent = `${gridSize} x ${gridSize}`;
    setGrid(gridSize);
};

function setGrid(gridSize) {
    display.style.gridTemplate = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`;
    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }

    for (let i = 0; i < gridSize*gridSize; i++) {
        const div = document.createElement("div");
        div.classList.add("display-child");
        display.appendChild(div);
    }
}
setGrid(gridSize);