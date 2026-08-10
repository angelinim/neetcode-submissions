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
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) {
        let set = new Set();
        let ac = headA;
        let bc = headB;
        while(ac){
            set.add(ac);
            ac = ac.next;
        }
        while(bc){
            if(set.has(bc)){
                return bc;
            }
            bc = bc.next;
        }
        return null;
    }
}







