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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ): TreeNode {
        // dfs until finding one node.
        // from that point forward, keep track
        // of ancestor until finding other node.
        let stk = [];
        let cur = root;
        let ans: TreeNode = null;

        while(stk.length > 0 || cur){
            while(cur){
                if(cur && ((cur.val >= p.val && cur.val <= q.val )|| 
                    (cur.val >= q.val && cur.val <= p.val))){
                    return cur;
                }
                stk.push(cur);
                cur = cur.left;
            }
            cur = stk.pop();
            cur = cur.right;
        }

        return ans;
    }
}
