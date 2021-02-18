/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  // 1. 根节点 root = []
  // 2. left 或 right 其中一个值为 null, 此时不表示叶子节点，因为另一个 right 或 left 是可以继续搜索的，所以此出返回 false
  if (root === null) return false

  // left 和 right 都为 null 时表示叶子节点
  if (root.left === null && root.right === null) {
      return targetSum === root.val
  }

  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};
// @lc code=end

