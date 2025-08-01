// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

// Example 1:

// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5
// Example 2:

// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const n = nums.length;
  if (n === 0) return 0;

  const max = Math.max(...nums),
    min = Math.min(...nums);
  let freqArr = new Array(max - min + 1).fill(0);

  for (let i = 0; i < n; i++) {
    freqArr[nums[i] - min] += 1;
  }
  for (let i = freqArr.length - 1; i >= 0; i--) {
    k -= freqArr[i];
    if (k <= 0) return i + min;
  }
};

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));