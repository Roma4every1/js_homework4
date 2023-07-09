let generateRandomNumbers = (length) => {
  let array = [];
  for (let i = 0; i < length; i++) {
    let randomNumber = Math.round(Math.random() * 10)+1;
    array.push(` ${randomNumber}`);
  }
  return array;
};

let cubeNumbers = (array) => {
  let cubeArray = [];
  for (let i = 0; i < array.length; i++) {
    let cubeNumber = Math.pow(array[i], 3);
    cubeArray.push(` ${cubeNumber}`);
  }
  return cubeArray;
};

const array = generateRandomNumbers(5);
const cubedArray = cubeNumbers(array);

console.log(`array:${array}
cubedArray:${cubedArray}`);
