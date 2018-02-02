module.exports.draw = function (context, width, height, time = 0) {
  context.save();
  context.fillStyle = 'black';
  context.fillRect(0, 0, width, height);
  const radius = Math.abs(Math.sin(time) * (width / 2));

  context.beginPath();
  context.arc(-229 + (width / 2), 121 + (height / 2), radius, 0, Math.PI * 2);
  context.strokeStyle = 'white';
  context.lineWidth = 1;
  context.stroke();
  context.restore();
};
