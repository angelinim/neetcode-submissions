/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    middleNode(head: ListNode | null): ListNode {
        let s = head;
        let f = head;

        while(f && f.next){
            s = s.next;
            f = f.next.next;
        }
        return s;
    }
}
