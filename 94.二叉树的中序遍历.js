/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
// var inorderTraversal = function(root) {
//   var result = []
//   var fn = function(node) {
//       if (node) {
//           fn(node.left)
//           result.push(node.val)
//           fn(node.right)
//       }
//   }
//   fn(root)

//   return result
// };
// 迭代
var inorderTraversal = function(root) {
  const result = [];
  const stack = [];
  while (root || stack.length) {
      while (root) {
          stack.push(root);
          root = root.left;
      }
      root = stack.pop();
      result.push(root.val);
      root = root.right;
  }

  return result
}
// @lc code=end

