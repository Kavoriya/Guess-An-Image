let container = document.getElementById("container");
let image = document.getElementById("image");
let images = [];
collectImages();
startGame();

function startGame() {
  createGrid(5, 5);
  let randomImage = Math.floor(Math.random() * 3);
  image.src = images[randomImage].image;
}

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

function collectImages() {
  for (let i = 1; i <= 3; i++) {
    let cat = {};
    cat.name = `cat_${i}`;
    cat.image = `cats/cat${i}.jpg`;
    images.push(cat);
  };
};
