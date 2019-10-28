/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        // 处理个数为奇数情况的回文，如："aba"
        result += iterate(s, i, i);
        // 处理个数为偶数情况的回文，如："aa"
        result += iterate(s, i, i + 1);
    }
    return result;
};

const iterate = (s, start, end) => {
    let num = 0;
    while(start >= 0 && end < s.length && s[start--] === s[end++]) {
        num++;
    }
    return num;
}

// @lc code=end

