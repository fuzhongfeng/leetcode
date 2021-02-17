/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var n = 0;
  var len = digits.length - 1;

  for (let i = len; i >= 0; i--) {
      var item = i === len ? digits[i] + 1 : digits[i] + n

      digits[i] = item % 10
      n = Math.floor(item / 10)
  }

  if (n !== 0) digits.unshift(n)

  return digits
};
// @lc code=end

