// Given two strings wild and pattern. Determine if the given two strings can be matched given that, wild string may contain * and ? but string pattern will not. * and ? can be converted to another character according to the following rules:

// * --> This character in string wild can be replaced by any sequence of characters, it can also be replaced by an empty string.
// ? --> This character in string wild can be replaced by any one character.
// Example 1:

// Input:
// wild = ge*ks
// pattern = geeks
// Output: Yes
// Explanation: Replace the '*' in wild string
// with 'e' to obtain pattern "geeks".
// Example 2:

// Input:
// wild = ge?ks*
// pattern = geeksforgeeks
// Output: Yes
// Explanation: Replace '?' and '*' in wild string with
// 'e' and 'forgeeks' respectively to obtain pattern
// "geeksforgeeks"
// Your Task:
// You don't need to read input or print anything. Your task is to complete the function match() which takes the string wild and pattern as input parameters and returns true if the string wild can be made equal to the string pattern, otherwise, returns false.

// Expected Time Complexity: O(length of wild string * length of pattern string)
// Expected Auxiliary Space: O(length of wild string * length of pattern string)

function wildcardMatch(wild, pattern) {
  const n1 = wild.length;
  const n2 = pattern.length;
  let wIdx = 0;
  let pIdx = 0;
  let starIdx = -1;

  while (pIdx < n2) {
    if (wild[wIdx] === pattern[pIdx] || wild[wIdx] === "?") {
      wIdx++;
      pIdx++;
    } else if (wild[wIdx] === "*") {
      starIdx = wIdx;
      wIdx++;
    } else if (starIdx !== -1) {
      wIdx = starIdx + 1;
      pIdx++;
    } else return false;
  }

  while (wIdx < n1 && wild[wIdx] === "*") wIdx++;
  return wIdx === n1;
}

console.log(wildcardMatch("ge*ks", "geeks")); // true
console.log(wildcardMatch("ge?ks*", "geeksforgeeks")); // true
console.log(wildcardMatch("*", "")); // true
console.log(wildcardMatch("?", "")); // false
console.log(wildcardMatch("a*b?c", "axxxbyc")); // true
console.log(wildcardMatch("a*b?c", "axxxbyzc")); // false
