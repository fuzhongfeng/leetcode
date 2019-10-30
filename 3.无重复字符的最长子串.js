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
    let len = 0;
    for (let i=0; i<s.length; i++) {
        let sub = "";
        let j = i;
        while(j < s.length && sub.indexOf(s[j]) === -1) {
            sub += s[j++];
        }
        len = Math.max(len, sub.length);
    }
    return len;
};
// @lc code=end

