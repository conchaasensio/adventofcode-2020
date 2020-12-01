fs = require('fs');
const numbersFile = fs.readFileSync('input.txt', 'utf8');
const numbers = numbersFile.split('\n');

//First part of the solution
const combinationsOf2Elements = numbers.flatMap((v, i) =>
  numbers.slice(i + 1).map((w) => [parseInt(v), parseInt(w)])
);

const [number1, number2] = combinationsOf2Elements.find(
  ([a, b]) => a + b === 2020
);

const result = number1 * number2;

//Second part of the solution

let combinationsOf3Elements = [];
for (k = 0; k < numbers.length - 2; k++) {
  for (j = k + 1; j < numbers.length - 1; j++) {
    for (i = j + 1; i < numbers.length; i++) {
      combinationsOf3Elements.push([
        parseInt(numbers[k]),
        parseInt(numbers[j]),
        parseInt(numbers[i]),
      ]);
    }
  }
}

const [number1b, number2b, number3b] = combinationsOf3Elements.find(
  ([a, b, c]) => a + b + c === 2020
);

const resultb = number1b * number2b * number3b;

console.log(resultb);
