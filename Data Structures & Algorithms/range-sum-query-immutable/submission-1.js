class NumArray {
    arr;
    prefixs = [];
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        // calculate prefix sums
        this.arr = nums;
        let runningSum = 0;
        for(let n of nums){
            runningSum += n;
            this.prefixs.push(runningSum);
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        if(left === 0){
            return this.prefixs[right];
        } 
        return this.prefixs[right]-this.prefixs[left-1];
    }
}











