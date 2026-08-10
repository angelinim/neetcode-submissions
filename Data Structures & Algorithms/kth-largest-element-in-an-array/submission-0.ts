class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        // min heap of size k
        // use nums as a stream of numbers
        nums.sort((a,b) => b-a);
        return nums[k-1];
    }
}
