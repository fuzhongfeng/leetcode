/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const reg = /[a-zA-Z]|\d/;

  let i = 0;
  let j = s.length - 1;
  while (i < j) {
      while (!reg.test(s[i]) && i < j) {
          i++
      }

      while (!reg.test(s[j]) && i < j) {
          j--
      }

      if (s[i++].toLowerCase() !== s[j--].toLowerCase()) {
          return false
      }
  }

  return true
};
// @lc code=end

