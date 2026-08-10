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
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if(!root){
            return 0;
        }
        let queue = [root];
        let ans = 0;

        while(queue.length > 0){
            let len = queue.length;
            for(let i = 0; i < len; i++){
                let node = queue.shift();
                if(node.left){
                    queue.push(node.left);
                }
                if(node.right){
                    queue.push(node.right);
                }
            }
            ans++;
        }
        return ans;
    }
}












