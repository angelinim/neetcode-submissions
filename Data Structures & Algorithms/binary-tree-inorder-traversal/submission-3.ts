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
        // do this again.
        // push and go left
        // pop get ans go right.
        let ans: number[] = [];
        let curr: TreeNode = root;
        let stk: TreeNode[] = [];

        while(stk.length > 0 || curr){
            if(curr){
                stk.push(curr);
                curr = curr.left;
            } else {
                curr = stk.pop();
                ans.push(curr.val);
                curr = curr.right;
            }
        }

        return ans;
    }
}
