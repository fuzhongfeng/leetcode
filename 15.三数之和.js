/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // 1. 哈希表
    const map = new Map();
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
      for (let j = i + 1; j < nums.length - 1; j++) {
        if (map.has(nums[j])) {
          result.push(map.get(nums[j]).concat([nums[j]]))
          map.delete(nums[j])
        } else {
          const n = 0 - nums[j] - nums[i]
          map.set(n, [nums[j], nums[i]])
        }
      }
    }

    return result;
};
// @lc code=end

