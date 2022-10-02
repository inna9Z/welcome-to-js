// #todo

'use strict';

/* Cat Detector


  Data In:

  Data Out:

  Test Cases:


*/

/* --- gather user input --- */

// input <- null
let input = null;
// WHILE: input === null
while (input === null) {
  input = prompt('please enter "cat"');
}
//   input <- prompt('please enter "cat"')
// :END WHILE

/* --- create message --- */

// message <- ''
let messsage = '';
// IF: input !== 'cat'
if (input !== 'cat') {
  messsage = '"' + input + '" is not a cat';
} else {
  message = 'thank you for the cat';
}
//   message <- '"' + input + '" is not a cat'
// ELSE:

//   message <- 'thank you for the cat'
// :END IF

/* --- ? --- */
alert(message, input);
