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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root: TreeNode | null, val: number): TreeNode {
        let node = new TreeNode(val);
        if(root == null){
            return node;
        }
        let curr = root;
        let prev = null;
        while(curr){
            prev = curr;
            if (val > curr.val){
                curr = curr.right;
            } else {
                curr = curr.left;
            }
        }
        if(val > prev.val){
            prev.right = node;
        } else {
            prev.left = node;
        }

        return root;
    }
}





