/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n < 1) return 0;
    if (n === 1) return 1; 
    if (n === 2) return 2;
    let min = 1;
    let max = 2;
    let total = 0;
    for (let i = 3; i <= n; i++) {
        total = min + max;
        min = max;
        max = total;
    }

    return total;
};
// @lc code=end

