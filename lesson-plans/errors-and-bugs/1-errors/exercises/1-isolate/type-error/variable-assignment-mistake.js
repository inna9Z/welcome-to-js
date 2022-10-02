

'use strict';

console.log('--- in execution phase ---');


/*
  environment: Browse Chrome

  name:SyntaxError
  message:Invalid left-hand side in assignment

  location: line 25

  life cycle: in execution phase

  the mistake: 

  the fix(es):
*/

let isHappy = false;

true = isHappy;


