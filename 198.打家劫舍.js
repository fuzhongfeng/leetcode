/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // dp(n) = Max(dp(n-2) + Vn, dp(n-1))
    let per = 0; 
    let max = 0;
    for(let i=0; i<nums.length; i++) {
      const temp = max;
      max = Math.max(per + nums[i], max) // per: dp(n-2);nums[i]: Vn;max: dp(n-1)
      per = temp;
    }
    return max;
};
// @lc code=end

