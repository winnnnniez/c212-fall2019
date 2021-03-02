// 1.
function fac(n) {
  if (n == 0)
    return "";
  else
    return Math.floor(n % 10) + fac(Math.floor(n / 10));
}
console.log( fac(90210) );
// 01209 (string)

// 2.
function extract(word) {
  var index = Math.random() * word.length;
  return word.charAt(index);
}
// define a function extract() which extracts a random letter from the input word

for (var c in "whatever")
  console.log(extract("something"));
// prints 8 random letters extracted from word "something", where 8 is the length of "whatever"

// rewrite: no local variables
function extract(word) {
  return word.charAt(Math.random() * word.length); }

// 3.
// the code prints an X in size 15
// *                           *
//   *                       *
//     *                   *
//       *               *
//         *           *
//           *       *
//             *   *
//               *
//             *   *
//           *       *
//         *           *
//       *               *
//     *                   *
//   *                       *
// *                           *

// modified to print a plus sign (+):
var size = 15;
       for (var i = 0; i < size; i++) {
         var line = "";
         for (var j = 0; j < size; j++)
           if (i == Math.floor(size/2) || j == Math.floor(size/2))
             line += " *";
           else
             line += "  ";
         console.log( line );}

// 4.
var a = [1, 2, 3];
       var b = [6, 7];
       var result = a.map ( function(e) {
         return b.map( function(f) {
           return [e, f];} ) } )
console.log( result );
// [
//   [ [ 1, 6 ], [ 1, 7 ] ],
//   [ [ 2, 6 ], [ 2, 7 ] ],
//   [ [ 3, 6 ], [ 3, 7 ] ]
// ]

// 5.
console.log( result.concat.apply([], result ) );
// [ [ 1, 6 ], [ 1, 7 ], [ 2, 6 ], [ 2, 7 ], [ 3, 6 ], [ 3, 7 ] ]

// 6. function product()
function product(ls1, ls2) {
  result = ls1.map ( function(e) {
    return ls2.map( function(f) {
      return [e, f];} ) })
  return result.concat.apply([], result); }

console.log( product( [1, 2, 3], ['a', 'e'] ) );

// 7.
class Person {
  // use dictionary to pass arguments to objects
  constructor(args) {
      this.name = args.name;
      this.age = args.age;
  }

  talk() {
      return `My name is ${this.name}, I'm ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(args) {
      // pass dictionary to parent class
      super(args);
      // use gpa key from args to assign this.gpa
      this.gpa = args.gpa;
  }

  talk() {
      return super.talk() + `, and my gpa is ${this.gpa}`;
  }
}

class Teacher extends Person {
  constructor(args) {
      super(args);
      this.salary = args.salary;
  }

  talk() {
      return super.talk() + `, and my salary is $${this.salary}`;
  }
}

var a = new Person({name:"really happy", age:21});
console.log( a.talk() );
var b = new Student({name:"winnie", age:21, gpa:3.99});
console.log( b.talk() );
var c = new Teacher({name:"hyspoc", age:23, salary:100000});
console.log( c.talk() );

// 8.
var input = "(define (f n) (if (zero? n) 1 (* (f (sub1 n)) n)))";
var result = input.match(/^(.*)\((.*)\)(.*)$/);
console.log( result );
// [
//   '(define (f n) (if (zero? n) 1 (* (f (sub1 n)) n)))',   => matched string
//   '(define (f n) (if (zero? n) 1 (* (f ',   => first capturing group (.*)
//   'sub1 n)) n))',   => second capturing group (.*)
//   '',   => last capturing group (.*)
//   index: 0,   => index of matched string
//   input: '(define (f n) (if (zero? n) 1 (* (f (sub1 n)) n)))',
//   groups: undefined
// ]

// 9.
var result = input.match(/^(.*)\((.*?)\)(.*)$/);
console.log( result );
// [
//   '(define (f n) (if (zero? n) 1 (* (f (sub1 n)) n)))',   => matched string
//   '(define (f n) (if (zero? n) 1 (* (f ',   => first capturing group (.*)
//   'sub1 n',   => second capturing group (.*?)
//   ') n)))',   => last capturing group (.*)
//   index: 0,
//   input: '(define (f n) (if (zero? n) 1 (* (f (sub1 n)) n)))',
//   groups: undefined
// ]
