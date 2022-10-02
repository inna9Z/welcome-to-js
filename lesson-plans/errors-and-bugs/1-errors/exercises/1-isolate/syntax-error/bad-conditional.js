'use strict';

console.log('--- in execution phase ---');

/*
  environment: Browse Chrome

  name:SyntaxError
  message: Unexpected token

  location: line 27 , coloumn 13

  life cycle: Execution Phase

  the mistake: was you can not use else with conditional

  the fix(es): chanchad else to else if 
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}
