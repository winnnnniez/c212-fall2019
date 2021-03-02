// 1.
// calls a function which
// creates variable a and b, and assign each with a random integer between 0 to 99
// compare a and b, assign a string of comparison result to variable result
// print out the result
( function() {
    var a = Math.floor(Math.random() * 100),
        b = Math.floor(Math.random() * 100);
    if (a < b) {
      var result = "Yes, " + a + " < " + b;
    } else {
      var result = "No, " + a + " >= " + b;
    }
    console.log(result);
  }
)();
// rewrite the code above with variable hoisting
( function() {
    a = Math.floor(Math.random() * 100);
    b = Math.floor(Math.random() * 100);
    if (a < b) {
      result = "Yes, " + a + " < " + b;
    } else {
      result = "No, " + a + " >= " + b;
    }
    var a, b, result;
    console.log(result);
  }
)();


// 2.
// var global = { b : 2 };

global.b = 5; // this code works, it creates a global variable b of value 5

function a() {
  var b = 3;
  console.log(b + " " + global.b);  // prints the string "3 5", since local variable b has value 3 and global variable b has value 5
}

console.log(global.b); // prints the string "5", since global variable b has value 5

a();    // calls function a(), which prints the string "3 5"

console.log(global.b);  // prints the string "5", since the value of global variable b never changed


// 3.
// assigns variable something with string "whatever"
// calls function a
// inside function a, var something was recreated as a local variable
// because of variable hoisting, the first console.log(something) will print undefined as var something is initialized but not assigned a value
// the second console.log(something) will print "nothing" because var something has been assigned the value "nothing"
var something = "whatever";

( function a() {
    console.log(something);
    var something = "nothing";
    console.log(something);
  }
)();


// 4.
// creates var firstname and assign the value 'Simon'
// creates var surname and var fullname
// if firstname equals 'Simon', assign 'Holmes' to surname
// otherwise, if firstname equals 'Sally', assign 'Panayiotou' to surname
// in this case, the first statement (firstname === 'Simon') is true, surname is assigned with value 'Holmes'
// assign the value of firstname + ' ' + surname (i.e. 'Simon Holmes') to var fullname
// print value of var fullname
var firstname = 'Simon', surname, fullname;
if (firstname === 'Simon')
  surname = 'Holmes';
else if (firstname === 'Sally') // what happens if you remove
  // initial = 'J';             // this line (currently commented)
  surname = 'Panayiotou';
fullname = firstname + ' ' + surname;
console.log(fullname);
// after the comment is removed, the code
// [same as above] creates var firstname and assign the value 'Simon'
// [same as above] creates var surname and var fullname
// [same as above] if firstname equals 'Simon', assign 'Holmes' to surname
// otherwise, if firstname equals 'Sally', assign 'J' to var initial. Even though variabl initial hasn't been declared, the assignment automatically declares initial as a variable
// Since there's no curly brackets used, only the first statement (i.e. initial = 'J') will be executed for the else if statement
// then, assign string 'Panayiotou' to var surname. surname now equals to 'Panayiotou', not 'Holmes'.
// assign the value of firstname + ' ' + surname (i.e. 'Simon Panayiotou') to var fullname
// print value of var fullname
var firstname = 'Sally', surname, fullname;
if (firstname === 'Simon')
  surname = 'Holmes';
else if (firstname === 'Sally') // what happens if you remove
  initial = 'J';             // this line (currently commented)
  surname = 'Panayiotou';
fullname = firstname + ' ' + surname;
console.log(fullname);

// 5.
// iterate variable i
// i starts with value 0, prints value of i and increments 1 per loop, stops when i is no longer smaller than 3
// [INERATION 0] i = 0, i is smaller than 3, print 0, i increments 1
// [INERATION 1] i = 1, i is smaller than 3, print 1, i increments 1
// [INERATION 2] i = 2, i is smaller than 3, print 2, i increments 1
// [INERATION 3] i = 3, i is not smaller than 3, break loop
// print 15 since the current value of i is 3, and 3*5 is 15
for (var i = 0; i < 3; i++)
  console.log(i);
  console.log(i*5);

// 6.
// first
// initialize var array as an empty array
// for var i ranging from 0 to 19 with increments by 1, assign value of array[i] (the ith slot in array) to i
var array = [];
for (var i = 0; i < 20; i++) {
  array[i] = i;
}
// second
// does the same thing, through a sightly different approach:
// ++i<20 increments i before comparison
// var a is assigned with value [0] at first
// since the i in a[i]=i is after it incrementation, it ranges from 1 to 19
for(var a=[i=0]; ++i<20; a[i]=i);

// 7.
// the function fun doesn't return anything since there's nothing following the keyword return
var fun = function ()
          {
            return
            {
              name : "someone"
            };
          }

console.log( fun() );
// What if we modify it slightly as follows:
// return is followed by {, telling the compiler there is a dictionary being returned.
// Content of the dictionary can be placed on the second line of code becuase white spaces are accepted inside a dictionary.
var fun = function () {
            return {
              name : "someone"
            };
          }

// 8.
// the following will be displayed:
// Hello, what's your name?
// Nice to meet you Simon
// My name is Simon
// since setTimeout() calls the function function(){ console.log("My name is Simon");} with 2000 milliseconds (2 seconds) timeout, "Nice to meet you Simon" is printed before "My name is Simon"
console.log("Hello, what's your name?");

var waitForIt = setTimeout(
                  function(){
                    console.log("My name is Simon");
                  },
                  2000
                );

console.log("Nice to meet you Simon");

// 9.
global.clearTimeout(waitForIt); // clear out timeout from previous question
// the following will be displayed:
//  1. Taking Simon's request.
//  3. Taking Sally's request.
//  5. Free to take another request.
//  4. Sally: Here's your $100.
//  2. Simon: money's in the safe, you have $5000.
// Since the function that calls console.log(""2. Simon: money's in the safe, you have $5000."); has 3 seconds timeout, and the function that calls console.log("4. Sally: Here's your $100.") has 1 second timeout,
// both the strings will be displayed after the other console.log() calls
// but "4. Sally: Here's your $100." will print before "2. Simon: money's in the safe, you have $5000." as it has less wait time.
console.log("1. Taking Simon's request.");

var requestA = setTimeout(
                 function(){
                   console.log("2. Simon: money's in the safe, you have $5000.");
                 },
                 3000
               );

console.log("3. Taking Sally's request.");

var requestB = setTimeout(
                 function(){
                   console.log("4. Sally: Here's your $100.");
                 },
                 1000
               );

console.log("5. Free to take another request.");

// 10.
global.clearTimeout(requestA);  // clear out timeout from previous question
global.clearTimeout(requestB);
//  1. Taking Simon's request.
//  2. Simon: money's in the safe, you have $5000.     (after 3 seconds)
//  3. Taking Sally's request.
//  4. Sally: Here's your $100.                        (after one more second)
//  5. Free to take another request.
console.log("1. Taking Simon's request.");

setTimeout(
    function(){
        console.log("2. Simon: money's in the safe, you have $5000.");
        console.log("3. Taking Sally's request.");
        setTimeout(
            function(){
                console.log("4. Sally: Here's your $100.");
                console.log("5. Free to take another request.");
            },
            1000
        );
    },
    3000
);
