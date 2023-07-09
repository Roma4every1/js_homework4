function calculateAverage(array) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j];
      count++;
    }
  }
  const average = sum / count;
  return average;
}

const matrix = [
  [12, 98, 78, 65, 23],
  [54, 76, 98, 43, 65],
  [13, 324, 65, 312],
  [9092, 22, 45, 90000],
];
console.log(calculateAverage(matrix));
