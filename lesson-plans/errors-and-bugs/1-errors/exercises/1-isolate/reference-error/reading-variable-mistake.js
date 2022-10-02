'use strict';

console.log('--- in execution phase ---');

/*
  environment: Browse Chrome

  name: ReferenceError
  message:  Cannot access 'tomatoes' before initialization


  location: line 20, coloumn 13

  life cycle:in Execution Phase

  the mistake: mistake was reading a variable before it was declared and int

  the fix(es): reading befor declared and int
*/

let tomatoes = 'fresh';
console.log(tomatoes);
