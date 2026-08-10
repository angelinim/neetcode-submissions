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
    diameterOfBinaryTree(root: TreeNode | null): number {
        let stk = [];
        let curr = root;
        let maxDia = 0;
        //height of left subtree + height of right subtree

        while(stk.length > 0 || curr){
            while(curr){
                stk.push(curr);
                curr = curr.left;
            }
            curr = stk.pop();
            maxDia = Math.max(maxDia,this.calcDepth(curr.left)+this.calcDepth(curr.right));
            curr = curr.right;
        }

        return maxDia;
    }

    calcDepth(rootNode){
        if(!rootNode){
            return 0;
        }
        let queue = [rootNode];
        let depth = 0;
        while(queue.length > 0){
            let len = queue.length;

            for(let i = 0; i < len; i++){
                let curr = queue.shift();

                if(curr.right){
                    queue.push(curr.right);
                }
                if(curr.left){
                    queue.push(curr.left)
                }
            }
            depth++;
        }
        return depth;
    }
}






