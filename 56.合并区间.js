/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  var result = []
  intervals.sort((a, b) => (a[0] - b[0]))

  for(let i = 0; i < intervals.length; i++) {
      if (result.length === 0) {
          result.push(intervals[i])
          continue
      }

      // 存在交叉区间
      if (result[result.length - 1][1] >= intervals[i][0]) {
          // 合并交叉区间
          result[result.length - 1][1] = Math.max(result[result.length - 1][1], intervals[i][1])
      } else {
          result.push(intervals[i])
      }
  }

  return result
};
// @lc code=end

