let rows;
let cols;
let grid;
let nextGen;
const cellWidth = 30;
stroke(255, 255, 255);
const init = () => {
  rows = Math.floor(height / cellWidth);
  cols = Math.floor(width / cellWidth);
  grid = new Array(cols);
  nextGen = new Array(cols);

  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(rows);
    for (let j = 0; j < grid[i].length; j++) {
      let alive = Math.random() * 101 < 50 ? true : false;
      grid[i][j] = new Cell(i, j, alive);
    }
  }

  for (let i = 0; i < nextGen.length; i++) {
    nextGen[i] = new Array(rows);
    for (let j = 0; j < nextGen[i].length; j++) {
      let alive = grid[i][j].alive ? true : false;
      nextGen[i][j] = new Cell(i, j, alive);
    }
  }
};

function showGrid() {
  for (let i = 0; i < rows; i++) {
    line(0, i * cellWidth, width, i * cellWidth);
  }
  for (let i = 0; i < cols; i++) {
    line(i * cellWidth, 0, i * cellWidth, height);
  }
}

function draw() {
  nextGen = new Array(cols);
  for (let i = 0; i < cols; i++) {
    nextGen[i] = new Array(rows);
    for (let j = 0; j < rows; j++) {
      let live = false;
      let cell = grid[i][j];
      let aliveNeighbours = cell.liveNeighbourCount();
      if (cell.alive) {
        if (aliveNeighbours < 2 || aliveNeighbours > 3) {
          live = false;
        } else if (aliveNeighbours == 2 || aliveNeighbours == 3) {
          live = true;
        }
      } else if (aliveNeighbours == 3) {
        live = true;
      }
      nextGen[i][j] = new Cell(i, j, live);
    }
  }

  for (let i = 0; i < cols - 1; i++) {
    for (let j = 0; j < rows - 1; j++) {
      if (!(grid[i][j].alive != nextGen[i][j].alive)) {
        grid[i][j].show();
      }
    }
  }

  grid = nextGen;

  line(0, height, width, height);
  line(width, 0, width, height);

  requestAnimationFrame(draw);
}

window.addEventListener("resize", () => {
  cnv.canvas.width = window.innerWidth;
  cnv.canvas.height = window.innerHeight;
  width = cnv.canvas.width;
  height = cnv.canvas.height;

  init();
});

function isMobileDevice() {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
}

init();
showGrid();
draw();
