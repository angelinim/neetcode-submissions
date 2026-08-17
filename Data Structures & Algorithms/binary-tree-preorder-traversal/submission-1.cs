/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

public class Solution {
    public List<int> PreorderTraversal(TreeNode root) {
        var stk = new Stack<TreeNode>();
        var ans = new List<int>();
        var cur = root;

        while(stk.Count > 0 || cur != null)
        {
            while(cur != null)
            {
                ans.Add(cur.val);
                stk.Push(cur);
                cur = cur.left;
            }

            stk.TryPop(out cur);
            cur = cur.right;
        }

        return ans;
    }
}











