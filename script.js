let container = document.getElementById("container");

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

createGrid(5, 5);
