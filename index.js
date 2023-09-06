// 2. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail 
//  through your grid like a pen would.

// 16x16 grid: 16 across (row), 16 down (column)

const container = document.querySelector(".container");
const boxes = document.getElementsByClassName("child");
const changeButton = document.querySelector("button");
let numDivs = 256;

function makeDivs(numDivs) {
    for (i = 0; i < numDivs; i++) {
        let cells = document.createElement('div');
        container.appendChild(cells);
        cells.classList.add("child");
    }
};

makeDivs(numDivs);

changeButton.addEventListener("click", () => {
    let numSquares = prompt("How many squares per side? ");
    if (numSquares <= 100) {
        let numDivs = numSquares;
        return numDivs;
    } else {
        alert("100 or below please!");
    }
});

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", () => {
        boxes[i].classList.add("green");
        console.log("green");
    })
};