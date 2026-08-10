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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if(list1 == null){
            return list2;
        } else if(list2 == null) {
            return list1;
        }
        let head;
        let c1;
        let c2;
        if(list1.val < list2.val){
            head = list1;
            c1 = list1.next;
            c2 = list2;
        } else {
            head = list2;
            c1 = list1;
            c2 = list2.next;
        }
        let curr = head;
        while(c1 && c2){
            if(c1.val < c2.val){
                curr.next = c1;
                curr = c1;
                c1 = c1.next;
            } else {
                curr.next = c2;
                curr = c2;
                c2 = c2.next;
            }
        }

        if(c1){
            curr.next = c1;
        } else if(c2){
            curr.next = c2;
        }
        
        return head;
    }
}









