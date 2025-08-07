// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.

// Since an empty string reads the same forward and backward, it is a palindrome.

function isPalindrome(p) {
  const alphaNumericRegex = /^[a-zA-Z0-9]+$/;
  let nonAlphaNumericStr = "";

  // Removing all the non-alphanumeric characters
  for (let i = 0; i < p.length; i++) {
    if (alphaNumericRegex.test(p[i])) nonAlphaNumericStr += p[i].toLowerCase();
  }

  // I know I could use a loop to compare opposite values in the array, but here I want to take a different approach and explore alternative solutions
  const n = nonAlphaNumericStr.length;
  if (n % 2 === 0) {
    const end = nonAlphaNumericStr
      .substring(n / 2, n)
      .split("")
      .reverse()
      .join("");
    const start = nonAlphaNumericStr.substring(0, n / 2);
    return start === end;
  } else {
    const end = nonAlphaNumericStr
      .substring(n / 2 + 1, n)
      .split("")
      .reverse()
      .join("");
    const start = nonAlphaNumericStr.substring(0, n / 2);
    return start === end;
  }
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));
