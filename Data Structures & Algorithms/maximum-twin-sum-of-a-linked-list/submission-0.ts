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
     * @return {number}
     */
    pairSum(head: ListNode | null): number {
        let n = 0;
        let cur = head;
        while(cur){
            n++;
            cur = cur.next;
        }
        let arr = []
        cur = head;
        for(let i = 0; i < n/2; i++){
            arr.push(cur.val);
            cur = cur.next;
        }
        for(let i = n/2-1; i >= 0; i--){
            arr[i] = arr[i]+cur.val;
            cur = cur.next;
        }

        return Math.max(...arr);
    }
}








