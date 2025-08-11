// Given two strings s1 and s2. Find the smallest window in the string s1 consisting of all the characters(including duplicates) of the string s2. return empty string in case no such window is present.
// If there are multiple such windows of the same length, return the one with the least starting index.
// Note: All characters are in lowercase letters. 

// Examples:

// Input: s1 = "timetopractice", s2 = "toc"
// Output: "toprac"
// Explanation: "toprac" is the smallest substring in which "toc" can be found.

// Input: s1 = "zoomlazapzo", s2 = "oza"
// Output: "apzo"
// Explanation: "apzo" is the smallest substring in which "oza" can be found.

// Input: s1 = "zoom", s2 = "zooe"
// Output: ""
// Explanation: No window is present containing all characters of s2.

function smallestWindow(s1, s2) {
  if (s2.length > s1.length) return "";

  // For lowercase 'a'..'z'
  const base = "a".charCodeAt(0);
  const need = new Array(26).fill(0);
  for (const ch of s2) need[ch.charCodeAt(0) - base]++;

  let remaining = s2.length;
  let left = 0;
  let bestLen = Infinity;
  let bestStart = 0;

  for (let right = 0; right < s1.length; right++) {
    const rIdx = s1.charCodeAt(right) - base;
    need[rIdx]--;
    if (need[rIdx] >= 0) remaining--;

    while (remaining === 0) {
      if (right - left + 1 < bestLen) {
        bestLen = right - left + 1;
        bestStart = left;
      }
      const lIdx = s1.charCodeAt(left) - base;
      need[lIdx]++;
      if (need[lIdx] > 0) remaining++;
      left++;
    }
  }

  return bestLen === Infinity ? "" : s1.slice(bestStart, bestStart + bestLen);
}

console.log(smallestWindow("timetopractice", "toc"));
console.log(smallestWindow("zoomlazapzo", "oza"));
console.log(smallestWindow("zoom", "zooe"));