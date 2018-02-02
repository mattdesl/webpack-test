const util = require('./util');

const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

const context = canvas.getContext('2d');
const width = 256;
const height = 256;
canvas.width = width;
canvas.height = height;

function render (time) {
  window.requestAnimationFrame(render);
  time /= 1000;
  util.draw(context, width, height, time);
}

window.requestAnimationFrame(render);
