/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  var left = 0
  var right = nums.length - 1

  while(left <= right) {
      var mid = Math.floor((right + left) / 2)

      if (nums[mid] > target) {
          if (mid === 0) { // 插入数组头部
              return 0
          } else if (nums[mid - 1] < target && target < nums[mid]) { // 保证 mid - 1 存在
              return mid
          }
          right = mid - 1
      } else if (nums[mid] < target) {
          if (mid === nums.length - 1) { // 插入数组尾部
              return mid + 1
          } else if (nums[mid] < target && target < nums[mid + 1]) { // 保证 mid + 1 存在
              return mid + 1
          }
          left = mid + 1
      } else if (nums[mid] === target) {
          return mid
      }
  }
};
// @lc code=end

