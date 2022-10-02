import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let bricks = readString('pyramid-bricks');

  // --- build a pyramid ---

  // my solution

  //let pyramid = '';
  //for (let i = 0; i <= bricks.length; i++) {

  //for (let j = 0; j < i; j++) {
  //  pyramid += bricks[j];
  //}
  // pyramid += '\n';
  //}

  //Jonathan solution

  //let pyramid = '';
  //let previousLine = "";
  //for (const brick of bricks) {
  // previousLine = previousLine + brick;
  // pyramid = pyramid + '\n' + previousLine;
  //}
  // my solution 1

  let pyramid = '';
  for (let i = 0; i <= bricks.length; i++) {
    pyramid += bricks.slice(0, i) + '\n';
  }

  //let pyramid = '';
  //for (const brick of bricks) {
  // pyramid = pyramid + '\n' + pyramid + brick;
  //}

  // --- display the pyramid ---

  displayString('out', pyramid);
});
