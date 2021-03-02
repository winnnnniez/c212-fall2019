var eval = require('./eval.js');

var stdin = process.openStdin();

process.stdout.write("htdp3e> ");

stdin.addListener("data", function(input) {
    if (input.toString().trim() == "bye")
      process.exit();
    else {
      input = input.toString().replace('\n', '');
      console.log(eval(input));
      process.stdout.write("htdp3e> ");
    }
  }
); // end of call to addListener
