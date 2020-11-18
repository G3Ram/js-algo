/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let actualVal = "";
  let revVal = "";
  let current = head;
  while (current) {
    actualVal = actualVal + current.val;
    revVal = current.val + revVal;
    current = current.next;
  }

  return actualVal === revVal;
};
