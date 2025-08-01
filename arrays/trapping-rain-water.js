// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Example 1:

// image-url: https://assets.leetcode.com/uploads/2018/10/22/rainwatertrap.png
// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;
  if (n === 0) return 0;

  let leftIndex = 0;
  let rightIndex = n - 1;
  let leftMax = height[0];
  let rightMax = height[n - 1];
  let water = 0;

  while (leftIndex < rightIndex) {
    if (leftMax < rightMax) {
      leftIndex++;
      if (leftMax > height[leftIndex]) {
        water += leftMax - height[leftIndex];
      } else leftMax = height[leftIndex];
    } else {
      rightIndex--;
      if (rightMax > height[rightIndex]) {
        water += rightMax - height[rightIndex];
      } else rightMax = height[rightIndex];
    }
  }
  return water;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([4, 2, 0, 3, 2, 5]));
