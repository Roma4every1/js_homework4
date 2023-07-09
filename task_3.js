let fruits = ["pear", "quince", "kiwi", "fig"];
console.log(`${fruits[1]}, ${fruits[3]}
length: ${fruits.length}`);
fruits.push("apricot");
fruits.splice(2, 1, "cherry");
console.log(fruits);
