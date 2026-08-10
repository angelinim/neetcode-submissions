/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        let curr = root;
        let stk = [];

        while(stk.length > 0 || curr){
            while(curr){
                stk.push(curr);
                curr = curr.left;
            }
            k--;
            curr = stk.pop();
            if(k < 1){
                return curr.val;
            }
            curr = curr.right;
        }

        return 0;
    }
}















