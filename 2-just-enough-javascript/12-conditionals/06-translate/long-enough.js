// #todo

'use strict';
/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

// input <- prompt('enter anything longer than 5 characters')

// IF: input !== null
//   IF: input.length < 5
/* ---   ?   --- */
//     message <- 'too short'
//   ELSE: IF: input.length > 5
/* ---   ?   --- */
//     message <- 'long enough'
//   ELSE:
/* ---   ?   --- */
//     message <- 'exactly 5!'
//   :END IF
// ELSE:
/* ---   ?   --- */
//   message <- 'you canceled :('
// :END IF

/* ---   ?   --- */

// alert(message)

let input = prompt('enter anything longer than 5 characters');
let message;
if (input !== null) {
  if (input.length < 5) {
    message = 'long enough';
  }
} else if (input.length > 5) {
  message = 'long enough';
} else {
  message = 'exactly 5!';
}

console.log(message);
