/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var set = new Set();
    var flag = false;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        if (set.has(nums[i])) {
            flag = true;
            break;
        } else {
            set.add(nums[i])
        }
    }
    
    return flag;
};
// @lc code=end

