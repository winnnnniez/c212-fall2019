// 1.
const randc = function(str) { return str[Math.floor(Math.random() * str.length)]; }
console.log(randc('abcde'));

// 2.
const sum = function(n) { return n == 1 ? 1 : n + sum(n-1); }
console.log(sum(3));

const sqr_sum = function(n) { return n == 1 ? 1 : n**2 + sqr_sum(n-1); }
console.log(sqr_sum(3));

const cube_sum = function(n) { return n == 1 ? 1 : n**3 + cube_sum(n-1); }
console.log(cube_sum(3));
