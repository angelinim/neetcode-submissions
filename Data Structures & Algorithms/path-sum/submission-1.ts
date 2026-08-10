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
        let stk = [[root, root.val]];

        while(stk.length > 0){
            let [node, total] = stk.pop();
            if(!node.left && !node.right && total === targetSum){
                return true;
            }

            if(node.left){
                stk.push([node.left, total + node.left.val])
            }
            if(node.right){
                stk.push([node.right, total + node.right.val]);
            }
        }
        return false;
    }
}







