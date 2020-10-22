/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
  var left = 1;
  
  while(left <= n) {
      var m = Math.floor((left + n)/2)
      if (guess(m) === 0) {
          return m
      } else if(guess(m) === 1) {
          left = m + 1
      } else if (guess(m) === -1) {
          n = m - 1
      }
  }
};
// @lc code=end

