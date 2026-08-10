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
        let stk: TreeNode[] = [];
        let ans: number[] = [];
        let curr = root;

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
