// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0, maxCount = 0, maxLength = 0;
    let count = new Array(26).fill(0);

    for (let right = 0; right < s.length; right++) {
        let idx = s.charCodeAt(right) - 65;
        count[idx]++;
        maxCount = Math.max(maxCount, count[idx]);

        while (right - left + 1 - maxCount > k) {
            count[s.charCodeAt(left) - 65]--;
            left++;
        }
        
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));