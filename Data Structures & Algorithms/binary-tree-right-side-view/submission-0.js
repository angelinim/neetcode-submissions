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
    rightSideView(root) {
        if(!root){
            return [];
        }
        let queue = [root];
        let ans = [];

        while(queue.length > 0){
            let len = queue.length;
            // only the right most node of that 
            // row will be recorded in ans
            ans.push(queue[queue.length-1].val);
            for(let i = 0; i < len; i++){
                let curr = queue.shift();
                if(curr.left){
                    queue.push(curr.left);
                }
                if(curr.right){
                    queue.push(curr.right);
                }
            }
        }

        return ans;
    }
}








