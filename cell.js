class Cell {
  constructor(x, y, alive) {
    this.i = x;
    this.j = y;
    this.x = x * cellWidth;
    this.y = y * cellWidth;
    this.alive = alive;
  }

  show() {
    fill(255, 255, 255);
    stroke(0,0,0);
    rect(this.x, this.y, this.x + cellWidth, this.y + cellWidth);
  }

  highlight() {
    fill(200, 0, 255);
    rect(this.x, this.y, this.x + cellWidth, this.y + cellWidth);
  }

  liveNeighbourCount() {
    let i = this.i;
    let j = this.j;
    let count = 0;

    let top = grid[i][j - 1];
    if (top && top.alive) {
      count++;
    }
    let bottom = grid[i][j + 1];
    if (bottom && bottom.alive) {
      count++;
    }
    let right;
    let topLeft;
    let topRight;
    let bottomLeft;
    let bottomRight;
    let left;

    if (i < cols - 1) {
      right = grid[i + 1][j];
      if (right && right.alive) {
        count++;
      }
    }

    if (i > 0) {
      left = grid[i - 1][j];
      if (left && left.alive) {
        count++;
      }
    }

    if (i > 0 && j > 0) {
      topLeft = grid[i - 1][j - 1];
      if (topLeft.alive) {
        count++;
      }
    }

    if (i < cols - 1 && j > 0) {
      topRight = grid[i + 1][j - 1];
      if (topRight.alive) {
        count++;
      }
    }

    if (i < cols - 1 && j < rows - 1) {
      bottomRight = grid[i + 1][j + 1];
      if (bottomRight.alive) {
        count++;
      }
    }

    if (i > 0 && j < rows - 1) {
      bottomLeft = grid[i - 1][j + 1];
      if (bottomLeft.alive) {
        count++;
      }
    }

    return count;
  }
}
