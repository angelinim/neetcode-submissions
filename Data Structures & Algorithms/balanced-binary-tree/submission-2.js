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
     * @return {boolean}
     */
    isBalanced(root) {
        if(!root){
            return true;
        }
        let depths = new Map();
        let stk = [root];
        let curr = root;

        while(stk.length > 0 || curr){
            while(curr){
                if(curr.right){
                    stk.push(curr.right);
                }
                stk.push(curr);
                curr = curr.left;
            }
            curr = stk.pop();

            // if we have not processed the right subtree of this node
            if(curr && curr.right && stk[stk.length -1] === curr.right){
                stk.pop();
                stk.push(curr);
                curr = curr.right;
            } else { // it's here where we are at the root of any given subtree
                // so this is the point where we figure out heights
                let leftDepth = depths.get(curr.left) || 0;
                let rightDepth = depths.get(curr.right) || 0;
                if(Math.abs(leftDepth-rightDepth) > 1){
                    return false;
                }
                let currDepth = Math.max(leftDepth,rightDepth)+1;
                depths.set(curr,currDepth);
                curr = null;
            }
        }
        
        return true;
    }
}





