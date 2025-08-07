// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const stack = [];
  let stackIndex = -1;
  const n = s.length;

  for (let i = 0; i < n; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
      stackIndex++;
    } else if (s[i] === ")" || s[i] === "}" || s[i] === "]") {
      if (i === 0) return false;
      else if (stack[stackIndex] === "(" && s[i] === ")") {
        stack.pop();
        stackIndex--;
      } else if (stack[stackIndex] === "{" && s[i] === "}") {
        stack.pop();
        stackIndex--;
      } else if (stack[stackIndex] === "[" && s[i] === "]") {
        stack.pop();
        stackIndex--;
      } else return false;
    } else return false;
  }
  return stackIndex === -1;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid("([)]"));
