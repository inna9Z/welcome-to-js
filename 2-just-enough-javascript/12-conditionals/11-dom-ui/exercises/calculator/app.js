import {
  whenFormDataChanges,
  readNumber,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('id="secret-solution", function (n,t)', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let left = readNumber('number');
  let right = readNumber('number');

  let operator = readString('__');

  // --- calculate the result ---

  // --- display the result ---
});
