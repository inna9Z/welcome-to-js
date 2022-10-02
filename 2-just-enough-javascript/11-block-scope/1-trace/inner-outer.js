// #todo

let greeting = 'hello';
console.log(greeting, 1);
{
  let greeting = 'hello';
  greeting = 'bye';
  console.log(greeting, 2);
}
console.log(greeting === 'hello');
