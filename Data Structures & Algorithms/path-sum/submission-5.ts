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
        if(!root) return false;
        this.dfs(root,targetSum,root.val);
        return this.ans;
    }

    dfs(node, targetSum, currSum){
        if(!node.left && !node.right && currSum === targetSum){
            this.ans = true;
            return;
        } else if(this.ans){
            return;
        } else if(!node.left && !node.right){
            return;
        }
        if(node && node.left && !this.ans){
            this.dfs(node.left, targetSum, currSum + node.left.val);
        }
        if(node && node.right && !this.ans){
            this.dfs(node.right, targetSum, currSum + node.right.val);
        }
    }
}






