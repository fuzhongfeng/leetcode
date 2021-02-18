/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  // 1. 迭代方法
  // function symmetric(arr) {
  //     for (let i = 0; i < arr.length; i++) {
  //         if (arr[i] !== arr[arr.length - 1 - i]) {
  //             return false
  //         }
  //     }

  //     return true
  // }
  
  // var q = []

  // q.push(root)
  // while (q.length > 0) {
  //     var len = q.length
  //     var arr = []

  //     while(len-- > 0) {
  //         var node = q.shift()
  //         var val = null
  //         if (node !== null) {
  //             q.push(node.right)
  //             q.push(node.left)
  //             val = node.val
  //         }

  //         arr.push(val)
  //     }

  //     if (!symmetric(arr)) {
  //         return false
  //     }
  // }

  // return true

  // 2. 递归
  function symmetric(node1, node2) {
      if (!node1 && !node2) return true
      if (!node1 || !node2) return false

      return node1.val === node2.val && 
              // 这里是关键所在，
             symmetric(node1.left, node2.right) &&
             symmetric(node1.right, node2.left)
  }

  if (root === null) return true

  return symmetric(root.left, root.right)
};
// @lc code=end

