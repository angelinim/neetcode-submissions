class KthLargest {
    ns: number[];
    k: number;
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k: number, nums: number[]) {
        // redo with the sorting soln
        this.ns = nums;
        this.k = k;
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.ns.push(val);
        this.ns.sort((a,b) => b-a);
        return this.ns[this.k-1]
    }
}
