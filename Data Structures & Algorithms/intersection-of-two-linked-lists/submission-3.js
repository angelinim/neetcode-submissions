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
        while(ac || bc){
            if(ac && set.has(ac)){
                return ac;
            } else if(ac){
                set.add(ac);
                ac = ac.next;
            }

            if(bc && set.has(bc)){
                return bc;
            } else if(bc) {
                set.add(bc);
                bc = bc.next;
            }
        }
        return null;
    }
}







