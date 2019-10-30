/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 这里的子串要求是连续的
    let len = 0;
    let sub = ""; // 利用变量存储
    for (let i = 0; i < s.length; i++) {
        let index = sub.indexOf(s[i])
        sub += s[i];

        if (index !== -1) { // 如果有重复的则重置 sub 变量
            sub = sub.substr(index + 1); // 注意这里截取的开始位置为已重复的下一位。也就是将重复位置及之前的全部丢弃。
        }

        len = Math.max(len, sub.length)
    }
    return len;
};
// @lc code=end

