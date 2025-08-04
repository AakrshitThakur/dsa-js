// Given an array arr[] of size n, which is sorted and then rotated around an unknown pivot, the task is to check whether there exists a pair of elements in the array whose sum is equal to a given target value.

// Examples :

// Input: arr[] = [11, 15, 6, 8, 9, 10], target = 16
// Output: true
// Explanation: There is a pair (6, 10) with sum 16.

// Input: arr[] = [11, 11, 15, 26, 38, 9, 10], target = 35
// Output: true
// Explanation: There is a pair (26, 9) with sum 35.

// Input: arr[] = [9, 10, 10, 11, 15, 26, 38], target = 45
// Output: false
// Explanation: There is no pair with sum 45.

function isPairSumExists(nums, target) {
  const n = nums.length;
  if (n < 2) return false;

  // x = target - y
  const x = {};

  for (let i = 0; i < n; i++) {
    if (x[target - nums[i]]) return true;
    x[nums[i]] = true;
  }
  return false;
}
console.log(isPairSumExists([11, 15, 6, 8, 9, 10], 16));
console.log(isPairSumExists([11, 11, 15, 26, 38, 9, 10], 35));
console.log(isPairSumExists([9, 10, 10, 11, 15, 26, 38], 45));
