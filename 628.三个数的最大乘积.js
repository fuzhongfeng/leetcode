/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  // min1 < min2, 处理负负得正的情况
  var min1 = Number.MAX_SAFE_INTEGER, min2 = Number.MAX_SAFE_INTEGER
  // max1 > max2 > max3
  var max1 = Number.MIN_SAFE_INTEGER, max2 = Number.MIN_SAFE_INTEGER, max3 = Number.MIN_SAFE_INTEGER

  for (const n of nums) {
      if (n < min1) {
          min2 = min1;
          min1 = n;
      } else if (n < min2) {
          min2 = n;
      }

      if (n > max1) {
          max3 = max2;
          max2 = max1;
          max1 = n;
      } else if (n > max2) {
          max3 = max2;
          max2 = n;
      } else if (n > max3) {
          max3 = n;
      }
  }

  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
};
// @lc code=end

