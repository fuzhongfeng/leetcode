/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  var reverse = function(node) {
    if (node === null) return;

    [node.left, node.right] = [node.right, node.left]
    node.left !== null && reverse(node.left)
    node.right !== null && reverse(node.right)
  }
  reverse(root)
  
  return root
};
// @lc code=end

