let rows;
let cols;
let grid;
const cellWidth = 40;
const init = () => {
  rows = Math.floor(height / cellWidth);
  cols = Math.floor(width / cellWidth);
  grid = new Array(cols);

  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(rows);
    for (let j = 0; j < grid[i].length; j++) {
      let alive = false;
      if (Math.random() * 101 < 50) {
        alive = true;
      }
      grid[i][j] = new Cell(i, j, alive);
    }
  }
};

init();
function draw() {
  background(0,0,0);


  let nextGen = new Array(cols);
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
      // console.log(i + ',' + j + ' : ' + aliveNeighbours);
      nextGen[i][j] = new Cell(i, j, live);
    }
  }

  for (let set of grid) {
    for (let cell of set) {
      cell.show();
      if (cell.alive) {
        cell.highlight();
      }
    }
  }

  grid = nextGen;

  line(0, height, width, height);
  line(width, 0, width, height);

  requestAnimationFrame(draw);
}

draw();

window.addEventListener("resize", () => {
  cnv.canvas.width = window.innerWidth;
  cnv.canvas.height = window.innerHeight;
  width = cnv.canvas.width;
  height = cnv.canvas.height;

  init();
});
