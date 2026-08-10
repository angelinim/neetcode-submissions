class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0;
        let r = nums.length-1;
        
        while(l <= r){
            let half = Math.floor((l+r)/2);
            if(nums[half] < target){
                // upper bound
                l = half+1;
            } else if (nums[half] > target){
                // lower bound
                r = half-1;
            } else {
                return half;
            }
        }

        return -1;
    }
}
