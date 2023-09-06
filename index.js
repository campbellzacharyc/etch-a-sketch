// 2. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail 
//  through your grid like a pen would.

// 16x16 grid: 16 across (row), 16 down (column)

const container = document.querySelector(".container");
const boxes = document.getElementsByClassName("child");
const changeButton = document.querySelector("button");
let numSquares = 16;

function numDivs(num) {
    return num * num;
};

function makeDivs(numDivs) {
    container.innerHTML = ''; // Clear the existing squares
    const percentage = 100 / numSquares; // Calculate the percentage based on the number of squares
    for (i = 0; i < numDivs; i++) {
        let cells = document.createElement('div');
        container.appendChild(cells);
        cells.classList.add("child");
        cells.style.width = `calc(${percentage}% - 2px)`; // Set the width using calculated percentage
        cells.style.height = `calc(${percentage}% - 2px)`; // Set the height using calculated percentage
    }
};

makeDivs(numDivs(numSquares));

changeButton.addEventListener("click", () => {
    let numUserSquares = prompt("How many squares per side? ");
    if (numUserSquares <= 100 && !isNaN(numUserSquares)) {
        let numSquares = numUserSquares;
        makeDivs(numDivs(numSquares));
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener("mouseover", () => {
                boxes[i].classList.add("green");
                console.log("green");
            })
        };
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