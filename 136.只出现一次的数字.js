/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 任意数 n m
    // 按位异或 ^ : 对每一对比特位执行异或（XOR）操作。当位 n 和位 m 不相同时，n XOR m 的结果为 1
    // n ^ 0 = n
    // n ^ n = 0
    // n^m^n = (n^n)^m = 0^b = b

    let r = 0;
    for (let n of nums) {
        r ^= n;
    }
    return r;
};
// @lc code=end

