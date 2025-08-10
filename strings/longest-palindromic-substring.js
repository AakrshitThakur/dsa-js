// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s) return "";

  let n = s.length;

  // maxLength starting and ending indices
  let start = 0;
  let end = 0;

  // calculate length of odd or even sub-palindrom
  function get_len_sub_palindrom(left, right) {
    while (left > -1 && right < n && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < n; i++) {
    // if sub-palindrom is odd in length
    const odd = get_len_sub_palindrom(i, i);

    // if sub-palindrom is even in length
    const even = get_len_sub_palindrom(i, i + 1);

    const max_length = Math.max(odd, even);

    if (max_length > end - start) {
      start = i - Math.floor((max_length - 1) / 2);
      end = i + Math.floor(max_length / 2);
    }
    // console.log(odd, even, max_length, start, end);
  }
  return s.substring(start, end + 1);
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
