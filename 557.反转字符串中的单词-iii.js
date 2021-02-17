/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  var arr = s.split(' ')
  var i = 0

  while(i < arr.length) {
      arr[i] = reverseStr(arr[i])
      i++
  }

  function reverseStr(str) {
      let strR = ""
      for (let i = str.length - 1; i >= 0; i--) {
          strR += str[i]
      }

      return strR
      // return str.split('').reverse().join('')
  }

  return arr.join(' ')
};
// @lc code=end

