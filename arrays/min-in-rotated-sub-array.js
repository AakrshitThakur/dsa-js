// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let n = nums.length;
  if (n === 0) return 0;

  let i = 0;
  let j = n - 1;

  while (i < j) {
    if (nums[i + 1] < nums[i]) {
      return nums[i + 1];
    }
    if (nums[j - 1] > nums[j]) {
      return nums[j];
    }
    i++;
    j--;
  }
  return nums[0];
};

console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
console.log(findMin([0, 1, 2, 4, 5, 6, 7]));
