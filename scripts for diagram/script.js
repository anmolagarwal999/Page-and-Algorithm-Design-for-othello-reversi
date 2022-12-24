const size = 9;
let grid = [];
let empty = [];
const gridElement = document.getElementsByClassName("grid")[0];
const gridElements = document.getElementsByClassName("grid-small");
const buttonElement = document.querySelector("button");
let inputs;
let possible;
let solved;

// DOM interaction

const initialize = () => {
  gridElement.style.gridTemplateRows = `repeat(${size + 1}, auto)`;
  gridElement.style.gridTemplateColumns = `repeat(${size + 1}, auto)`;

  gridElement.innerHTML += "<div />";

  for (let i = 0; i < size; i++)
    // gridElement.innerHTML += `<div class="label">${String.fromCharCode(
    //   "A".charCodeAt(0) + i
    // )}</div>`;
    gridElement.innerHTML += `<div class="label">${i + 1}&nbsp;</div>`;

  for (let i = 0; i < size; i++) {
    gridElement.innerHTML += `<div class="label">${i + 1}&nbsp;</div>`;

    for (let j = 0; j < size; j++) {
      // const row = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      // const col = 3 * (i % 3) + (j % 3);
      const row = i;
      const col = j;

      gridElement.innerHTML += `
            <div
                class="box empty"
                onClick="handleClick(this)"
                id=${row + "" + col}
            ><div class="circle" /></div>`;
    }
  }
};

const handleClick = (element) => {
  const cycle = ["black", "white", "empty"];

  for (let i = 0; i < 3; i++)
    if (element.classList.contains(cycle[i])) {
      element.classList.remove(cycle[i]);
      element.classList.add(cycle[(i + 1) % 3]);
      break;
    }
};

initialize();
