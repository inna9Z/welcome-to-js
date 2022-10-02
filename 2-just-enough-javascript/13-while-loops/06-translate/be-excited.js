'use strict';

/* Be Excited


  Data In:

  Data Out:

  Test Cases:

*/

/* ---  gather user input  --- */

// input <- null
let input = null;
// WHILE: input === null
while (input === null) {
  input = prompt('enter something, it will become excited');
}
//   input <- prompt('enter something, it will become excited')
// :END WHILE

/* ---  create message  --- */
let output = input;
// output <- input
if ([input.length - 1] !== '!') {
  output = output + '!';
}
// IF: input[input.length - 1] !== '!'
//   output <- output + '!'
// :END IF

/* --- display message to the user --- */
alert(output);
// alert(output)
