/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/** O(k2n) 复杂度
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  var list = null
  for (let i = 0; i < lists.length; i++) {
    list = mergeTwoLists(list, lists[i])
  }

  function mergeTwoLists(l1, l2) {
    if (l1 === null) return l2
    if (l2 === null) return l1

    var head = new ListNode()
    var pre = head

    while (l1 && l2) {
      if (l1.val < l2.val) {
        pre.next = l1
        l1 = l1.next
      } else {
        pre.next = l2
        l2 = l2.next
      }

      pre = pre.next
    }

    pre.next = l1 === null ? l2 : l1

    return head.next
  };

  return list
};
// @lc code=end

