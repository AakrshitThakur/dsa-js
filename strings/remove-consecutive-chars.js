// You are given a string s, consisting of lowercase alphabets. Your task is to remove consecutive duplicate characters from the string.

// Example:

// Input: s = "aabb"
// Output:  "ab"
// Explanation:
// The character 'a' at index 2 is the same as 'a' at index 1, so it is removed.
// Similarly, the character 'b' at index 4 is the same as 'b' at index 3, so it is removed.
// The final string is "ab".

// Input:s = "aabaa"
// Output: "aba"
// Explanation:
// The character 'a' at index 2 is the same as 'a' at index 1, so it is removed.
// The character 'a' at index 5 is the same as 'a' at index 4, so it is removed.
// The final string is "aba".

// Input: s = "abcddcba"
// Output: "abcdcba"
// Explanation:
// The character 'd' at index 5 is the same as 'd' at index 4, so it is removed.
// No other consecutive duplicates exist.
// The final string is "abcdcba".

function removeConsecutiveChars(str) {
  let result = "";
  const n = str.length;
  const freq = {};

  for (let i = 0; i < n; i++) {
    if (!freq[str[i]]) {
      freq[str[i]] = true;
      result += str[i];
    }
    if (i > 0 && str[i] !== str[i - 1]) freq[str[i - 1]] = false;
  }
  return result;
}

console.log(removeConsecutiveChars("aabb"));
console.log(removeConsecutiveChars("aabaa"));
console.log(removeConsecutiveChars("abcddcba"));
