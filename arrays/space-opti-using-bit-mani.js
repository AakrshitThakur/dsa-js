// There are many situations where we use integer values as index in array to see presence or absence, we can use bit manipulations to optimize space in such problems.
// Let us consider below problem as an example.
// Given two numbers say a and b, mark the multiples of 2 and 5 between a and b using less than O(|b - a|) space and output each of the multiples.

// Note : We have to mark the multiples i.e save (key, value) pairs in memory such that each key either have value as 1 or 0 representing as multiple of 2 or 5 or not respectively.

// Examples :

// Input : 2 10
// Output : 2 4 5 6 8 10

// Input: 60 95
// Output: 60 62 64 65 66 68 70 72 74 75 76 78
//         80 82 84 85 86 88 90 92 94 95

function spaceOptiUsingBitMani(a, b) {
  if (a < b) {
    const length = b - a + 1;
    const result = new Array(length).fill(false);

    for (let i = 0; i < length; i++) {
      if ((i + 2) % 2 === 0 || (i + 2) % 5 === 0) {
        result[i] = true;
      }
    }
  } else {
    const length = a - b + 1;
    const result = new Array(length).fill(false);

    for (let i = 0; i < length; i++) {
      if ((i + 2) % 2 === 0 || (i + 2) % 5 === 0) {
        result[i] = true;
      }
    }
  }
}
console.log(spaceOptiUsingBitMani(2, 10));
