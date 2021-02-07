const test = [1, 2, 3, 4, 5];

function sumForLoop(number) {
  let sum = 0;
  for (const num of number) {
    sum += num;
  }
  return sum;
}
console.log(sumForLoop(test));

function sumWhileLoop(number) {
  let i = 0;
  let sum = 0;
  while (i < number.length) {
    sum += number[i];
    i++;
  }
  return sum;
}
console.log(sumWhileLoop(test));

function sumRecursion(number) {
  if (number.length === 0) {
    return 0;
  }
  return number[0] + sumRecursion(number.slice(1, number.length));
}
console.log(sumRecursion(test));

function sumTheSimpleWay(number) {
  return _.reduce(number, function (memo, num) {
    return memo + num;
  }, 0);
}
console.log(sumTheSimpleWay(test));
