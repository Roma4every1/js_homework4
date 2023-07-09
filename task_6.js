let addItem = (arr, item) => {
  arr[arr.length] = item;
};
const arr = ["a", "b"];
addItem(arr, "c");
console.log(arr);
