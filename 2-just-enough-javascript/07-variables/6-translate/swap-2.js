// #todo

'use strict';

// a <- 'y'

// b <- 'x'

// temp <- b

// b <- a

// a <- temp
let a = 'y';
let b = 'x';
let temp;
temp = b;
b = a;
a = temp;
console.log(a === 'x');
console.log(b === 'y');
console.log(temp === 'x');
