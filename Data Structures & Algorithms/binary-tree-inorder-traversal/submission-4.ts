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
    inorderTraversal(root: TreeNode | null): number[] {
        // do cleaner soln with 2 while loops
        // go as far left as you can
        // when you can no longer go left pop rec ans go right
        let curr = root;
        let stk = [];
        let ans = [];

        while(stk.length > 0 || curr){
            while(curr){
                stk.push(curr);
                curr = curr.left;
            }
            curr = stk.pop();
            ans.push(curr.val);
            curr = curr.right;
        }
        return ans
    }
}
