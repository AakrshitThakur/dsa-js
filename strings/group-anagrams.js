// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const n = strs.length;
    const result = [];
    const sortedStrs = [];

    for (let i = 0; i < n; i++) {
        sortedStrs[i] = strs[i].split("").sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)).join("");
    }

    const freq = {};
    let newIndex = 0;

    for (let i = 0; i < n; i++) {
        if (freq[sortedStrs[i]] == undefined) {
            freq[sortedStrs[i]] = newIndex;
            result[newIndex] = [strs[i]];
            newIndex++;
        } else {
            const index = freq[sortedStrs[i]];
            result[index].push(strs[i]);
        }
    }
    return result;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));