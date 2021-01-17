/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
   //  let pre = null;
   //  let temp = null;
   //   while(head) {
   //      temp = head.next;
   //      head.next = pre;
   //      pre = head;
   //      head = temp;
   //   }
   //   return pre;

   if (!head || !head.next) return head;
   var tail = reverseList(head.next);
   head.next.next = head;
   head.next = null;
   return tail;
};
// @lc code=end
// a => b => c => d
