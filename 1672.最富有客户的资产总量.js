/*
 * @lc app=leetcode.cn id=1672 lang=javascript
 *
 * [1672] 最富有客户的资产总量
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {

  // 第一种解法
  // var index = accounts.length - 1;
  // var result = 0;
  // while(index >= 0) {
  //   var sum = 0;
  //   var i = accounts[index].length - 1;
  //   while(i >= 0) {
  //     sum += accounts[index][i];
  //     i--;
  //   }
  //   result = sum > result ? sum : result;
  //   index--;
  // }
  // return result;
  
  // 第二种
  var index = accounts.length - 1;
  var result = 0;
  
  while(index >= 0) {
    var sum = accounts[index].reduce((a, c) => a + c, 0)
    result = sum > result ? sum : result;
    index--;
  }

  return result;
};
// @lc code=end

