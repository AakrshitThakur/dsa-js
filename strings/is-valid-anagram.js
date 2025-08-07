// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
  const s_len = s.length;
  const t_len = t.length;

  if (s_len !== t_len) return false;

  const freq = {};

  for (let i = 0; i < s_len; i++) {
    if (!freq[s[i]]) {
      freq[s[i]] = 1;
    } else {
      freq[s[i]]++;
    }
  }

  for (let i = 0; i < t_len; i++) {
    // if statement checking value greater than 0
    if (freq[t[i]]) {
      freq[t[i]]--;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "cat"));
