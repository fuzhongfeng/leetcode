/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// var preorderTraversal = function(root) {
//   var result = []
//   var fn = function(node) {
//       if (node) {
//          result.push(node.val) 
//          fn(node.left)
//          fn(node.right)
//       }
//   }
//   fn(root)

//   return result
// };

// 迭代，利用栈临时存储
var preorderTraversal = function(root) {
  var result = []
  var stack = []
  if (root !== null) stack.unshift(root)

  while(stack.length > 0) {
    var head = stack.shift()
    result.push(head.val)

    if (head.right !== null) {
        stack.unshift(head.right)
    }
    if (head.left !== null) {
        stack.unshift(head.left)
    }
  }

  return result
}
// @lc code=end

