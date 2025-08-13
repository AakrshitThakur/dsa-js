// Given a string s, of lowercase english alphabets, find the length of the longest proper prefix which is also a suffix.
// Note: Prefix and suffix can be overlapping but they should not be equal to the entire string.

// Examples :

// Input: s = "abab"
// Output: 2
// Explanation: The string "ab" is the longest prefix and suffix.

// Input: s = "aabcdaabc"
// Output: 4
// Explanation: The string "aabc" is the longest prefix and suffix.

// Input: s = "aaaa"
// Output: 3
// Explanation: "aaa" is the longest prefix and suffix.

function getLPSLength(s) {
  const n = s.length;
  let lps = new Array(n).fill(0);
  let i = 1;
  let len = 0;

  while (i < n) {
    if (s[i] === s[len]) {
      len++;
      lps[i] = len;
      i++;
    } else if (len !== 0) {
      len = lps[len - 1];
    } else {
      lps[i] = 0;
      i++;
    }
  }
  return lps[n - 1];
}

console.log(getLPSLength("abab"));
console.log(getLPSLength("aabcdaabc"));
console.log(getLPSLength("aaaa"));
