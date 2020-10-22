/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x <= 0) return 0;

  var left = 1, right = x;
  while(left <= right) {
      var mid = Math.floor((right + left) / 2);
      var sq = mid * mid
      
      if (sq <= x && (mid + 1) * (mid + 1) > x ) {
          return mid
      } else if (sq < x) {
          left = mid + 1
      } else if (sq > x) {
          right = mid -1
      }
  }
};
// @lc code=end

