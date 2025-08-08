// Given a string s, the task is to identify all characters that appear more than once and print each as a list containing the character and its count.

// Examples:

// Input: s = "geeksforgeeks"
// Output: ['e', 4], ['g', 2], ['k', 2], ['s', 2]
// Explanation: Characters e, g, k, and s appear more than once. Their counts are shown in order of first occurrence.

// Input: s = "programming"
// Output: ['r', 2], ['g', 2], ['m', 2]
// Explanation: Only r, g, and m are duplicates. Output lists them with their counts.

// Input: s = "mississippi"
// Output: ['i', 4], ['s', 4], ['p', 2]
// Explanation: Characters i, s, and p have multiple occurrences. The output reflects that with count and order preserved.

function allDuplicateChars(s) {
  const n = s.length;
  const freq = {};
  const result = {};

  for (let i = 0; i < n; i++) {
    if (!freq[s[i]]) freq[s[i]] = 1;
    else {
      freq[s[i]]++;
      if (freq[s[i]] > 1) result[s[i]] = freq[s[i]];
    }
  }
  return result;
}

console.log(allDuplicateChars("geeksforgeeks"));
console.log(allDuplicateChars("programming"));
console.log(allDuplicateChars("mississippi"));
