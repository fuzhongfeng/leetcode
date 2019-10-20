/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    let n = 1;
    let max = 1;
    for (let i = 0; i < nums.length; i++) {
        if (i !== 0 && nums[i] > nums[i - 1]) {
            n++;
        } else {
            n = 1;
        }
        max = n > max ? n : max;
    }
    return max
};
// @lc code=end

