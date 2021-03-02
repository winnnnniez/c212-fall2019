function drawTree(x, y, size) {
  var canvas = document.getElementById('canvas');

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    size*=10;

    for (var i=0; i<3; i++) {
      drawTriangle(ctx, x, y, size);
      y += .9*size;
      size *= 1.3;
    }

    ctx.fillStyle = 'brown';
    ctx.fillRect(x-size/4, y+(size/1.3*.1), size/2, size);
  }
}

function drawTriangle(ctx, x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x-size*2, y+size);
  ctx.lineTo(x+size*2, y+size);
  ctx.fillStyle = 'green';
  ctx.fill();
}
