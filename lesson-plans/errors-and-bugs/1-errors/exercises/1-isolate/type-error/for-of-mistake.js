'use strict';

console.log('--- in execution phase ---');

/*
  environment: Browse Chrome

  name:TypeError
  message:maxNumber is not iterable

  location: line 22 , coloumn 17

  life cycle: execution phase

  the mistake: we're trying to interat something that is not interable

  the fix(es): Assing a string/ array ti input
*/

const maxNumber = 6;

console.log(maxNumber); // 0, 1, 2, 3, 4, 5
