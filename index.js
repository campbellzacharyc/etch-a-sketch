// 1. Create a 16x16 grid of square divs inside .container div 
// Use flex box 
// 2. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail 
//  through your grid like a pen would.

// 16x16 grid: 16 across (row), 16 down (column)

const container = document.querySelector(".container");

function makeDivs(numDivs) {
    for (i = 0; i < numDivs; i++) {
        let cells = document.createElement('div');
        container.appendChild(cells);
    }
}

makeDivs(256);