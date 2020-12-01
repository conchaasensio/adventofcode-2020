fs = require('fs');
const numbersFile = fs.readFileSync('input.txt', 'utf8');
const numbers = numbersFile.split('\n');

const combinationsOf2Elements = numbers.flatMap((v, i) =>
  numbers.slice(i + 1).map((w) => [parseInt(v), parseInt(w)])
);

const [number1, number2] = combinationsOf2Elements.find(
  ([a, b]) => a + b === 2020
);

const result = number1 * number2;

console.log(result);
