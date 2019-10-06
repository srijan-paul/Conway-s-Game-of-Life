const cnv = document.getElementById("cnv").getContext("2d");
cnv.canvas.width = window.innerWidth;
cnv.canvas.height = window.innerHeight;
let width = cnv.canvas.width;
let height = cnv.canvas.height;

const rect = (x, y, w, h) => {
  cnv.fillRect(x, y, w, h);
  cnv.strokeRect(x, y, w, h);
  cnv.stroke();
};

const stroke = (r, g, b) => {
  cnv.strokeStyle = `rgba(${r},${g},${b},1)`;
};

const fill = (r, g, b) => {
  cnv.fillStyle = `rgba(${r},${g},${b},1)`;
};

const strokeWeight = weight => {
  cnv.lineWidth = weight;
};

const line = (x1, y1, x2, y2) => {
  cnv.beginPath();
  cnv.moveTo(x1, y1);
  cnv.lineTo(x2, y2);
  cnv.stroke();
};

const background = (r, g, b) => {
  temp = cnv.fillStyle;
  cnv.fillStyle = `rgba(${r},${g},${b},1)`;
  cnv.fillRect(0, 0, cnv.canvas.width, cnv.canvas.height);
  cnv.stroke();
  cnv.fillStyle = temp;
};
