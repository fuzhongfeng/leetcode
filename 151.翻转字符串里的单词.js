/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // trim
    var str = s.replace(/(^\s+)|(\s+$)/g, '')

    return str.split(' ').filter(n => n).reverse().join(' ')
};
// @lc code=end

