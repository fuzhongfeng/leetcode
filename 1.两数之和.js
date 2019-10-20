/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    let arr = []
    for (let i = nums.length - 1; i >= 0; i--) {
        const j = map.get(target - nums[i]);
        if (j !== undefined) {
          arr = [i, j];
          break;
        }
        map.set(nums[i], i);
    }
    return arr
};
// @lc code=end

