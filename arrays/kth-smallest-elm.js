// Given an array arr[] and an integer k where k is smaller than the size of the array, your task is to find the kth smallest element in the given array.

// Follow up: Don't solve it using the inbuilt sort function.

// Examples :

// Input: arr[] = [7, 10, 4, 3, 20, 15], k = 3
// Output: 7
// Explanation: 3rd smallest element in the given array is 7.
// Input: arr[] = [2, 3, 1, 20, 15], k = 4
// Output: 15
// Explanation: 4th smallest element in the given array is 15.

function kth_smallest_elm(nums, k) {
  const n = nums.length;

  let min = nums[0];
  let max = nums[0];

  for (let i = 1; i < n; i++) {
    if (min > nums[i]) min = nums[i];
    if (max < nums[i]) max = nums[i];
  }

  let freq = new Array(max - min + 1).fill(0);

  for (let i = 0; i < n; i++) {
    freq[nums[i] - min] += 1;
  }

  for (let i = 0; i < freq.length; i++) {
    if (freq[i]) k -= freq[i];
    if (k < 1) return i + min;
  }
  return null;
}
console.log(kth_smallest_elm([7, 10, 4, 3, 20, 15], 3));
console.log(kth_smallest_elm([2, 3, 1, 20, 15], 4));
