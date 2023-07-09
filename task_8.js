let isPalindrome = (word) => {
  word = word.toLowerCase();
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome("ротатор"));
