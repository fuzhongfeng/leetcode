/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let j = s.length - 1;
    for (let i = 0; i < s.length; i++) {
        if (i < (s.length - 1) / 2) {
            [s[j--], s[i]]= [s[i], s[j]];
        } else {
            break;
        }
    }
};
// @lc code=end

