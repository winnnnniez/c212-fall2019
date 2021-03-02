var life = require('./life.js');

var stdin = process.openStdin();
process.stdout.write("size: ");
stdin.addListener( "data",
  function(input) {
    if (input.toString().trim() == "bye")
    process.exit();
    n = input.toString().trim();
    /\d+/.test(n) ? life(Number(n)) : console.log('invalid input');
    process.stdout.write("size: ");
  }
);
