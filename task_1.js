let product = {
  id: 13,
  name: "ноутбук",
  firm: "LG",
  quantity: 22,
  price: "6 000,00 ₽",
  totalAmount: "132 000,00 ₽",
};
for (let key in product) {
  console.log(`ключ: ${key}, значение: ${product[key]}`);
}
