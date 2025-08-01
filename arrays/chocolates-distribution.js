// Chocolate Distribution Problem

// Given an array arr[] of n integers where arr[i] represents the number of chocolates in ith packet. Each packet can have a variable number of chocolates. There are m students, the task is to distribute chocolate packets such that:

// 1. Each student gets exactly one packet.
// 2. The difference between the maximum and minimum number of chocolates in the packets given to the students is minimized.
// 3. Examples:

// Input: arr[] = {7, 3, 2, 4, 9, 12, 56}, m = 3
// Output: 2
// Explanation: If we distribute chocolate packets {3, 2, 4}, we will get the minimum difference, that is 2.

// Input: arr[] = {7, 3, 2, 4, 9, 12, 56}, m = 5
// Output: 7
// Explanation: If we distribute chocolate packets {3, 2, 4, 9, 7}, we will get the minimum difference, that is 9 - 2 = 7.

function minDiffChoco(packets, m) {
  const sortedPackets = packets.sort((a, b) => a - b);
  if (packets.length < m) {
    return `Cannot distribute ${packets.length}th packets to ${m} children`;
  }
  if (m === 1) {
    return sortedPackets[0];
  }

  let min = Number.MAX_VALUE;
  for (let i = 0; i < sortedPackets.length - m + 1; i++) {
    const diff = sortedPackets[i + m - 1] - sortedPackets[i];
    if (min > diff) {
      min = diff;
    }
  }
  return min;
}
console.log(minDiffChoco([7, 3, 2, 4, 9, 12, 56], 5));
