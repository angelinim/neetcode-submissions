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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root: TreeNode | null, targetSum: number): boolean {
        if(!root) return false;
        // try the iterative solution again.
        let stk = [[root, root.val]];
        while(stk.length > 0){
            let [curr, total] = stk.pop();
            if(curr.right){
                stk.push([curr.right, total + curr.right.val]);
            }
            if(curr.left){
                stk.push([curr.left, total + curr.left.val]);
            }

            if(!curr.left && !curr.right && total === targetSum){
                return true;
            }
        }

        return false;
    }
}





