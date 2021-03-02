var stdin = process.openStdin();
process.stdout.write("type: ");
stdin.addListener( "data",
  function(input) {
    if (input.toString().trim() == "bye")
    process.exit();
    console.log(Number(input.toString().trim())**.5);
    process.stdout.write("type: ");
  }
);
