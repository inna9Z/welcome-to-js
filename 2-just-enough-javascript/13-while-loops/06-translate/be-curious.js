// #todo

'use strict';

/* Be Curious


  Data In:

  Data Out:

  Test Cases:

*/

/* ---  ?  --- */
let input = null;
while (input === null) {
  input = prompt('enter something, it wiil become curious');
}
let output = input;
if (input[input.length - 1] !== '?') {
  output = output + '?';
}
alert(output);
// input <- null
// WHILE: input === null
//   input <- prompt('enter something, it will become curious')
// :END WHILE

/* ---  ?  --- */

// output <- input
// IF: input[input.length - 1] !== '?'
//   output <- output + '?'
// :END IF

/* ---  ?  --- */

// alert(output)
