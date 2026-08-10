class NumArray {
    arr
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.arr = nums
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        let sum = 0;
        while(left <= right){
            sum += this.arr[left++]
        }
        return sum;
    }
}
