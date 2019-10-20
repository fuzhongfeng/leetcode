/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const str = Math.abs(x) + '';
    let result;
    let newStr = ''
    for (let i = str.length -1; i >= 0; i--) {
        if (i !== str.length -1 || str[str.length -1] !== 0) newStr += str[i];
    };
    if (x < 0) newStr = '-' + newStr;

    result = Number(newStr);
    if(result > Math.pow(2, 31) || result < Math.pow(-2, 31)) result = 0;

    return result;
};
// @lc code=end

