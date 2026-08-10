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
     * @param {number} low
     * @param {number} high
     * @return {number}
     */
    rangeSumBST(root, low, high) {
        let stk = [];
        let sum = 0;
        let curr;
        stk.push(root);

        while(stk.length > 0){
            curr = stk.pop();

            if(curr.right){
                stk.push(curr.right)
            }
            if(curr.left){
                stk.push(curr.left)
            }
            if(curr.val >= low && curr.val <= high){
                sum += curr.val;
            }
        }

        return sum
    }
}


















