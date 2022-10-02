'use strict';

console.log('--- in execution phase ---');

/*
  environment: Browse Chrome

  name: SyntaxError
  message: Unexpected number

  location: line 25, coloumn 8

  life cycle: creation phase 

  the mistake: was declaring variable name with the number as first character

  the fix(es): rename the variable
*/

const number = 'three';
