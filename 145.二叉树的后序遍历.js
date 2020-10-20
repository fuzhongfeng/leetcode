/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
var postorderTraversal = function(root) {
  var result = []

  var fn = function(node) {
    if (node) {
      fn(node.left)
      fn(node.right)
      result.push(node.val)
    }
  }
  fn(root)

  return result
};

// 迭代
// var postorderTraversal = function(root) {

// };
// @lc code=end

