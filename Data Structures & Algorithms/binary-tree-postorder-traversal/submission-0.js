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
     * @return {number[]}
     */
    postorderTraversal(root) {
        let curr = root;
        let stk = [];
        let res = [];

        while(stk.length > 0 || curr){
            while(curr){
                if(curr.right){
                    stk.push(curr.right);
                }
                stk.push(curr);
                curr = curr.left;
            }

            curr = stk.pop();

            if(stk.length > 0 && 
                curr.right && 
                curr.right === stk[stk.length-1]){
                    stk.pop();
                    stk.push(curr);
                    curr = curr.right;
            }
            else {
                res.push(curr.val);
                curr = null;
            }
        }
        return res;
    }
}














