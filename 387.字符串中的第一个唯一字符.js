/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // let r = -1
    // for (let i = 0; i < s.length; i++) {
    //   if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
    //     r = i;
    //     break;
    //   }
    // }
    // return r;

    let r = -1;
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
      if (map.has(s[i])) {
        map.set(s[i], true);
      } else {
        map.set(s[i], 1);
      }
    }

    for (let i = 0; i < s.length; i++) {
      if (map.get(s[i]) === 1) {
        r = i;
        break;
      }
    }
    return r;

    // let result = -1;
    // const map = new Map();
    // let len = s.length;

    // let len1 = 0;
    // while(len1 < len) {
    //   if (map.has(s[len1])) {
    //     map.set(s[len1], false);
    //   } else {
    //     map.set(s[len1], true);
    //   }
    //   len1++;
    // }

    // let len2 = 0;
    // while(len2 < len) {
    //   if (map.get(s[len2])) {
    //     result = len2;
    //     break;
    //   }
    //   len2++;
    // }
    // return result;
};
// @lc code=end

