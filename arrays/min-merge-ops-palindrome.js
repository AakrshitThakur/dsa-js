// Given an array of positive integers. We need to make the given array a 'Palindrome'. The only allowed operation is"merging" (of two adjacent elements). Merging two adjacent elements means replacing them with their sum. The task is to find the minimum number of merge operations required to make the given array a 'Palindrome'.

// To make any array a palindrome, we can simply apply merge operation n-1 times where n is the size of the array (because a single-element array is always palindromic, similar to single-character string). In that case, the size of array will be reduced to 1. But in this problem, we are asked to do it in the minimum number of operations.

// Example :

// Input : arr[] = {15, 4, 15}
// Output : 0
// Array is already a palindrome. So we
// do not need any merge operation.

// Input : arr[] = {1, 4, 5, 1}
// Output : 1
// We can make given array palindrome with
// minimum one merging (merging 4 and 5 to
// make 9)

// Input : arr[] = {11, 14, 15, 99}
// Output : 3
// We need to merge all elements to make
// a palindrome.

// The expected time complexity is O(n).

function findMinOps(nums) {
  const n = nums.length;
  if (n < 0) return -1;

  let i = 0;
  let j = n - 1;
  let ops = 0;

  while (i <= j) {
    if (nums[i] === nums[j]) {
      j--;
      i++;
    } else if (nums[i] < nums[j]) {
      nums[i + 1] += nums[i];
      ops++;
      i++;
    } else {
      nums[j - 1] += nums[j];
      ops++;
      j--;
    }
  }
  return ops;
}

console.log(findMinOps([15, 4, 15]));
console.log(findMinOps([1, 4, 5, 1]));
console.log(findMinOps([11, 14, 15, 99]));
