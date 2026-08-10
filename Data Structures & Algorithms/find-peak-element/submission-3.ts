class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums: number[]): number {
        if(nums.length === 1){
            return 0;
        }
        let l = 0;
        let r = nums.length-1;
        while(l <= r){
            let half = Math.floor((l+r)/2);
            if(half === 0 && 
                half+1 < nums.length){
                if(nums[half] > nums[half+1]){
                    return half;
                } else {
                    l = half+1;
                }
            } else if(half === nums.length-1 &&
                half-1 >= 0){
                if(nums[half] > nums[half-1]){
                    return half;
                } else {
                    r = half-1;
                }
            } else if(nums[half] > nums[half+1] && 
                nums[half] > nums[half-1]){
                    return half;
            } else if(nums[half] > nums[half+1] && 
                nums[half] < nums[half-1]){
                r = half-1;
            } else {
                l = half+1;
            }

        }
        return l;
    }
}
