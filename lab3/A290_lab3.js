// 1.
// create empty list of length len
// fills with 0
// map the list with function f
function buildList(len, f) { return new Array(len).fill(0).map(f); }

// build an array of random integers between -50 and 50
list1 = buildList( 10, function(element) { return Math.floor( Math.random() * 100 ) - 50; })
console.log(list1);

// 2.
// filter list lst for all elements smaller than 0
function filterList(lst) { return lst.filter(x => x<0); }
console.log(filterList(list1));

// 3.
// reduce each pair (a, b) to b concat a
function reduceList(lst) { return lst.reduce((a, b) => [b, ...a], []); }
console.log(reduceList(list1));

// 4.
// build an array of random integers between 10 and 30
list2 = buildList( 10, function(element) {return Math.floor( Math.random() * 21 + 10)})

// filter all elements smaller than or equal to 21, sort new list (ascending), then reverse to descending order
// filter all elements larger than 21, sort new list (ascending), then concat to previous list
function sort1(lst) { return lst.filter(x => x<=21).sort().reverse().concat(lst.filter(x => x>21).sort()); }
console.log(sort1(list2));

// filter odd elements, sort new list (ascending)
// filter even elements, sort new list (ascending), reverse to descending order, then concat to previous list
function sort2(lst) { return lst.filter(x => x%2).sort().concat(lst.filter(x => !(x%2)).sort().reverse()); }
console.log(sort2(list2));

// 5.
// create Creature class
class Creature {
  // construct Creature
  constructor(name) { this.name = name; }
  // define speak & greet
  speak() { return `My name is ${this.name}`; }
  greet() { return "Howdy"; }
}

// create Cow class that extends from Creature
class Cow extends Creature {
  // inherite Creature
  constructor(name) { super(name); }
  // concatenate "Moo, " with parent's speak method
  speak() { return "Moo, " + super.speak();}
}

// create Doh class that extends from Creature
class Dog extends Creature {
  constructor(name) { super(name); }
  speak() { return "Woof, " + super.speak();}
}

var a = new Creature("Leslie");
console.log( a.speak() ); // My name is: Leslie
console.log( a.greet() ); // Howdy

var b = new Cow("Alex");
console.log( b.speak() ); // Moo, my name is Alex
console.log( b.greet() ); // Howdy

var c = new Dog("Trevor");
console.log( c.speak() ); // Woof, my name is Trevor
console.log( c.greet() ); // Howdy
