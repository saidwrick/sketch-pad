function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateBoard(number = 100){
    const board = document.querySelector(".board");

    while (board.firstChild){
        board.firstChild.remove()
    }

    let dimension = 100/number;

    for (let i=0; i < number; i++){
        for (let j=0; j < number; j++){
            let square = document.createElement('div');
            square.classList.add("square")
            square.style.width = (`${dimension}%`);
            square.style.height = (`${dimension}%`);
            square.addEventListener("mouseover", function(){
                square.style.backgroundColor = "black";
            })
            board.appendChild(square);
        }
    }
}

generateBoard(50);

let resetButton = document.querySelector("button");
resetButton.addEventListener("click", function(){
    if (document.querySelector("input").value > 100){
        alert("Grid size must be under 100")
    }
    else {
    generateBoard(document.querySelector("input").value);
    }
});

