/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 1. 主对角线翻转矩阵（沿着左上角顶点到右下角定点的对角线）
  // 2. 左右对称翻转矩阵（左右两部分以y轴为中心轴互换）

  var len = matrix.length

  // 主对角线翻转
  for (let i = 0; i < len; i++) {
      // j < i，是为了防止第二次遍历的时候将已经替换的元素位置再次还原。
      for (let j = 0; j < i; j++) {
          [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
      }
  }

  // 左右翻转
  for (let i = 0; i < len; i++) {
      for (let j = 0; j < Math.floor(len / 2); j++) {
          [matrix[i][len - 1 - j], matrix[i][j]] = [matrix[i][j], matrix[i][len - 1 - j]]
      }
  }
};
// @lc code=end

