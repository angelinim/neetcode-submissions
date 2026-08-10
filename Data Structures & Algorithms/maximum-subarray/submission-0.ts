class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let maxSum = nums[0];

        for(let i = 0; i < nums.length; i++){
            let cur = 0;
            for(let j = i; j < nums.length; j++){
                cur += nums[j];
                if(cur > maxSum){
                    maxSum = cur;
                }
            }
        }

        return maxSum;
    }
}
