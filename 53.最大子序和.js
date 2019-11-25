/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let r = nums[0];
    let sum = 0;
    for(let i=0; i<nums.length; i++) {
      sum = Math.max(nums[i], sum + nums[i])
      r = Math.max(sum, r)
    }
    return r;
};
// @lc code=end

