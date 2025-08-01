// Maximum and minimum of an array using minimum number of comparisons
// Last Updated : 23 Jul, 2025
// Given an array, the task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

// Examples:

// Input: arr[] = {3, 5, 4, 1, 9}
// Output: Minimum element is: 1
//         Maximum element is: 9

// Input: arr[] = {22, 14, 8, 17, 35, 3}
// Output:  Minimum element is: 3
//         Maximum element is: 35

// Return type = Array[min_elm, max_elm]
function findMaxMinElm(nums) {
  let n = nums.length;
  if (n === 0) return [undefined, undefined];
  else if (n === 1) return [nums[0], nums[0]];
  else {
    let min = Infinity;
    let max = -Infinity;
    for (let num of nums) {
      if (max < num) max = num;
      if (min > num) min = num;
    }
    return [min, max];
  }
}
console.log(findMaxMinElm([23, 4, -1, 88]));
