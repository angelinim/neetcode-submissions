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
    ans = false;
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root: TreeNode | null, targetSum: number): boolean {
        this.dfs(root, 0, targetSum);
        return this.ans;
    }

    dfs(root, total, target){
        if(root && !root.left && !root.right && total+root.val === target){
            console.log(root.val, total);
            this.ans = true;
            return;
        } else if(!root || this.ans){
            return;
        }

        this.dfs(root.left, total+root.val, target);
        this.dfs(root.right,total+root.val, target);
    }
}
