/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // 1. 双层循环O(n^2)
  // var r = 0
  // var i = 0
  // var j = height.length - 1

  // while (i <= j + 1) {
  //     j = height.length - 1
      
  //     while(i + 1 <= j) {
  //         var n;
  //         if (height[i] === 0 || height[j] === 0) {
  //             n = 0
  //         } else {
  //             n = Math.min(height[i], height[j]) * (j - i)
  //         }
  //         r = Math.max(Math.min(height[i], height[j]) * (j - i), r)
  //         j--
  //     }
  //     i++
  // }

  // return r

  // 2. 双指针一次遍历
  // Math.min(height[i], height[j]) * (j - i)
  // a. 如果较小的指针值不移动，则容量永远都小于或等于当前容量
  // b. 每次移动较小值的指针则可以减少不必要的求和比较
  var r = 0
  var i = 0
  var j = height.length - 1

  while(i < j) {
      var r = Math.max(Math.min(height[i], height[j]) * (j - i), r)
      if (height[i] < height[j]) {
          i++
      } else {
          j--
      }
  }

  return r
};
// @lc code=end

