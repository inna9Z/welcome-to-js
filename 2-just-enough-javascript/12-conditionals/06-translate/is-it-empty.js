// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */
let input = prompt('do whatewer you wont');
// input <- prompt('do whatever you want')

/* ---   ?   --- */
let message = 'your input is ';
// message <- 'your input is '
if (input === null) {
  // IF: input === null
  /* ---   ?   --- */
  message = message + 'null';
}
//   message <- message + 'null'
// ELSE:
else {
  let maybeNot = '';
}
/* ---   ?   --- */
if (input.length !== 0) {
  maybeNot = 'not ';
} else {
  message = message + maybeNot + 'empty';
}

alert(message);
//   maybeNot <- ''
//   IF: input.length !== 0
/* ---   ?   --- */
//     maybeNot <- 'not '
//   :END IF
//   message <- message + maybeNot + 'empty'
// :END IF

/* ---   ?   --- */

// alert(message)
