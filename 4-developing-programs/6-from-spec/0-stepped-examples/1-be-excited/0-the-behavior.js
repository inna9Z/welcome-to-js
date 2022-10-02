'use strict';

/* Be Excited

  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/
let input = null;
while (input === null) {
  input = prompt('enter anything');
  console.log(input);
}
console.log(input);

let ouput = '';
output = input + '!';

alert(ouput);
