class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let maxSum = nums[0];
        let cur = 0;

        for(let n of nums){
            if(cur < 0){
                cur = 0;
            }
            cur += n;
            maxSum = Math.max(maxSum, cur);
        }
        return maxSum;
    }
}
