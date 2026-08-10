class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let ans = 0;
        let count = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] === 1){
                count++;
            } else {
                if(count > ans){
                    ans = count;
                }
                count = 0;
            }
        }
        if(count > ans){
            ans = count;
        }
        return ans;
    }
}
