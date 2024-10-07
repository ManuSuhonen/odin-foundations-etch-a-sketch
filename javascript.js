console.log("hello world");

function myFunction() {
    let text;
    let person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
        text = "User cancelled the prompt.";
    } else {
        text = "Hello " + person + "! How are you today?";
    }

    console.log(text);
    //document.getElementById("demo").innerHTML = text;
}

function generateCell() {

    let cell = document.createElement("div");
    cell.setAttribute("class", "cell");
    let color = cell.style.backgroundColor;

    cell.addEventListener("mouseenter", (event) => {
        event.target.style.backgroundColor = 'rgba(177, 100, 100, 0.87)';
        console.log(event.target);
    });

    cell.addEventListener("mouseleave", (event) => {
        event.target.style.backgroundColor = color;
        console.log(event.target);
    });

    return cell;
}

function generateMultipleCells(rows) {
    let totalCount = rows;
    let cells = [];
    for (let i = 0; i < totalCount; i++) {
        cells.push(generateCell());
    }
    return cells;
}

function generateMultipleCellsV2(count) {
    return Array(count)
        .fill()
        .map(_ => {
            return generateCell();
        });
}

let cell = document.createElement("div");
cell.setAttribute("class", "cell");

let btn = document.querySelector("button");

let container = document.querySelector("#grid-container");

let container1 = document.querySelector('div[id="grid-container"]');


btn.addEventListener("click", (event) => {
    let rows = document.querySelector("input").valueAsNumber;
    let total = Math.pow(rows, 2)
    let grid =  generateMultipleCells(total);
    //myFunction();

    grid.forEach(x => {
        console.log(`calc(100% / 4)`);
        console.log(`calc(100% / ${rows})`);

        x.style.width = `calc(100% / ${rows})`;
        // x.style.width = `calc(100% / 4)`;
    })

    grid.forEach(x => {
        container.appendChild(x);
    });
    // container.appendChild(grid);
});