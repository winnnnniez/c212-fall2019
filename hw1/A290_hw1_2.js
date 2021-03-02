// 1.
const randc = function(str) { return str[Math.floor(Math.random() * str.length)]; }
console.log(randc('abcde'));
console.log();

// no variables and using .substring(...)
const randc_1 = function(str) {
  str += (Math.floor(Math.random() * str.length))
  return str.substring(str[(str.length)-1], Number(str[(str.length)-1])+1)
}
console.log(randc_1('abcde'))
console.log();

// 2.
var n = Math.floor(Math.random() * 100);
console.log("n = " + n);
console.log();

// const sum = function(n) { return n == 1 ? 1 : n + sum(n-1); }
function sum(n) {
  var sum = 0;
  for (var i = 0; i <= n; i++) {sum += i; }
  return sum
}
console.log("sum = " + sum(n));
const sum_1 = function(n) { return (n**2+n)/2; }
console.log("closed form = " + sum_1(n));
console.log(sum(n) == sum_1(n) ? "success" : "fail");
console.log();

// const sqr_sum = function(n) { return n == 1 ? 1 : n**2 + sqr_sum(n-1); }
function sqr_sum(n) {
  var sum = 0;
  for (var i = 0; i <= n; i++){ sum += i**2; }
  return sum
}
console.log("square sum = " + sqr_sum(n));
const sqr_sum_1 = function(n) { return n*(n+1)*(2*n+1)/6; }
console.log("closed form = " + sqr_sum_1(n));
console.log(sqr_sum(n) == sqr_sum_1(n) ? "success" : "fail");
console.log();

// const cube_sum = function(n) { return n == 1 ? 1 : n**3 + cube_sum(n-1); }
function cube_sum(n) {
  var sum = 0;
  for (var i = 0; i <= n; i++){ sum += i**3; }
  return sum
}
console.log("cube sum = " + cube_sum(n));
const cube_sum_1 = function(n) { return (n**2*(n+1)**2)/4; }
console.log("closed form = " + cube_sum_1(n));
console.log(cube_sum(n) == cube_sum_1(n) ? "success" : "fail");
