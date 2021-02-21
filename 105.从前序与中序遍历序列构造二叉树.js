/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  var inorderMap = new Map()
  var preIndex = 0

  // O(n) 查找中序遍历 inorder，空间换时间
  inorder.forEach((v, i) => {
      inorderMap.set(v, i)
  })

  function recursion(left, right) {
      if (left > right) {
          return null
      }

      var val = preorder[preIndex]
      var root = new TreeNode(val)
      var inorderIndex = inorderMap.get(val)

      preIndex++

      // 一定要先创建左子树，再创建右子树。因为前续遍历顺序为：root left right，前续遍历数组从前向后取根节点值，所以是有顺序的
      root.left = recursion(left, inorderIndex - 1)
      root.right = recursion(inorderIndex + 1, right)

      return root
  }

  return recursion(0, inorder.length - 1)
};
// @lc code=end

