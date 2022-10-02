// #todo

'use strict';

// a <- 'y'
let a = 'y';
// b <- 'x'
let b = 'x';
let temp;
// temp <- a
temp = b;
b = a;
a = temp;
console.log(a === 'x');
console.log(b === 'y');
console.log(temp === 'x');

// a <- b

// b <- temp
