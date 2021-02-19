/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  var l1 = num1.length - 1
  var l2 = num2.length - 1
  // 十位
  var t = 0
  var r = ''

  // 两个字符串都遍历完
  while (l1 >= 0 || l2 >= 0) {
      // 如果一个字符串处理完了，则不相加
      var n = (l1 >= 0 ? Number(num1[l1]) : 0) + (l2 >= 0 ? Number(num2[l2]) : 0) + t

      // 处理个位
      r = n % 10 + r
      // 处理十位
      t = Math.floor(n / 10)

      l1--
      l2--
  }

  return t === 0 ? r : t + r
};
// @lc code=end

