// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

// input <- ''
let input = '';
while (input !== null && input.length <= 4) {
  input = prompt('enter something longer than 4 characters');
}
// WHILE: input !== null && input.length <= 4
//   input <- prompt('enter something longer than 4 characters')
// :END WHILE
alert(input);
// alert(input)
