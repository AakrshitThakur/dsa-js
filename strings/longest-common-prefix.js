// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const n = strs.length;
  let common = strs[0];

  for (let i = 1; i < n; i++) {
    let tempCommon = "";
    for (let j = 0; j < strs[i].length; j++) {
      if (strs[i][j] === common[j]) tempCommon += common[j];
      else break;
    }
    common = tempCommon;
  }
  return common;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
