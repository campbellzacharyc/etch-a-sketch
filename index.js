// 2. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail 
//  through your grid like a pen would.

// 16x16 grid: 16 across (row), 16 down (column)

const container = document.querySelector(".container");
const boxes = document.getElementsByClassName("child");

function makeDivs(numDivs) {
    for (i = 0; i < numDivs; i++) {
        let cells = document.createElement('div');
        container.appendChild(cells);
        cells.classList.add("child");
    }
};

makeDivs(256);

// box.addEventListener("mouseover", () => {
//     box.classList.add("green")
//     console.log("green");
// });

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", () => {
        boxes[i].classList.add("green");
        console.log("green");
    });
}


// box.onmouseover = function makeGreen() {
//     // box.classList.add("green");
//     // console.log("green");
// };