class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let ans = 0;
        let count = 0;

        for(let i = 0; i < nums.length; i++){
            if(nums[i]){
                count += 1;
            } else {
                count = 0;
            }
            ans = Math.max(count, ans);
        }

        return ans;
    }
}
