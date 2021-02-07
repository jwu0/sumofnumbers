const test = [1, 2, 3, 4, 5];

function sumForLoop(number) {
  let sum = 0;
  for (const num of number) {
    sum += num;
  }
  return sum;
}

console.log(sumForLoop(test));
