'use strict';

console.log('--- in execution phase ---');

/*
  environment: Chrome Browser

  name:ReferenceError
  message: Cannot access 'isValidUserName' before initialization

  location: line 24, coloumn 19

  life cycle: in Execution Phase

  the mistake: mistake was using a variable befor it was declareted 

  the fix(es): declared before using
*/

const userName = 'chiobin';

console.log('userName:', typeof userName, userName);
let isValidUserName;
if (userName.length > 3) {
  isValidUserName = true;
}

if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
