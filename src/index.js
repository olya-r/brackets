module.exports = function check(str, bracketsConfig) {
  const CLOSING_BRACKETS = {};
  const OPENING_BRACKETS = {};
  
  for (const bracketsPair of bracketsConfig) {
    CLOSING_BRACKETS[bracketsPair[0]] = bracketsPair[1];
    OPENING_BRACKETS[bracketsPair[1]] = bracketsPair[0];
  }

  const stack = [];

  for (const bracket of str) {
    if (stack.length != 0 && CLOSING_BRACKETS[stack[stack.length-1]] == bracket) {
      stack.pop();
      continue;
    }
    if (CLOSING_BRACKETS[bracket]) {
      stack.push(bracket);
      continue;
    }
    if (OPENING_BRACKETS[bracket]) {
      return false;
    }
  }

  return (stack.length == 0);
  // your solution
}
