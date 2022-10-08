var a = 100;

var b = 150;

var c = 200;

console.log(a > b || a > c); // false ||  false ---> false

console.log(a < b || a > c); // true ||  false ---> true

console.log(a > b || a < c); // false ||  true ---> true

console.log(a < b || a < c); // true ||  true---> true
