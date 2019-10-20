/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // 快慢指针法
    let n = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[n]) {
            n++;
            nums[n] = nums[i]
        }
    }

    return n + 1;
};
// @lc code=end

