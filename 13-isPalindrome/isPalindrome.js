function isPalindrome(word) {
  var string = word.toLocaleLowerCase();
  return Array.from(string).toString() === Array.from(string).reverse().toString()
}

// Do not edit this line;
module.exports = isPalindrome;