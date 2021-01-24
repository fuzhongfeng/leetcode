/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/** 通常一维无序数组中，要寻找左边（或右边）第一个比自身大（或小）的元素，适用单调栈
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  var stack = []
  var result = new Array(T.length).fill(0)

  for (let i = 0; i < T.length; i++) {
    while (stack.length && T[stack[stack.length - 1]] < T[i]) {
      var index = stack.pop()
      result[index] = i - index
    }

    stack.push(i)
  }

  return result
};
// @lc code=end

