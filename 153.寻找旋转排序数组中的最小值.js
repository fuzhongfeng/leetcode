/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  var left = 0, right = nums.length - 1;
  var min_max = nums[right];

  while(left < right) {
      var mid = Math.floor((left+right)/2);
      if (nums[mid] > min_max) {
          left = mid + 1;
      } else {
          right = mid;
      }
  }

  return nums[left];
};
// @lc code=end

