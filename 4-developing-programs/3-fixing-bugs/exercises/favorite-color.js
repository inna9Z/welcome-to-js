// #todo

'use strict';

/* favorite color

  a user must input something
  - given they cancel, the loop continues
  - given they input an empty string, the loop continues
  - all other input is allowed

  test cases:
    ' ' -> 'you entered " "'
    'hi' -> 'you entered "hi"'
    'JavaScript' -> 'you entered "JavaScript"'

  --- experiments ---

  1. FAILING:
      EXPECT:
      ACTUAL:

    TRY:
    PREDICT:
    IT DID:
    EXPLAIN:

  --- lessons learned ---


*/

let message = 'you entered "';

while (true) {
  const input = prompt('enter something');

  if (input === null && input.length === 0) {
    message = input + '"';
    break;
  }
}

alert(message);

//let message = 'your favorite color is ';
//let isEmpty = true;
//while (isEmpty) {
//let input = prompt('what is your favorite color?');
//if (input === null) {
// alert('there is no escape');
//} else if (input.length === 0) {
// alert('input cannot be empty');
//} else {
// message = message + input;
// isEmpty = false;
//}
//}
//alert(message);
