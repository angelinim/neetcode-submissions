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
class BSTIterator {
    cur: TreeNode | null;
    stk: TreeNode[];
    /**
     * @constructor
     * @param {TreeNode} root
     */
    constructor(root: TreeNode | null) {
        this.stk = [];
        this.cur = root;
    }

    /**
     * @return {number}
     */
    next(): number {
        while(this.cur){
            this.stk.push(this.cur);
            this.cur = this.cur.left;
        }
        this.cur = this.stk.pop();
        const ret = this.cur.val;
        this.cur = this.cur.right;
        return ret;
    }

    /**
     * @return {boolean}
     */
    hasNext(): boolean {
        return this.cur != null || this.stk.length > 0;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
