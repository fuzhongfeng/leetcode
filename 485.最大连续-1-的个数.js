/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续1的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  var slow = 0
  var fast = 0
  var n = 0

  while (fast < nums.length) {
      if (nums[fast] !== 1) {
          n = Math.max(n, fast - slow)
          slow = fast + 1
      }
      fast++
  }

  n = Math.max(n, fast - slow)

  return n
};
// @lc code=end

