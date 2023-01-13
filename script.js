let container = document.getElementById("container");

let image = document.getElementById("image");

let images = [];
collectImages();

let chosenImage = document.getElementById("chosenImage");
let startGameChosenImageButton = document.getElementById("chosenImageButton");
let startGameRandomButton = document.getElementById("startGameRandom");

startGameRandomButton.addEventListener("click", () => {
  startGameRandomImage();
});

startGameChosenImageButton.addEventListener("click", () => {
  startGameChosenImage();
}); 

function startGameChosenImage() {
  startGame();
  let i = chosenImage.value;
  if (i > images.length - 1) { 
    i = images.length - 1
  } else if (i < 0) {
    i = 0
  };
  image.src = images[i].image;
};

function startGameRandomImage() {
  startGame();
  let randomImage = Math.floor(Math.random() * 3);
  image.src = images[randomImage].image;
};

function createGrid(xAxis, yAxis) {
  container.style.gridTemplateColumns = `repeat(${xAxis}, ${600/xAxis}px)`;
  container.style.gridTemplateRows = `repeat(${yAxis}, ${600/yAxis}px)`;
  container.style.borderLeft = "1px solid black";
  container.style.borderTop = "1px solid black";
  for (let i = 1; i <= (xAxis * yAxis); i++) {
    let newSquare = document.createElement("div");
    newSquare.textContent = i;
    newSquare.classList.add("square");
    newSquare.addEventListener("click", (event) =>
      event.target.style.background = "rgba(0, 0, 0, 0.0)"
    );
    newSquare.addEventListener("click", (event) =>
    event.target.textContent = ""
  );
    container.appendChild(newSquare);
  }
};

function startGame() {
  finishGame();
  createGrid(5, 5);
  image.style.display = "block";
};

function finishGame() {
  image.style.display = "none";
  container.style.borderLeft = "none";
  container.style.borderTop = "none";
  let squares = document.querySelectorAll(".square");
  squares.forEach(square => square.remove());
};

function collectImages() {
  for (let i = 1; i <= 3; i++) {
    let cat = {
      name: `cat_${i}`,
      image: `cats/cat${i}.jpg`
    };
    images.push(cat);
  };
};
