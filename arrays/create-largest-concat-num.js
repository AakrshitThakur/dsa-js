// Given an array of non-negative integers arr[], arrange them such that their concatenation forms the largest possible number. Return the result as a string, since it may be too large for standard integer types.

// Examples:

// Input: arr[] =  [3, 30, 34, 5, 9]
// Output: "9534330"
// Explanation: The arrangement [9, 5, 34, 3, 30], gives the largest value "9534330".

// Input: arr[] =  [54, 546, 548, 60]
// Output: "6054854654"
// Explanation: The arrangement [60, 548, 546, 54], gives the largest value "6054854654".

function createLargestConcatNum(nums) {
  nums = nums.map(String);
  nums = nums.sort((a, b) => (a + b > b + a ? -1 : 1));

  // 0 in front means the complete array contains zero
  if (numbers[0] === "0") return "0";

  const largestNum = nums.join("");
  return largestNum;
}
console.log(createLargestConcatNum([3, 30, 34, 5, 9]));
console.log(createLargestConcatNum([54, 546, 548, 60]));
