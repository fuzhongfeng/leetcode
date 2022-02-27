/*
 * @lc app=leetcode.cn id=1572 lang=javascript
 *
 * [1572] 矩阵对角线元素的和
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  // 第一版，内存占用较多
  // var result = 0;
  // var len = mat.length;
  // var primaryMax = len - 1;
  // var secondaryMax = len - 1;
  // var secondaryMin = 0;
  // var map = new Map()
  // while (primaryMax >= 0) {
  //   result += mat[primaryMax][primaryMax];
  //   map.set(`${primaryMax}-${primaryMax}`, true)
  //   primaryMax--;
  // }
  // while (secondaryMax >= 0 && secondaryMin <= len) {
  //   if (!map.get(`${secondaryMax}-${secondaryMin}`)) {
  //     result += mat[secondaryMax][secondaryMin];
  //   };
  //   secondaryMax--;
  //   secondaryMin++
  // }
  // return result;

  // 第二版，省略 map 通过奇偶判断是否重复添加（即x 和 y是否相等）
  var result = 0;
  var max = len = mat.length - 1;

  while (max >= 0) {
    result += mat[max][max];
    max--;
  }

  max = len;

  while (max >= 0) {
    // 相同则代表为奇数矩阵，且为最中间的点
    if (max !== len - max) {
      result += mat[max][len - max];
    };
    max--;
  }
  return result;
};
// @lc code=end

