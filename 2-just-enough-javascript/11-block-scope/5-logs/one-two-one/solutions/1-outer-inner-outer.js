'use strict';

let a = 'word';
console.log(a);

{
  a = a;
  console.log(a);
}

console.log(a);
