class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target: number, nums: number[]): number {
        // growing window until target is hit
        // if target is met, shrink the window until sum 
        // is smaller than target
        let ans = 100001;
        let l = 0;
        let sum = 0;

        for(let r = 0; r < nums.length; r++){
            sum += nums[r]
            while(sum >= target){
                ans = Math.min(r-l+1,ans);
                sum -= nums[l];
                l++;
            }
        }

        return ans > 100000 ? 0 : ans;
    }
}








