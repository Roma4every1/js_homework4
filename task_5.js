let sumArray = (array) => {
  let sum = 0;
  for (let item of array) {
    sum += item;
  }
  return sum;
};

console.log(sumArray([2, 5, 1, 3]));
