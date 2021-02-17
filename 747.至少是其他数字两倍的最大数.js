/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * 1. 排序，时间O(nlogn)
 * 2. 记录两个最大值，时间O(n)
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  // max1 > max2
  var max1 = Number.MIN_SAFE_INTEGER, max2 = Number.MIN_SAFE_INTEGER
  // 最大值索引
  var max1_i = 0

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] > max1) {
          max2 = max1
          max1 = nums[i]
          max1_i = i
      } else if (nums[i] > max2) { // nums[i] <= max1 && nums[i] > max2
          max2 = nums[i]
      }
  }

  return max1 >= max2 * 2 ? max1_i : -1
};
// @lc code=end

