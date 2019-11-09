/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * 二分查找的局限性：
 * 1. 单调递增或递减
 * 2. 存在上下界
 * 3. 通过索引可以访问
 * 有序数组可以适用，链表不适用
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
		const mid = Math.floor((right + left)/2)
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
};
// @lc code=end

