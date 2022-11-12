const container = document.querySelector(".container");
const buttons = document.querySelector(".buttons");

const size = 16;

//create grid
const makeContainerGrid = (size) => {
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  return container;
};
makeContainerGrid(size);

//create dynamic grid div's
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    let square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);
  }
}

//removes old board
const resetBoard = () => {
  const tile = document.querySelectorAll(".square");
  tile.forEach((el) => {
    el.parentNode.removeChild(el);
  });
};
//board button created
const btnNewBoard = document.createElement("button");
btnNewBoard.className = "btn";
btnNewBoard.textContent = "New Board";
buttons.appendChild(btnNewBoard);

//recreating new board with user input
btnNewBoard.addEventListener("click", (e) => {
  if (e.target) {
    let number = prompt(
      "Please, enter number of squares per side from 2 to 100"
    );
    if (number >= 2 && number <= 100) {
      let sizeNumber = parseInt(number);
      resetBoard();
      makeContainerGrid(sizeNumber);

      for (let i = 0; i < sizeNumber; i++) {
        for (let j = 0; j < sizeNumber; j++) {
          let newBoard = document.createElement("div");
          newBoard.className = "square";
          container.appendChild(newBoard);
        }
      }
    }
    if (number < "2" || number === "" || number > "100") {
      return;
    }
  }
});

//painting on the board
container.addEventListener("mouseover", (e) => {
  if (e.target && e.target.className === "square") {
    e.target.style.backgroundColor = `rgb(0, 0, 0)`;
    console.log(e.target);
  }
});

//random color button created
const colorButton = document.createElement("button");
colorButton.className = "btnColorMix";
colorButton.textContent = "Mix Colors";
buttons.appendChild(colorButton);

//making random color and adding to the board
colorButton.addEventListener("click", () => {
  container.addEventListener("mouseover", (e) => {
    const random = () => Math.floor(Math.random() * 256);
    let color = `rgb(${random()},${random()},${random()})`;
    random();
    const tile = document.querySelectorAll(".square");
    if (e.target && e.target.className === "square") {
      tile.forEach((elem) => {
        elem += e.target.style.backgroundColor = color;
      });
    }
  });
});

//erase board button created
const clearBoard = document.createElement("button");
clearBoard.className = "eraser";
clearBoard.textContent = "Clear";
buttons.appendChild(clearBoard);

//erasing board
clearBoard.addEventListener("click", (e) => {
  const tile = document.querySelectorAll(".square");
  tile.forEach((el) => (el.style.backgroundColor = "rgb(246, 246, 246)"));
});

//eraser button created
const btnReset = document.createElement("button");
btnReset.className = "reset";
btnReset.textContent = "Eraser";
buttons.appendChild(btnReset);

//erase board 1 by 1
const resetColor = () => {
  container.addEventListener("mouseover", (e) => {
    if (e.target && e.target.className === "square") {
      e.target.style.backgroundColor = "rgb(246, 246, 246)";
    }
    return e.target;
  });
};
btnReset.addEventListener("click", resetColor);

//button created to switch color to black
const btnMainColor = document.createElement("button");
btnMainColor.className = "main-color";
btnMainColor.textContent = "Black";
buttons.appendChild(btnMainColor);

//after button is pressed color switches to black
btnMainColor.addEventListener("click", () => {
  container.addEventListener("mouseover", (e) => {
    if (e.target && e.target.className === "square") {
      e.target.style.backgroundColor = "rgb(0,0,0)";
    }
  });
});
