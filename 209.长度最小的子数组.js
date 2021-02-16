/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * 思路：
 * 1. 滑动窗口无需将所有组合情况都列举出，和大于等于 target 时记录窗口长度、缩小窗口即可。
 * 2. 利用 sum 记录窗口的累加和，j增加则增加，i减少则减少
 * 3. 
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  var i = 0;
  var j = 0;
  var len = nums.length;
  var r = Infinity;
  var sum = nums[0];

  // 终止条件为：i 和 j 都达到尾部
  while (i < len && j < len) {
      if (sum < target) {
          // 窗口长度增加
          j++
          // 窗口累加和减少
          sum += nums[j]
      }

      if (sum >= target) {
          // 满足条件即记录滑动窗口长度, 取最小值
          r = Math.min(j - i + 1, r)
          
          // 窗口累加和减小
          sum -= nums[i]
          // 缩小窗口
          i++
      }
  }

  return r === Infinity ? 0 : r
};
// @lc code=end

