// const _ = require('underscore');

function sumFor(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function sumWhile(numbers) {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
}

function sumRecursion(numbers) {
  if (numbers.length === 1) {
    return numbers[0];
  }
  return numbers.pop() + sumRecursion(numbers);
}

function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, function (memo, num) { return memo + num; }, 0);
}

console.log(sumFor([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(sumWhile([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(sumRecursion([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(sumTheSimpleWay([1, 2, 3, 4, 5, 6, 7, 8]));
