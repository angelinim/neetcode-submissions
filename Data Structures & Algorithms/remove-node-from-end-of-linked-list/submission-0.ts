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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        // nth from the end
        // 3 pointers
        // 1) to find the end of the list
        // 2) to be n behind 1
        // 3) to be 1 behind 2.
        // once 1 is at the end, 2 will be eliminated by:
        // 3.next = 2.next
        // if 3 is null...
        let p1 = head;
        let p2 = head;
        let p3 = null;

        while(p1){
            p1 = p1.next;
            if(n>0){
                n--;
            } else {
                p3 = p2;
                p2 = p2.next;
            }
        }
        if(!p3){
            let newHead = p2.next;
            p2.next = null;
            return newHead;
        } else if(!p2.next && p3){
            p3.next = null
        } else if(!p2.next && !p3){
            head = null;
        } else if(p2.next && !p3){
            head = p2;
        }
        else {
            p3.next = p2.next
        }
        return head
    }
}
















