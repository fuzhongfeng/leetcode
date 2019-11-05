/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    while(k > 0) {
        k--;
        nums.unshift(nums[nums.length - 1]);
        nums.pop(nums[nums.length - 1]);
    }
};
// @lc code=end

