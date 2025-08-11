// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    const n = s.length;
    let count = 0;

    function get_length_sub_panlindrom(left, right) {
        while (left > -1 && right < n && s[left] === s[right]) {
            left--;
            right++;
        }
        return (right - left - 1);
    }

    for (let i = 0; i < n; i++) {
        const odd = get_length_sub_panlindrom(i, i);
        const even = get_length_sub_panlindrom(i, i + 1);
        
        if (odd > 0) {
            const add = Math.floor(odd / 2) + 1;
            count += add;
        };
        if (even > 0) {
            const add = Math.floor(even / 2);
            count += add;
        };
    }
    return count;
};

console.log(countSubstrings("abc"));
console.log(countSubstrings("aaa"));