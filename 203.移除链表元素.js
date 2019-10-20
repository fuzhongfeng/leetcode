/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // 处理 [val, val, 1, 2, 3] 的情况
    while(head !== null && head.val === val) {
        head = head.next;
    }
   
    let header = head;
    while(head !== null && head.next !== null) {
        if (head.next.val === val) {
            head.next = head.next.next;
        } else {
            head = head.next;
        }
    }
    return header;
};
// @lc code=end

