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
    console.log(numDivs);
    const percentage = 100 / (numDivs ** (1/2)); // Calculate the percentage based on the number of squares
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
    let numUserSquares = +prompt("How many squares per side? ");
    if (numUserSquares <= 100 && !isNaN(numUserSquares)) {
        let numSquares = numUserSquares;
        makeDivs(numDivs(numSquares));
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].addEventListener("mouseover", () => {
                // boxes[i].classList.add("green");
                boxes[i].style.backgroundColor = randomRgbColor();
                boxes[i].style.filter = brightness`(- 10%)`;
                console.log("green");
            })
        };
    } else {
        alert("100 or below please!");
    }
});

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", () => {
        // boxes[i].classList.add("green");
        // document.getElementsByClassName.style.color = randomRgbColor;
        boxes[i].style.backgroundColor = randomRgbColor();
        console.log("green");
    })
};

const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };

const reduceBrightness = () => {
    
}