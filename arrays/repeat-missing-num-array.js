// You are given a read only array of n integers from 1 to n.
// Each integer appears exactly once except A which appears twice and B which is missing.
// Return A and B.
// Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
// Note that in your output A should precede B.
// Example:
// Input:[3 1 2 5 3]
// Output:[3, 4]
// A = 3, B = 4

function repeatAndMissingNum(nums) {
  const n = nums.length;
  if (n < 3) return 0;

  nums = nums.sort((a, b) => a - b);
  let A = undefined,
    B = undefined;

  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      A = nums[i];
      continue;
    }
    if (nums[i] !== nums[i + 1] - 1) {
      B = nums[i] + 1;
    }
  }
  return [A, B];
}

console.log(repeatAndMissingNum([3, 1, 2, 5, 4, 4, 7]));
