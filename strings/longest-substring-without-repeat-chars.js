// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var getLongestSubstring = function (s) {
  const n = s.length;
  let maxLength = 0;
  let charSet = "";
  let right = -1;

  for (let i = 0; i < n; i++) {
    if (charSet.includes(s[i])) {
      const index = charSet.indexOf(s[i]);
      charSet = charSet.substring(index + 1);
      right = charSet.length - 1;
    }
    right++;
    charSet += s[i];
    maxLength = Math.max(right + 1, maxLength);
  }
  return maxLength;
};

console.log(getLongestSubstring("abcabcbb"));
console.log(getLongestSubstring("bbbbb"));
console.log(getLongestSubstring("pwwkew"));
