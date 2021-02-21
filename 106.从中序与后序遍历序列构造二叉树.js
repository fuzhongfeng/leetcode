/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  var inorderMap = new Map()
  var postIndex = postorder.length - 1

  // O(n) 查找中序遍历 inorder，空间换时间
  inorder.forEach((v, i) => {
      inorderMap.set(v, i)
  })

  function recursion(left, right) {
      if (left > right) {
          return null
      }

      var val = postorder[postIndex]
      var root = new TreeNode(val)
      var inorderIndex = inorderMap.get(val)

      postIndex--

      // 一定要先创建右子树，再创建左子树。因为后续遍历顺序为：left right root，后续遍历数组从后向前取根节点值，所以是有顺序的
      root.right = recursion(inorderIndex + 1, right)
      root.left = recursion(left, inorderIndex - 1)

      return root
  }

  return recursion(0, inorder.length - 1)
};
// @lc code=end

