/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var len = s.length;

  if (len % 2 === 1) {
      return false;
  }

  var stack = [];
  var map = new Map([
      ['(', ')'],
      ['[', ']'],
      ['{', '}'],
  ]);

  for (let i = 0; i < len; i++) {
      // 左括号
      if (map.has(s[i])) {
          stack.push(map.get(s[i]))
      } else { // 右括号
          if (s[i] === stack[stack.length - 1]) {
              stack.pop()
          } else {
              return false
          }
      }
  }

  return !stack.length
};
// @lc code=end

