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
    goodNodes(root: TreeNode | null): number {
        // track highest node in a var
        // track all nodes in the path in a map
        // use stack for dfs
        if(!root){
            return 0;
        }

        let stk = [];
        let path = []
        let lastVisited = null;
        let highest = [root.val];
        let cur = root;
        let count = 0;

        while(stk.length > 0 || cur){
            while(cur){
                stk.push(cur);
                path.push(cur.val);
                if(cur.val >= highest[highest.length-1]){
                    count++;
                    highest.push(cur.val);
                }
                cur = cur.left;
            }
            let peek = stk[stk.length-1];
            if(peek.right && lastVisited != peek.right){
                cur = peek.right;
            }else {
                let pathval = path.pop();
                if(pathval === highest[highest.length-1]){
                    highest.pop();
                }
                lastVisited = stk.pop()
            }
        }
        return count;
    }
}














