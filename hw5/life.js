class Matrix {
  constructor(width, height, element = (x, y) => undefined) {
    this.width = width;
    this.height = height;
    this.content = [];

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.content[y * width + x] = element(x, y);
      }
    }

//     this.content = [
// 0, 1, 1, 0, 0, 1,
// 0, 0, 0, 0, 0, 0,
// 1, 0, 0, 0, 0, 1,
// 1, 0, 0, 0, 0, 1,
// 0, 0, 0, 0, 0, 1,
// 0, 0, 0, 1, 0, 1,
//     ]
  }

  get(x, y) {
      // I modified the get function to avoid index out of range
    return (-1<x && x<this.width && -1<y && y<this.height) ? this.content[y * this.width + x] : 0;
  }

  set(x, y, value) {
    this.content[y * this.width + x] = value;
  }

  // displays matrix as 2d board
  display() {
      for (var i=0; i<this.height; i++) {
          var row = ""
          for (var j=0; j<this.width; j++) {
              row += `${this.get(j, i)} `
          }
          console.log(row);
      }
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }

  next() {
    if (this.y == this.matrix.height) return {done: true};

    let value = {x: this.x,
                 y: this.y,
                 value: this.matrix.get(this.x, this.y)};
    this.x++;
    if (this.x == this.matrix.width) {
      this.x = 0;
      this.y++;
    }
    return {value, done: false};
  }
}

const empty = 0, populated = 1;
matrix = new Matrix(6, 6, (x,y) => Math.floor(Math.random()*2));

var counter = 0
while (true) {
    console.log(`matrix ${counter}`);
    matrix.display();

    iterator = new MatrixIterator(matrix);
    var mod = []    // stores an array of modifications during each cycle of life
    while (true) {
        next = iterator.next()

        if (next.done == true) break    // matrix has been through an entire iteration

        acc = 0 // number of population around this position
        for (var i=-1; i<2; i++) {
            for (var j=-1; j<2; j++) {
                if (matrix.get(next.value.x+i, next.value.y+j)==populated) acc++;   // accumulate all alive neighbors
            }
        }

        status = matrix.get(next.value.x, next.value.y) // get empty/populated status of this position
        acc -= status // remove current position from accumulator

        // this position is populated and but dies by solitude/overpopulation
        if (status==populated && acc<2 || acc>3) mod.push({x:next.value.x, y:next.value.y, val:empty});  // store this position and new status

        // this position is empty but has 3 neighbors, so it becomes populated
        else if (status==empty && acc==3) mod.push({x:next.value.x, y:next.value.y, val:populated})
    }

    if (mod.length) mod.forEach(m => matrix.set(m.x, m.y, m.val)); // update matrix data
    else break  // no modifications made during this cycle, matrix is stablized

    counter++
}
