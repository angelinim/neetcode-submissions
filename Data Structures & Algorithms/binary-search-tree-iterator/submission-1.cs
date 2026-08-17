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
public class BSTIterator {
    private TreeNode cur;
    private Stack<TreeNode> stk;

    public BSTIterator(TreeNode root) {
        this.stk = new Stack<TreeNode>();
        this.cur = root;
    }
    
    public int Next() {
        while(this.cur != null){
            this.stk.Push(cur);
            this.cur = this.cur.left;
        }
        this.stk.TryPop(out this.cur);
        var ans = this.cur.val;
        this.cur = this.cur.right;
        return ans;
    }
    
    public bool HasNext() {
        return this.cur != null || this.stk.Count > 0;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * BSTIterator obj = new BSTIterator(root);
 * int param_1 = obj.Next();
 * bool param_2 = obj.HasNext();
 */