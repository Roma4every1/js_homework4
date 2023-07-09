let numbers = [27, -3, 92, 0, -17, -2, 100];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    console.log(">0");
  } else if (numbers[i] < 0) {
    console.log("<0");
  } else {
    console.log("0");
  }
}

for (let number of numbers) {
  if (number > 0) {
    console.log(">0");
  } else if (number < 0) {
    console.log("<0");
  } else {
    console.log("0");
  }
}
