'use strict';

console.log('--- in execution phase ---');

/*
  environment: Browse Chrome

  name:SyntaxError
  message:Unexpected string

  location: line 23, coloumn 44

  life cycle: creation phase 

  the mistake: we  can't use single quotes more than one time in the same line

  the fix(es): remove the single quotes and add double quotes
*/

const quotesInQuotes = 'remind yourself "i can do this!" at least once a day';
