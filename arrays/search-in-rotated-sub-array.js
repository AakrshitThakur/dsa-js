/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const n = nums.length;
  if (n === 0) return -1;

  let index = 0,
    pivotIndex = 0;
  while (index < n) {
    if (nums[index] > nums[index + 1]) {
      pivotIndex = index + 1;
      break;
    }
    index++;
  }
  let start = [0, pivotIndex],
    end = [pivotIndex - 1, n - 1];
  for (let i = 0; i <= n / 2; i++) {
    let mid = [
      Math.floor((start[0] + end[0]) / 2),
      Math.floor((start[1] + end[1]) / 2),
    ];

    if (nums[mid[0]] === target) {
      return mid[0];
    } else if (nums[mid[0]] > target) {
      end[0] = mid[0] - 1;
    } else {
      start[0] = mid[0] + 1;
    }

    if (nums[mid[1]] === target) {
      return mid[1];
    } else if (nums[mid[1]] > target) {
      end[1] = mid[1] - 1;
    } else {
      start[1] = mid[1] + 1;
    }
  }
  return -1;
};

console.log(search([5, 6, 7, 8, 1, 2, 3, 4], 1));
