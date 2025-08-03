// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let n = nums.length;
    if (n === 0) return 0;

    let result = Math.max(...nums);
    let currMax = 1;
    let currMin = 1;

    for (let i = 0; i < n; i++) {
        const m = currMax * nums[i];
        currMax = Math.max(m, currMin * nums[i], nums[i]);
        currMin = Math.min(m, currMin * nums[i], nums[i]);
        result = Math.max(currMax, result);
    }
    return result;
};

console.log(maxProduct([2,3,-2,4]));
console.log(maxProduct([-2,0,-1]));