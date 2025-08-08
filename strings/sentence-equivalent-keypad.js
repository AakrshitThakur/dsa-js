// Given a sentence in the form of a string, convert it into its equivalent mobile numeric keypad sequence.

// Mobile-keypad

// Examples :

// Input: GEEKSFORGEEKS
// Output: 4333355777733366677743333557777
// Explanation: For obtaining a number, we need to press a number corresponding to that character for a number of times equal to the position of the character. For example, for character E, press number 3 two times and accordingly.

// Input : HELLO WORLD
// Output : 4433555555666096667775553

function getSentenceEquiKeypad(keypad, sentence) {
  const n = sentence.toUpperCase().length;
  let result = "";

  for (let i = 0; i < n; i++) {
    if (sentence[i] === " ") {
      result += "0";
      continue;
    }
    const ASCII = sentence[i].charCodeAt(0);
    const index = ASCII - "A".charCodeAt(0);
    result += keypad[index];
  }
  return result;
}
const keypad = [
  "2",
  "22",
  "222",
  "3",
  "33",
  "333",
  "4",
  "44",
  "444",
  "5",
  "55",
  "555",
  "6",
  "66",
  "666",
  "7",
  "77",
  "777",
  "7777",
  "8",
  "88",
  "888",
  "9",
  "99",
  "999",
  "9999",
];

console.log(getSentenceEquiKeypad(keypad, "GEEKSFORGEEKS"));
console.log(getSentenceEquiKeypad(keypad, "HELLO WORLD"));
