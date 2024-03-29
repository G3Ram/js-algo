/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  console.log(l1.val);
  let head = { val: -1, next: null };
  let l3 = head;
  while (l1 && l2) {
    if (l1.val > l2.val) {
      l3.next = l2;
      l2 = l2.next;
    } else {
      l3.next = l1;
      l1 = l1.next;
    }
    l3 = l3.next;
  }
  l3.next = l1 || l2;
  console.log(head.next);
  return head.next;
};

mergeTwoLists([1, 2, 4], [1, 3, 4]);
