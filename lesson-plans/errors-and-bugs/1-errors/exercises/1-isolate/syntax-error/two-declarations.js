'use strict';

console.log('--- in execution phase ---');

/*
  environment: Browse Chrome

  name:SyntaxError
  message: Identifier 'tree' has already been declared

  location: line 22, coloumn 8

  life cycle: creation phase 

  the mistake: was declaretion let 2 times

  the fix(es): remove the variable (let)
*/

let tree = 'oak';

tree = 'birch';
