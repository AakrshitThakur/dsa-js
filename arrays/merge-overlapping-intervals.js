// Given an array of time intervals where arr[i] = [starti, endi], the task is to merge all the overlapping intervals into one and output the result which should have only mutually exclusive intervals.

// Given an array of time intervals where arr[i] = [starti, endi], find the merge all the overlapping intervals into one, and output the result containing only mutually exclusive intervals.

// Examples:

// Input: arr[] = [[1, 3], [2, 4], [6, 8], [9, 10]]
// Output: [[1, 4], [6, 8], [9, 10]]
// Explanation: In the given intervals, we have only two overlapping intervals [1, 3] and [2, 4]. Therefore, we will merge these two and return [[1, 4]], [6, 8], [9, 10]].

// Input: arr[] = [[7, 8], [1, 5], [2, 4], [4, 6]]
// Output: [[1, 6], [7, 8]]
// Explanation: We will merge the overlapping intervals [[1, 5], [2, 4], [4, 6]] into a single interval [1, 6].

function mergeOverlapIntervals(intervals) {
  const n = intervals.length;
  if (n < 2) return intervals;

  intervals = intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  let temp = intervals[0];

  for (let i = 1; i < n; i++) {
    if (intervals[i][0] < temp[1] && intervals[i][0] > temp[0]) {
      if (intervals[i][1] > temp[1]) temp = [temp[0], intervals[i][1]];
    } else {
      result.push(temp);
      temp = intervals[i];
      if (i === n - 1) result.push(temp);
    }
  }
  return result;
}
console.log(
  mergeOverlapIntervals([
    [7, 8],
    [1, 5],
    [2, 4],
    [4, 6],
  ])
);
console.log(
  mergeOverlapIntervals([
    [1, 3],
    [2, 4],
    [6, 8],
    [9, 10],
  ])
);
