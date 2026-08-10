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
    inorderTraversal(root) {
        let ans = [];
        if(!root){
            return ans;
        }
        let stk = [];
        let curr = root;

        while(curr || stk.length > 0){
            while(curr){
                stk.push(curr);
                curr = curr.left;
            }
            curr = stk.pop()
            ans.push(curr.val);
            curr = curr.right;
            console.log(ans);
        }

        return ans;
    }
}




