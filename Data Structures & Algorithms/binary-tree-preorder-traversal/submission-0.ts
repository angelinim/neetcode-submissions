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
    preorderTraversal(root: TreeNode | null): number[] {
        if(!root){
            return [];
        }
        let ans: number[] = [];
        let stk: TreeNode[] = [];
        let cur: TreeNode = root;

        while(stk.length > 0 || cur){
            while(cur){
                ans.push(cur.val);
                stk.push(cur);
                cur = cur.left;
            }

            cur = stk.pop();
            cur = cur.right;
        }

        return ans;
    }
}











