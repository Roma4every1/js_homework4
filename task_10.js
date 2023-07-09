const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
let positiveNumbers = [];
let negativeNumbers = [];
for (let i = 0; i < mixedNumbers.length; i++) {
  if (mixedNumbers[i] >= 0) {
    positiveNumbers.push(` ${mixedNumbers[i]}`);
  } else negativeNumbers.push(` ${mixedNumbers[i]}`);
}
console.log(`положительные:${positiveNumbers}
отрицательные:${negativeNumbers}`);
