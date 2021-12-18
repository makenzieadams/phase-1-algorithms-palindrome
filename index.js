//Write function isPalindrome
//Should return true if string is a palindrome, else return false
//Only lowercase
//Rewrite problem in own words
//Write test cases
//Pseduocode
//Code
//Make it clean and readable
//Optimize

function isPalindrome(word) {
  const wordBackwards = word.split("").reverse().join("");
  if (wordBackwards === word) {
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
