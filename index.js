function isPalindrome(word) {
  // Write your algorithm here
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}

function reverseString(word) {
  return word.split("").reverse().join("");
}

/* 
  Add your pseudocode here
  reverse the input string

  if the reversed string is the same as the input
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
  Function isPalindrome accepts a string
  Function reverseString accepts the same string, splits the string in an array, reverses the array and then joins the string back to a word.
  Constant reverseWord inside isPalindrome copies reverseString.
  Word is then compared to reverseWord to see if each other are equal to one another.
  The use of equal too (===) can be used in place of an if...else statement.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
