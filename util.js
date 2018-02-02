module.exports.draw = function (context, width, height, time = 0) {
  context.clearRect(0, 0, width, height);
  const x = Math.sin(time) * width / 4 + width / 2;
  context.fillRect(x, 25, 32, 20);
};
